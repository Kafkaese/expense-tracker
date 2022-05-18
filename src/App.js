import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {title: 'insurance',amount: 202.45, date: new Date(2022,4,12)},
    {title: 'bread',amount: 22.45, date: new Date(2022,4,12)},
    {title: 'war',amount: 22232.45, date: new Date(2022,4,12)},
    {title: 'vanity',amount: 20452.45, date: new Date(2022,4,12)},
    {title: 'vanity',amount: 20452.45, date: new Date(2022,4,12)},
    {title: 'korean food',amount: 29.54, date: new Date(2022,5,15)}
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}></Expenses>
   </div>
  );
}

export default App;
