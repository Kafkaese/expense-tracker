import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 5, 14);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 295.22;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}€</div>
            </div>

        </div>
    );

}

export default ExpenseItem;
