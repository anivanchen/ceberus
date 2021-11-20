const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes/api/routes");

// middleware

const app = express();

function useRoutes(app, baseEndpoint, pathTo) {
  fs.readdirSync(pathTo).forEach((file) => {
    app.use(baseEndpoint, require(path.join(pathTo, file)));
  });
}

const { sequelize } = require("./models");

function setup(db) {
  if (process.env.DATABASE_LOAD === "force") {
    return db.sync({ force: true });
  }

  if (process.env.DATABASE_LOAD === "alter") {
    return db.sync({ alter: true });
  }
  return db.sync();
}

app.use(cors());
app.use(express.json());
useRoutes(app, "/api", path.join(__dirname, "routes/api"));

(async () => {
  await setup(sequelize);
  app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`);
  });
})();
