const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.get("api/v1/todos", (req, res) => {
  res.send("get todos");
});
app.post("api/v1/todos", (req, res) => {
  res.send("post todos");
});
app.delete("api/v1/todos/1", (re, res) => {
  res.send("delete todos");
});
app.listen(port, () => console.log("Server listening on port 8000"));
