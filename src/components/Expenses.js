import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

    return (
        <div className="expenses">
        <ExpenseItem data={props.expenses[0]}></ExpenseItem>
        <ExpenseItem data={props.expenses[1]}></ExpenseItem>
        <ExpenseItem data={props.expenses[2]}></ExpenseItem>
        <ExpenseItem data={props.expenses[3]}></ExpenseItem>
        </div>
        
    )
}

export default Expenses;