import "./expenses.css";
import NewExpense from "../newExpense/newExpense";
// import ExpenseItem from "./ExpenseItem";
import YearFilter from "../Filter/filterByYear";
import ExpenseList from "./expenseList";
import { useState } from "react";
// import filterByYear from "../Filter/filterByYear";
function Expenses(prop) {
  // const newarr = prop.expenses.filter((expense) => expense.amount > 400); //Filters the expenses
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
      <ExpenseList filteredExpense={filteredExpenses} />
      {/* {expenseToShow} */}
      {/* {filteredExpenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense}></ExpenseItem>
      ))} */}
    </div>
  );
}
export default Expenses;
