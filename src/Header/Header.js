import React from "react";
import classes from "./header_styles.module.css";

const Header = ({
  handleSortByAge,
  handleSortByName,
  filterByJob,
  filterByAgeRange,
  handleReset,
}) => {
  const [selectedJob, setSelectedJob] = React.useState("Frontend Developer");
  const [minAge, setMinAge] = React.useState(0);
  const [maxAge, setMaxAge] = React.useState(22);

  return (
    <div className={classes.header}>
      <div>
        <button className={classes.button} onClick={handleSortByAge}>
          Sort by age
        </button>
        <button className={classes.button} onClick={handleSortByName}>
          Sort by name
        </button>
        <button className={classes.button} onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className={classes.select_container}>
        <select
          onChange={(e) => setSelectedJob(e.target.value)}
          className={classes.select}
        >
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="Data Scientist">Data Scientist</option>
        </select>

        <button
          className={classes.button}
          onClick={() => filterByJob(selectedJob)}
        >
          Filter by job
        </button>
      </div>

      <div className={classes.input_container}>
        <input
          onChange={(e) => setMinAge(e.target.value)}
          className={classes.inputs}
          type="number"
          placeholder="min age"
        />
        <input
          onChange={(e) => setMaxAge(e.target.value)}
          className={classes.inputs}
          type="number"
          placeholder="max age"
        />

        <button
          className={classes.button}
          onClick={() => filterByAgeRange(minAge, maxAge)}
        >
          Filter age range
        </button>
      </div>
    </div>
  );
};

export default Header;
