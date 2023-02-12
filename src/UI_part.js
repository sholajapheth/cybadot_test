import { useState } from "react";
import classes from "./styles.module.css";

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

function UI_part() {
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

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className={classes.UI_body}>
      <div className={classes.container}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onDelete={() => handleDelete(index)}
          />
        ))}{" "}
      </div>
    </div>
  );
}

export default UI_part;
