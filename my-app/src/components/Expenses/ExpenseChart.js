import Chart from "../Chart/chart";

function ExpenseChart(prop) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log(prop.filteredExpense);
  for (const expense of prop.filteredExpense) {
    let month = expense.date.getMonth();
    console.log(month);
    chartDataPoints[month].value += expense.amount;
    console.log(chartDataPoints);
  }
  // console.log(chartDataPoints);
  return (
    <div>
      <Chart chartDataPoints={chartDataPoints} />
    </div>
  );
}
export default ExpenseChart;
