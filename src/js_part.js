const users = [
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
];

// Calls 2 users between the age of 22 – 25
const filteredUsers = users.filter((user) => user.age >= 22 && user.age <= 25);
const selectedUsers = filteredUsers.slice(0, 2);

console.log(selectedUsers); // Outputs

// Find a user with the job role of a backend developer
const backendDeveloper = users.find((user) => user.job === "Backend Developer");

console.log(backendDeveloper);
