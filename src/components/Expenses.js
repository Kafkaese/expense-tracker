import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

    return (
        <div className="expenses">
            {
            props.expenses.map(expense => <ExpenseItem data={expense}></ExpenseItem>)
        } </div>
    )
}


export default Expenses;
