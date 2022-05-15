import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {title: 'insurance',amount: 202.45, date: new Date(2022,4,12)},
    {title: 'bread',amount: 22.45, date: new Date(2022,4,12)},
    {title: 'war',amount: 22232.45, date: new Date(2022,4,12)},
    {title: 'vanity',amount: 20452.45, date: new Date(2022,4,12)},
    {title: 'vanity',amount: 20452.45, date: new Date(2022,4,12)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
   </div>
  );
}

export default App;
