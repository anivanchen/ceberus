const express = require("express");
const router = express.Router();

const { sequelize, Access } = require("../../models");

router.get("/access", async (req, res, next) => {
  try {
    const accessCode = await Access.findByPk(1);
    res.status(200).json(accessCode);
  } catch (error) {
    console.error(error);
  }
});

router.post("/access", async (req, res, next) => {
  try {
    const accessCodes = {
      accessCode: req.body.accessCode,
      adminAccessCode: req.body.adminAccessCode,
    };

    Access.create(accessCodes)
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

router.put("/access", async (req, res, next) => {
  try {
    const accessCodes = {
      accessCode: req.body.accessCode,
      adminAccessCode: req.body.adminAccessCode,
    };

    Access.update(accessCodes, {
      where: { id: 1 },
    })
      .then((data) => {
        res.send({
          message: "Codes were updated successfully.",
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error updating access codes.",
        });
      });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
