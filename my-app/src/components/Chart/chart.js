import ChartBar from "./chartbar";
import "./chart.css";
function Chart(prop) {
  console.log(prop.chartDataPoints);
  const values = prop.chartDataPoints.map((point) => point.value);
  console.log(values);
  let maxValue = Math.max(...values);

  return (
    <div className="chart">
      {prop.chartDataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
}
export default Chart;
