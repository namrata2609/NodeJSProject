const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const basicAuth = require('express-basic-auth');
app.use(basicAuth({
    users: { 'admin': 'welcome' }
}));
app.get('/', (req, res) => {
  res.send('authorized');
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./app/routes/user")(app);
require("./app/routes/order")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync();