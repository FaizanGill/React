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
];

function App() {
  // const [newExpense, setNewExpense] = useState("");
  const [expense, setExpense] = useState(expenses);
  function getExpenceObj(obj) {
    const finalObj = {
      ...obj,
    };
    // const latest = finalObj;
    console.log(finalObj);
    setExpense((prevExpenses) => [finalObj, ...prevExpenses]);
    console.log(expense);
    // setExpense(expense.push(latest));
    // return finalObj;
  }
  return (
    <div>
      <Expenses expenses={expense} onAddNewExpense={getExpenceObj} />
    </div>
  );
}

export default App;
