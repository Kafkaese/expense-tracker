import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({title: '', amount: '', date: ''});

    const userInputChangeHandler = (event) => {
        if (event.target.type === 'text') {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    title: event.target.value
                }
            });
        } else if (event.target.type === 'number') {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    amount: event.target.value
                }
            });
        } else {
            setUserInput((prevState) => {
                return {
                    ...userInput,
                    date: event.target.value
                }
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

    const toggleFormOff = () => {
        console.log('form off')
        props.toggleForm(false)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Object.values(userInput).every(x => x === '')) {
            props.onSaveExpenseData({...userInput, date: new Date(userInput.date)});
        };

        setUserInput({title: '', amount: '', date: ''});
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                    value={
                        userInput.title
                    }
                    onChange={userInputChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'
                    value={
                        userInput.amount
                    }
                    min='0.01'
                    step='0.01'
                    onChange={userInputChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'
                    value={
                        userInput.date
                    }
                    min='2019-01-01'
                    max='2022-12-31'
                    onChange={userInputChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'><div className='new-expense__actions'>
            <button onClick={toggleFormOff}>Cancel</button>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button></div>
        
        </div>
    </form>

};

export default ExpenseForm;
