import "./filterByYear.css";
function filterByYear(prop) {
  function valueChangeHandler(event) {
    prop.selectedYearFunc(event.target.value);
  }
  return (
    <div className="filter_container">
      <p>Filter By Year</p>
      <form>
        <select onChange={valueChangeHandler}>
          <option selected>All</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </form>
    </div>
  );
}

export default filterByYear;
