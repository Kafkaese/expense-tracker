import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

    return (
        <Card className="expenses">
            {
            props.expenses.map(expense => <ExpenseItem data={expense}></ExpenseItem>)
        } </Card>
    )
}


export default Expenses;
