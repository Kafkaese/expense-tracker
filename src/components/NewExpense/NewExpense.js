import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';



const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHAndler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        };
        console.log(expenseData);

        
        props.onSaveExpenseData(expenseData)
    };

    const toggleFormHandler = (toggleValue) => {
        setShowForm(true);
    }

    console.log(showForm)
    if (showForm === false) {
        return (
        <div className='new-expense'>
            <button onClick={toggleFormHandler}>Add New Expense</button>
        </div>
        );
    }
    else {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHAndler}/>
            </div>
        );
    }
    

};

export default NewExpense
