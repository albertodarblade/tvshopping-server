require("module-alias/register");
require("dotenv").config({ path: __dirname + "/.env" });

const config = require("./config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const services = require("./services");
const mongo = require("./providers/mongo");
const middleware = require("./middlewares/rootMiddleware");

mongo.connect();
const app = express();
app.use(cors());
app.use(middleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(services);

app.get("/", (req, res) => {
  res.send("em-auth users provider for em applications");
});

app.set("port", config.PORT);
const server = http.createServer(app);
server.listen(config.PORT, () =>
  console.log(`API running on localhost:${config.PORT}`)
);
