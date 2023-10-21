import Expenseform from "./expenseform";
import "./newExpense.css";
function newExpense(prop) {
  function getExpenceObj(obj) {
    const finalObj = {
      ...obj,
    };
    prop.getExpenceObj(finalObj);
  }

  return (
    <div className="new_expense_container">
      <Expenseform getExpenceObj={getExpenceObj} />
    </div>
  );
}
export default newExpense;
