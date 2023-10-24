import "./expenses.css";
import NewExpense from "../newExpense/newExpense";

import YearFilter from "../Filter/filterByYear";
import ExpenseList from "./expenseList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(prop) {
  function newexpense(newExpenseobj) {
    prop.onAddNewExpense(newExpenseobj);
  }

  const [selected, setSelected] = useState("All");
  function getSelectedYear(selectedyear) {
    setSelected(selectedyear);
  }

  let filteredExpenses = prop.expenses.filter(
    (expense) =>
      expense.date.toLocaleString("pk-PK", { year: "numeric" }) === selected
  );
  if (selected === "All") {
    filteredExpenses = prop.expenses;
  }
  // let expenseToShow = <p className="para">No expense found!</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseToShow = filteredExpenses.map((expense, index) => (
  //     <ExpenseItem key={index} data={expense}></ExpenseItem>
  //   ));
  // }
  return (
    <div className="expenses_wrapper">
      <NewExpense onAddingNewObj={newexpense} />
      <YearFilter selectedYearFunc={getSelectedYear} />
      <ExpenseChart filteredExpense={filteredExpenses} />
      <ExpenseList filteredExpense={filteredExpenses} />
    </div>
  );
}
export default Expenses;
