import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItem = (props) => {
    
    //const [title, setTitle] = useState(props.data.title);

    //const clickHandler = () => {setTitle('New')}

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.amount}€</div>
            </div>
       
        </Card>
    );

    // <button onClick={clickHandler}>Change Title</button>
}

export default ExpenseItem;
