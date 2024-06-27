const express = require("express");
const phones = require("./phones.json");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("My phone information is coming soon toon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for id -", id);
  const phone = phones.find((i) => i.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`My phone information is running on Port- ${port}`);
});
