import './ExpenseItem.css';
import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.data.title);

    const clickHandler = () => {setTitle('New')}

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.data.amount}€</div>
            </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    );

}

export default ExpenseItem;
