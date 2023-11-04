import "./goals.css";
import Goal from "./Goal";
import NewGoal from "./NewGoal";
function Goals(props) {
  function getNewGoal1(newGoal) {
    props.getNewGoal(newGoal);
  }
  function removeGoal1(removeIt) {
    props.removeGoal(removeIt);
  }
  return (
    <div className="innerContainer">
      <div className="newgoal">
        <NewGoal getNewGoal={getNewGoal1} removeGoal={removeGoal1} />
      </div>
      <div className="goals">
        {props.goals.map((goal, index) => (
          <Goal goal={goal} index={index + 1} removeGoal={removeGoal1} />
        ))}
      </div>
    </div>
  );
}
export default Goals;
