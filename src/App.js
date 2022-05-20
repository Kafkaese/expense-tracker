import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

function App() { /*  let expenses = [
    {title: 'insurance',amount: 202.45, date: new Date(2022,4,12), id: 0}
  ];
 */
    const [expenses, setExpenses] = useState([{
            title: 'insurance',
            amount: 202.45,
            date: new Date(2022, 4, 12),
            id: 0
        }]);

    const saveExpenseDataHandler = (savedUserInput) => {
        setExpenses([
            ...expenses,
            savedUserInput
        ]);
    };

    return (
        <div>
            <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
