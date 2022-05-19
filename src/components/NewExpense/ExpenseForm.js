import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = () => {

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({title: '', amount: '', date: ''});

    const userInputChangeHandler = (event) => {
        if (event.target.type === 'text') {
            setUserInput({
                ...userInput,
                title: event.target.value
            });
        } else if (event.target.type === 'number') {
            setUserInput({
                ...userInput,
                amount: event.target.value
            });
        } else {
            setUserInput({
                ...userInput,
                date: event.target.value
            });
        }
        console.log(userInput);
    };

    /* const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            title: event.target.value
        });
        console.log(event);
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value
        });
    }; */


    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                    onChange={userInputChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'
                    onChange={userInputChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31'
                    onChange={userInputChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>

};

export default ExpenseForm;
