import "./goal.css";
function Goal(props) {
  function HandleClick(event) {
    console.log(event.target.innerHTML);
  }
  return (
    <div onClick={HandleClick} className="goal">
      <p>{props.goal.des}</p>
    </div>
  );
}
export default Goal;
