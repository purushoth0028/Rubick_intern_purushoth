const { Router } = require("express");

const { getToDo } = require("../Controllers/TableController");

const router = Router();

router.get("/get-todo", getToDo);
module.exports=router;