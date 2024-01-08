const getTodos = (req, res) => {
  res.send("get todos");
};
const createTodos = (req, res) => {
  res.send("post todos");
};
const deleteTodos = (re, res) => {
  res.send("delete todos");
};
module.exports = { getTodos, createTodos, deleteTodos };
