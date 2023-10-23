import ExpenseItem from "./ExpenseItem";
function expenselist(prop) {
  if (prop.filteredExpense.length === 0) {
    return <p className="para">No expense found!</p>;
  }

  return (
    <ul>
      {prop.filteredExpense.map((expense, index) => (
        <ExpenseItem key={index} data={expense}></ExpenseItem>
      ))}
    </ul>
  );
}
export default expenselist;
