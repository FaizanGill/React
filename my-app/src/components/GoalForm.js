import "./goalForm.css";
import { useState } from "react";

function GoalForm(props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function inputChangeHandler(event) {
    setInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (input.trim() === "") {
      setError("Please enter a valid goal."); // Set an error message if input is empty or contains only whitespace.
    } else {
      setError(""); // Reset the error message if the input is valid.
      const newGoal = { des: input };
      props.getNewGoal(newGoal);
      setInput("");
    }
  }

  return (
    <div className="goalForm">
      <form onSubmit={handleFormSubmit}>
        <label>Course Goal</label>
        <input
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
