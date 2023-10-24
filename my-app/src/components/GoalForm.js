import "./goalForm.css";
import { useState } from "react";
function GoalForm(props) {
  const [input, setInput] = useState("");
  function inputChangeHander(event) {
    // console.log(event.target.value);
    setInput(event.target.value);
  }
  function HandleFormSubmit(event) {
    event.preventDefault();
    const newGoal = { des: input };
    console.log(newGoal);
    props.getNewGoal(newGoal);
  }
  return (
    <div className="goalForm">
      <form onSubmit={HandleFormSubmit}>
        <label>Course Goal</label>
        <input type="text" name="desc" onChange={inputChangeHander}></input>
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}
export default GoalForm;
