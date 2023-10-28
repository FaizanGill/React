import "./newGoal.css";
import GoalForm from "./GoalForm";
function NewGoal(props) {
  function getNewGoal2(newGoal) {
    props.getNewGoal(newGoal);
  }
  // function removeGoal2(removeIt) {
  //   props.removeGoal(removeIt);
  // }
  return (
    <div className="newGoal">
      <GoalForm getNewGoal={getNewGoal2} />
    </div>
  );
}
export default NewGoal;
