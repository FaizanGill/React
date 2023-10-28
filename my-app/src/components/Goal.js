import "./goal.css";
function Goal(props) {
  function HandleClick(event) {
    props.removeGoal(event.target.innerText);
  }
  return (
    <div onClick={HandleClick} className="goal">
      <p>{props.goal.des}</p>
    </div>
  );
}
export default Goal;
