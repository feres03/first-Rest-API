const express = require('express');
const { modifiertodo, ajoutertodo, todoliste, deletetodo } = require('../Controllers/todoControllers');
const router = express.Router();


// Add a new  toDo to the db
router.post("/todos", ajoutertodo);

// Get a todo from the db
router.get("/todos", todoliste)

// Update a todo in the db
router.put("/todos/:id", modifiertodo)

// Delete a todo from the db
router.delete("/todos/:id", deletetodo)

module.exports = router;
