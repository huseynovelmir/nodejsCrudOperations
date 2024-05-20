const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { log } = require("console");

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

const PORT = 8080;

app.listen(PORT, () => console.log("Port is runnning in", PORT));
