import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIsLoggedIn,
  selectSummary,
  selectTransactions,
  selectUser,
  // selectSummary,
} from '../redux/selectors';
import {
  addTransaction,
  getAllTransactions,
  getCategories,
  getInfo,
  getSummary,
  logIn,
  logOut,
  register,
} from '../redux/operations';
// import { nanoid } from 'nanoid';

function App() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectUser);
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectTransactions);
  const summary = useSelector(selectSummary);

  const handleRegister = () => {
    dispatch(
      register({
        username: 'iuser16',
        email: 'email16@server.com',
        password: 'wps9916',
      })
    );
  };
  const handleLogin = () => {
    console.log('login');
    dispatch(
      logIn({
        email: 'email15@server.com',
        password: 'wps9915',
      })
    );
  };
  const handleLogout = () => {
    console.log('userLoggedIn=', userLoggedIn);
    console.log('logout');
    dispatch(logOut());
  };

  const handleGetInfo = () => {
    console.log('getinfo');
    dispatch(getInfo());
  };

  const handleAddIncome = () => {
    console.log('handleAddIncome');
    const transaction1 = {
      transactionDate: '2024-03-25',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'another 1000',
      amount: 1000,
    };
    dispatch(addTransaction(transaction1));
  };

  const handleAddExpense = () => {
    console.log('handleAddExpense');
    // Pt a adauga o cheltuiala se foloseste ID-ul corespunzator
    // numelui cheltuielii din array-ul categories
  };

  const handleUpdate = () => {
    console.log('handleUpdate');
    // Pt a modifica o tranzactie se foloseste ID-ul corespunzator
    // din array-ul transactions
  };

  const handleGetAll = () => {
    console.log('handleGetAll');
    dispatch(getAllTransactions());
  };
  const handleGetCategories = () => {
    console.log('handleGetCategories');
    dispatch(getCategories());
  };
  const handleGetSummary = () => {
    console.log('handleGetSummary');
    dispatch(getSummary());
  };

  const handleDisplayValues = () => {
    console.log('current user ', currentUser);
    console.log('categories ', categories);
    console.log('transactions ', transactions);
    console.log('summary ', summary);
  };

  return (
    <>
      <div>Ready for your code!</div>
      <br />
      <i>The code within App component is only for testing purposes</i>
      <br />
      <br />
      <p>current user={currentUser.username}</p>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <button type="button" onClick={handleGetInfo}>
        Get user info
      </button>
      <br />
      <br />
      <p>Before push buttons below, push Login button above</p>
      <br />
      <button type="button" onClick={handleAddIncome}>
        Add income
      </button>
      <button type="button" onClick={handleAddExpense}>
        Add expense
      </button>
      <button type="button" onClick={handleUpdate}>
        Update expense
      </button>
      <button type="button" onClick={handleGetAll}>
        Get all transactions
      </button>
      <button type="button" onClick={handleGetCategories}>
        Get categories
      </button>
      <button type="button" onClick={handleGetSummary}>
        Get summary
      </button>
      <button type="button" onClick={handleDisplayValues}>
        Display values
      </button>
    </>
  );
}

export default App;
