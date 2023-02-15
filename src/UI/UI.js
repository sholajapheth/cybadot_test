import { useState } from "react";
import classes from "./UI_Styles.module.css";
import Header from "../Header/Header";

function UserCard({ user, onDelete }) {
  return (
    <div>
      <div className={classes.cardContainer}>
        <div className={classes.cardHeader}>
          <h3>{user.name}</h3>
        </div>
        <div className={classes.cardBody}>
          <p className={classes.info}>Age: {user.age}</p>
          <p className={classes.info}>Job: {user.job}</p>
          <p className={classes.info}>Country: {user.country}</p>
          <p className={classes.info}>Hobby: {user.hobby}</p>
        </div>

        <div>
          <button className={classes.deleteButton} onClick={onDelete}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

function UI() {
  const [defaultUsers, setDefaultUsers] = useState([
    {
      name: "John Doe",
      age: 24,
      job: "Frontend Developer",
      country: "USA",
      hobby: "Basketball",
    },
    {
      name: "Jane Smith",
      age: 22,
      job: "Backend Developer",
      country: "Canada",
      hobby: "Reading",
    },
    {
      name: "Bob Johnson",
      age: 28,
      job: "Fullstack Developer",
      country: "UK",
      hobby: "Music",
    },
    {
      name: "Samantha Lee",
      age: 25,
      job: "Data Scientist",
      country: "Australia",
      hobby: "Traveling",
    },
    {
      name: "Tom Wilson",
      age: 30,
      job: "Product Manager",
      country: "Germany",
      hobby: "Hiking",
    },
  ]);

  const [users, setUsers] = useState([
    {
      name: "John Doe",
      age: 24,
      job: "Frontend Developer",
      country: "USA",
      hobby: "Basketball",
    },
    {
      name: "Jane Smith",
      age: 22,
      job: "Backend Developer",
      country: "Canada",
      hobby: "Reading",
    },
    {
      name: "Bob Johnson",
      age: 28,
      job: "Fullstack Developer",
      country: "UK",
      hobby: "Music",
    },
    {
      name: "Samantha Lee",
      age: 25,
      job: "Data Scientist",
      country: "Australia",
      hobby: "Traveling",
    },
    {
      name: "Tom Wilson",
      age: 30,
      job: "Product Manager",
      country: "Germany",
      hobby: "Hiking",
    },
  ]);

  const handleSortByAge = () => {
    const sortedUsers = [...defaultUsers].sort((a, b) => a.age - b.age);
    setUsers(sortedUsers);
  };

  const handleSortByName = () => {
    const sortedUsers = [...defaultUsers].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setUsers(sortedUsers);
  };

  const filterByJob = (job) => {
    const filteredUsers = defaultUsers.filter((user) => user.job === job);
    setUsers(filteredUsers);
  };

  const filterByAgeRange = (minAge, maxAge) => {
    const filteredUsers = defaultUsers.filter(
      (user) => user.age >= minAge && user.age <= maxAge
    );
    setUsers(filteredUsers);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleReset = () => {
    setUsers(defaultUsers);
  };

  return (
    <>
      <Header
        handleSortByAge={handleSortByAge}
        handleSortByName={handleSortByName}
        filterByJob={filterByJob}
        filterByAgeRange={filterByAgeRange}
        handleReset={handleReset}
      />
      <div className={classes.UI_body}>
        <div className={classes.container}>
          {users.map((user, index) => (
            <>
              <UserCard
                key={index}
                user={user}
                onDelete={() => handleDelete(index)}
              />
            </>
          ))}{" "}
        </div>
      </div>
    </>
  );
}

export default UI;
