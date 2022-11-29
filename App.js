import ExpenseItem from './components/ExpenseItem';

function App() {
  const  LocationOfExpenditure = [
    {
      id: 'el',
      title: 'Food',
      amount: 10,
      date: new Date(2022, 11,28),
    },
    { id: 'e2', title: 'Petrol', amount: 100, date: new Date(2022, 12, 1) },
    {
      id: 'e3',
      title: 'Movies',
      amount: 200,
      date: new Date(2022, 12, 5),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={LocationOfExpenditure[0].title}
        amount={LocationOfExpenditure[0].amount}
        date={LocationOfExpenditure[0].date}
        ></ExpenseItem>
      <ExpenseItem
      title={LocationOfExpenditure[1].title}
      amount={LocationOfExpenditure[1].amount}
      date={LocationOfExpenditure[1].date}></ExpenseItem>
      <ExpenseItem
      title={LocationOfExpenditure[2].title}
      amount={LocationOfExpenditure[2].amount}
      date={LocationOfExpenditure[2].date}></ExpenseItem>
    </div>
  );
}

export default App;