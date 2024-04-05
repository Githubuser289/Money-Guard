import { useState} from "react";
import {useSelector} from "react-redux"
import { AmountInput, CommentInput, Container, ContainerTransaction, DateContainer, SelectInput, TransactionForm } from "./AddTransactionForm";
import { ButtonsContainer } from "components/Logout/LogoutForm.styled";
import { FaCalendar } from "react-icons/fa";
import ReactDatePicker from "react-datepicker";
import { selectCategories } from "../../redux/selectors";
import { CustomButton } from "components/RegistrationForm/RegistrationForm.styled";

const AddTransaction =() =>{
    const [startDate, setStartDate] = useState(new Date());
    const [selectvalues, setselectValues] = useState('');
    const categories = useSelector(selectCategories);

console.log(categories);


const handleChange = (e)=>{
  setselectValues(e.target.value);
}
    return(
<>

<TransactionForm>
<h1>Add transaction</h1>
<SelectInput name="category" value = {selectvalues} onChange = {handleChange}>
<option value ="" disabled hidden>Select a category</option>
{/* {categories.map(category => <option value={category} key={category.key}>{category}</option>)} */}
<option value ="main expenses">Main expenses</option>
<option value ="products">Products</option>
<option value ="car">Car</option>
<option value ="self care">Self care</option>
<option value ="child care">Child care</option>
<option value ="household products">Household products</option>
<option value ="education">Education</option>
<option value ="leisure">Leisure</option>
<option value ="other expenses">Other expenses</option>
<option value ="entertament">Entertament</option>
</SelectInput>
<ContainerTransaction>
    <AmountInput name="" placeholder="0.00"/> 
  <DateContainer>
    <ReactDatePicker 
    selected={startDate} 
    onChange={(date) => setStartDate(date)} />
    <FaCalendar />
  </DateContainer>
</ContainerTransaction>

<CommentInput name="comment" placeholder="Comment"/>
<ButtonsContainer>
<CustomButton type="submit">ADD</CustomButton>
<CustomButton isNavLink to = "/home">CANCEL</CustomButton>
</ButtonsContainer>

</TransactionForm>
</>
    )
}
export default AddTransaction