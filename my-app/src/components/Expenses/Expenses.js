import "./expenses.css";
import NewExpense from "../newExpense/newExpense";
import ExpenseItem from "./ExpenseItem";
function Expenses(prop) {
  function getExpenceObj(obj) {
    const finalObj = {
      ...obj,
    };
    prop.getExpenceObj(finalObj);
  }
  return (
    <div className="expenses_wrapper">
      <NewExpense getExpenceObj={getExpenceObj} />
      <ExpenseItem data={prop.expenses[0]} />
      <ExpenseItem data={prop.expenses[1]} />
      <ExpenseItem data={prop.expenses[2]} />
      <ExpenseItem data={prop.expenses[3]} />
    </div>
  );
}

export default Expenses;
