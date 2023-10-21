import Expensedate from "./Expensedate";
import Expenseprice from "./Expenseprice";
import "./expenseItem.css";
function ExpenseItem(prop) {
  return (
    <div className="ExpenseItem_wrapper">
      <Expensedate data={prop.data} />
      <Expenseprice price={prop.data.amount} />
    </div>
  );
}

export default ExpenseItem;
