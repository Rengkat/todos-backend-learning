const express = require("express");
const todos = require("./router/todos");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/v1/todos", todos);
app.listen(port, () => console.log("Server listening on port 8000"));
