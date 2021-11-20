const express = require("express");
const router = express.Router();

const { sequelize, Project } = require("../../models");

// get all tasks
router.get("/projects", async (req, res, next) => {
  try {
    const tasks = await Project.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
  }
});

// create new task
router.post("/projects", async (req, res, next) => {
  try {
    const task = {
      task: req.body.task,
      creator: req.body.creator,
      assignee: req.body.assignee,
      documents: req.body.documents,
      status: req.body.status,
      dueDate: req.body.dueDate,
    };

    Project.create(task)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || "An internal server error occurred.",
        });
      });
  } catch (error) {
    console.error(error);
  }
});

// update task
router.put("/projects/:id", async (req, res, next) => {
  try {
    const id = req.params;
    const task = {
      task: req.body.task,
      creator: req.body.creator,
      assignee: req.body.assignee,
      documents: req.body.documents,
      status: req.body.status,
      dueDate: req.body.dueDate,
    };

    Project.update(task, {
      where: id,
    })
      .then((data) => {
        res.send({
          message: "Task was updated successfully.",
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: error || "Error updating task.",
        });
      });
  } catch (error) {
    console.error(error);
  }
});

// delete task
router.delete("/projects/:id", async (req, res, next) => {
  try {
    const id = req.params;

    Project.destroy({
      where: id,
    })
      .then((data) => {
        res.send({
          message: "User was deleted successfully.",
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: error || "Error deleting user.",
        });
      });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
