const express = require("express");
const router = express.Router();

const { sequelize, Users } = require("../../models");

// get all user
router.get("/users", async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
});

// create new user
router.post("/users", async (req, res, next) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      adminAccess: req.body.adminAccess,
      projectAccess: req.body.projectAccess,
      notifications: req.body.notifications,
      notificationTime: req.body.notificationTime,
    };

    console.log(user);

    Users.create(user)
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

// update user
router.put("/users/:id", async (req, res, next) => {
  try {
    const id = req.params;
    const user = {
      name: req.body.name,
      email: req.body.email,
      adminAccess: req.body.adminAccess,
      projectAccess: req.body.projectAccess,
      notifications: req.body.notifications,
      notificationTime: req.body.notificationTime,
    };

    Users.update(user, {
      where: id,
    })
      .then((data) => {
        res.send({
          message: "User was updated successfully.",
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: error || "Error updating user.",
        });
      });
  } catch (error) {
    console.error(error);
  }
});

// delete user
router.delete("/users/:id", async (req, res, next) => {
  try {
    const id = req.params;

    Users.destroy({
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
