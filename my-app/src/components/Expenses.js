import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(prop) {
  return (
    <div className="expenses_wrapper">
      <ExpenseItem data={prop.expenses[0]} />
      <ExpenseItem data={prop.expenses[1]} />
      <ExpenseItem data={prop.expenses[2]} />
      <ExpenseItem data={prop.expenses[3]} />
    </div>
  );
}

export default Expenses;
