import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { FaCalendar } from "react-icons/fa";
import { AmountInput, CommentInput, Container, DateContainer, SelectInput, TransactionForm } from "./AddTransactionForm.styled";
import { ButtonsContainer } from "components/Logout/LogoutForm.styled";


const AddTransactionForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    return(
<>
<TransactionForm>
<h1>Add transaction</h1>
<select name="category">
<option value ="" disabled selected hidden>Select a category</option>
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
</select>
<Container>
    <AmountInput name="" placeholder="0.00"/> 
  <DateContainer>
    <ReactDatePicker 
    selected={startDate} 
    onChange={(date) => setStartDate(date)} />
    <FaCalendar />
  </DateContainer>
</Container>

<CommentInput name="comment" placeholder="Comment"/>
<ButtonsContainer>
<button type="submit">SAVE</button>
<button type="button">CANCEL</button>
</ButtonsContainer>

</TransactionForm>
</>
    )
}
 
export default AddTransactionForm;