import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../Filter/ExpensesFilter";
import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {


    const [filterYear, setFilterYear] = useState('2022');

    //const [expenseArray, setExpenseArray] = useState(props.expenses);

    const filterExpenses = (filteredValue) => {
        setFilterYear(filteredValue);
        console.log(filterYear);
        // console.log(String(props.expenses[0].date.getFullYear()));
        // console.log(props.expenses.filter(x => String(x.date.getFullYear())===filterYear));
       /*  setExpenseArray((prevState) => {
            return(prevState.filter(x => String(x.date.getFullYear()) === filterYear))
        });
        */ 
    };

    const filteredExpenses = props.expenses.filter(x => String(x.date.getFullYear())===filterYear);

    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter selectedValue={filterYear}
                    filterHandler={filterExpenses} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
                 </Card>
        </div>
    )
}


export default Expenses;
