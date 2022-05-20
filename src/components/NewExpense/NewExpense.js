import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const saveExpenseDataHAndler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        };
        console.log(expenseData);
    };
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHAndler}/>
        </div>
    );

};

export default NewExpense
