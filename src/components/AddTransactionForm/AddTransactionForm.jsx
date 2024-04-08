import { forwardRef, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddTitle,
  ErrorMessageStyled,
  Label,
  StyledComment,
  StyledForm,
  StyledLabel,
  StyledSum,
  SwitcherWrapper,
  Wrapper,
} from './AddTransactionForm.styled';
import { object, string, number } from 'yup';
import { CustomSwitch } from './CustomSwitch';
import { RiCalendar2Fill } from 'react-icons/ri';
import { addTransaction, getCategories } from '../../redux/operations';
import { CustomSelect } from './SelectCategory';
import DatePicker from 'react-datepicker';
import { selectCategories } from '../../redux/selectors';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CancelButton,
  LogoutButton,
} from 'components/Logout/LogoutForm.styled';

const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string()
    .max(30, 'Maximum must be 30 characters')
    .required('Please fill in comment'),
  category: string().min(3),
});
const initialValues = {
  type: 'expense',
  category: '',
  value: '',
  date: new Date(),
  comment: '',
};

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
    <RiCalendar2Fill className="date-icon" onClick={onClick} />
  </>
));

export default function AddTransactionForm({ closeModal }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTransaction(values));
    console.log(addTransaction(values));
    resetForm();
  };
  // console.log(categories);

  const optionCategories = categories.map(category => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  return (
    <>
      <AddTitle>Add transaction</AddTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, validate, ...props }) => (
          <StyledForm autoComplete="off">
            <SwitcherWrapper>
              <CustomSwitch
                checked={values.type === 'expense'}
                onChange={isChecked => {
                  setFieldValue('type', isChecked ? 'expense' : 'income');
                }}
              />
            </SwitcherWrapper>
            {values.type === 'expense' ? (
              <>
                <CustomSelect
                  options={optionCategories}
                  value={optionCategories.find(
                    option => option.value === values.category
                  )}
                  onChange={value => {
                    setFieldValue('category', value.value);
                  }}
                  className="Select"
                  name="category"
                />
                <ErrorMessageStyled name="category" component="div" />
              </>
            ) : (
              (values.category = '')
            )}
            <Wrapper>
              <Label>
                <StyledSum type="number" name="value" placeholder="0.00" />
                <ErrorMessageStyled name="value" component="div" />
              </Label>
              <Label>
                <Field name="date" validate={validate}>
                  {({ field, form, meta }) => (
                    <DatePicker
                      name="date"
                      dateFormat="dd.MMM.yyyy"
                      maxDate={new Date()}
                      selected={values.date || null}
                      onChange={date => setFieldValue('date', date)}
                      shouldCloseOnSelect={true}
                      customInput={<CustomInput />}
                    />
                  )}
                </Field>
              </Label>
            </Wrapper>
            <StyledLabel>
              <StyledComment
                type="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessageStyled name="comment" component="div" />
            </StyledLabel>
            <LogoutButton type="submit">Add</LogoutButton>
            <CancelButton onClick={closeModal}>Cancel</CancelButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
