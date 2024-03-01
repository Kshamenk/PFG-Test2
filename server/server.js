const express = require("express");
const path = require("path");
const app = express();
const PORT = 5173;

app.use(express.json());

app.use(express.static(path.join(__dirname)));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json();
});

app.get("/register", (req, res) => {
  res.json({ message: "Register endpoint is available" });
});
// new User
app.post("/register", (req, res) => {
  //Body
  const { username, email, password } = req.body;
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
