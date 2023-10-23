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
    console.log(title);
    const newExpenceObj = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(newExpenceObj);
    prop.getExpenceObj(newExpenceObj);
    setTitle("");
    setAmount("");
    setDate("");
  }
  return (
    <form onSubmit={handleFormSubmit} className="expense-form">
      <div className="inputs">
        <div>
          <label for="title">Enter title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={titleChangeHandler}
            value={title}
          ></input>
        </div>
        <div>
          <label for="price">Enter price</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={priceChangeHandler}
            value={amount}
          ></input>
        </div>
        <div>
          <label for="date">Enter date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={dateChangeHandler}
            value={date}
          ></input>
        </div>
      </div>
      <div className="button">
        <button className="add_Expense_btn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default Expenseform;
