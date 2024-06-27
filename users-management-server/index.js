const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: "1", name: "Sabana", email: "saban@gmail.com" },
  { id: "2", name: "Sabnor", email: "sabnor@gmail.com" },
  { id: "3", name: "Sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post API hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser)
});

app.listen(port, () => {
  console.log(`User management server is running on Port- ${port}`);
});
