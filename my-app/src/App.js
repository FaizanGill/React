import Goals from "./components/Goals";
import "./App.css";
import { useState } from "react";
function App() {
  const allGoals = [
    { id: "e1", des: "Do All Exercises" },
    { id: "e2", des: "Do All Homeworks" },
  ];
  const [myGoals, setMyGoals] = useState(allGoals);
  function getNewGoal(newGoal) {
    setMyGoals((prevGoals) => [newGoal, ...prevGoals]);
  }

  return (
    <div className="mainContainer">
      <Goals goals={myGoals} getNewGoal={getNewGoal} />
    </div>
  );
}

export default App;
