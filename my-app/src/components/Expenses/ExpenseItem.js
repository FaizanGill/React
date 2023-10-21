import Expensedate from "./Expensedate";

import "./expenseItem.css";
function ExpenseItem(prop) {
  return (
    <div className="ExpenseItem_wrapper">
      <Expensedate date={prop.data.date} title={prop.data.title} />
      {/* <Expenseprice price={prop.data.amount} /> */}
      <div className="expense-item-right">
        <div className="expense_price">{prop.data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
