import "./expensedate.css";
function expencedate(prop) {
  const month = prop.data.date.toLocaleString("pk-PK", { month: "long" });
  const year = prop.data.date.toLocaleString("pk-PK", { year: "numeric" });
  const day = prop.data.date.toLocaleString("pk-PK", { day: "numeric" });
  return (
    <div className="expense_date">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="title">{prop.data.title}</div>
    </div>
  );
}

export default expencedate;
