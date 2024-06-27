const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req,res) => {
  res.send("Hello form my first ever server");
});
app.listen(port, () => {
  console.log(`My first server is runnig on port- ${port}`);
});
