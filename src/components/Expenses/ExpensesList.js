import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {


    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses for selected year</h2>
    }

    return <ul className='expenses-list'>

        {
        props.expenses.map(expense => <ExpenseItem key={
                expense.id
            }
            data={
                expense
        }></ExpenseItem>)
    } </ul>
};

export default ExpensesList;
