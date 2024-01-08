const express = require("express");
const router = express.Router();
const { getTodos, createTodos, deleteTodos } = require("../controller/todos");
// router.get("/", getTodos);
// router.post("/", createTodos);
// router.delete("/:id", deleteTodos);
//or
router.route("/").get(getTodos).post(createTodos);
router.route("/:id").delete(deleteTodos);
