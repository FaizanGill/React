import "./expenseform.css";
import { useState } from "react";
function Expenseform(prop) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    // console.log(title);
  }
  function priceChangeHandler(event) {
    setAmount(event.target.value);
    // console.log(amount);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    // console.log(date);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const newExpenceObj = {
      title: { title },
      amount: { amount },
      date: { date },
    };
    console.log(newExpenceObj);
    prop.getExpenceObj(newExpenceObj);
  }
  return (
    <form onSubmit={handleFormSubmit} className="expense-form">
      <div className="inputs">
        <div>
          <label>Enter title</label>
          <input type="text" name="title" onChange={titleChangeHandler}></input>
        </div>
        <div>
          <label>Enter price</label>
          <input
            type="number"
            name="price"
            onChange={priceChangeHandler}
          ></input>
        </div>
        <div>
          <label>Enter date</label>
          <input type="date" name="date" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default Expenseform;
