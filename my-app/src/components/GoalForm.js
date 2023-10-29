import "./goalForm.css";
import { useState } from "react";

function GoalForm(props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  function inputChangeHandler(event) {
    setIsValid(true);
    setError("");
    setInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (input.trim().length === 0) {
      setIsValid(false);
      setError("Please enter a valid goal.");
      return;
    }
    const newGoal = { des: input };
    props.getNewGoal(newGoal);
    setInput("");
    // if (input.trim() === "") {
    //   setError("Please enter a valid goal."); // Set an error message if input is empty or contains only whitespace.
    // } else {
    //   setError(""); // Reset the error message if the input is valid.
    //   const newGoal = { des: input };
    //   props.getNewGoal(newGoal);
    //   setInput("");
    // }
  }

  return (
    <div className="goalForm">
      <form onSubmit={handleFormSubmit}>
        <label style={{ color: isValid ? "black" : "red", outline: "none" }}>
          Course Goal
        </label>
        <input
          style={{ borderColor: isValid ? "black" : "red" }}
          type="text"
          name="desc"
          value={input}
          onChange={inputChangeHandler}
        ></input>
        <button type="submit">Add Goal</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default GoalForm;
