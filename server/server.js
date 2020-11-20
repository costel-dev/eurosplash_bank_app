const express = require("express");
const dotenv = require("dotenv");
const api = require("./api");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// initialiaze express server
const app = express();

//Configuring the Environment Variables
dotenv.config({ path: "./config/config.env" });

//Db connection
connectDB();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", api);
app.use(express.static("static"));

app.use(morgan("dev"));

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    res.json(err);
});


//Configure the port
const PORT = process.env.PORT || 8081;
app.listen(PORT, console.log(`Server started on port ${PORT}...`));

