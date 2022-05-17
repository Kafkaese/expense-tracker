import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    
    return (
        <Card className='expense_item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.amount}€</div>
            </div>

        </Card>
    );

}

export default ExpenseItem;
