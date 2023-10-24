import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import "./App.css";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "A Book",
    amount: 321.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e6",
    title: "A Printer",
    amount: 410.12,
    date: new Date(2022, 9, 14),
  },
  {
    id: "e7",
    title: "A Projector",
    amount: 1200,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e7",
    title: "A Dice",
    amount: 2000.54,
    date: new Date(2020, 1, 14),
  },
  {
    id: "e7",
    title: "A Dice",
    amount: 2.54,
    date: new Date(2020, 1, 14),
  },
];

function App() {
  const [expense, setExpense] = useState(expenses);
  function getExpenceObj(obj) {
    const finalObj = {
      ...obj,
    };

    console.log(finalObj);
    setExpense((prevExpenses) => [finalObj, ...prevExpenses]);
    console.log(expense);
  }
  return (
    <div>
      <Expenses expenses={expense} onAddNewExpense={getExpenceObj} />
    </div>
  );
}

export default App;
