const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    name: "Elmir",
    age: 21,
  },
  {
    id: 2,
    name: "Elnur",
    age: 22,
  },
];

//! get users
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
    length: users.length,
  });
});
//!Post Users
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const newUser = {
    id: uuidv4(),
    name,
    age,
  };
  users = [...users, newUser];
  res.status(201).send(newUser);
});

//! Delete users
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);
  res.status(200).json({ success: true });
});

//!Update user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);
  const { name, age } = req.body;
  const newUser = {
    id: req.params.id,
    name,
    age,
  };
  users = [...users, newUser];
  res.status(201).send(newUser);
}); 
//! get user by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  res.status(200).send(user);
});
const PORT = 8080;

app.listen(PORT, () => console.log("Port is runnning in", PORT));
 