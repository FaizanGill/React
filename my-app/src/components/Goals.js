import "./goals.css";
import Goal from "./Goal";
import NewGoal from "./NewGoal";
function Goals(props) {
  function getNewGoal1(newGoal) {
    props.getNewGoal(newGoal);
  }
  return (
    <div className="innerContainer">
      <div>
        <NewGoal getNewGoal={getNewGoal1} />
      </div>
      <div className="goals">
        {props.goals.map((goal) => (
          <Goal goal={goal} />
        ))}
      </div>
    </div>
  );
}
export default Goals;
