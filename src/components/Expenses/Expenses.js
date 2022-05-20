import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from 'react';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2022');

    const filterExpenses = (filteredValue) => {
        setFilterYear(filteredValue);
        console.log(filterYear)
    };

    return (
        <div>
            <ExpensesFilter filterHandler={filterExpenses}></ExpensesFilter>
            <Card className="expenses">
                {
                props.expenses.map(expense => <ExpenseItem key={expense.id} data={expense}></ExpenseItem>)
            } </Card>
        </div>
    )
}


export default Expenses;
