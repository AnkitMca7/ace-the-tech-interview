const express = require('express');
const connect = require("./configs/db.js");
const bodyParser = require("body-parser");
const path = require('path'); // Required for serving static files
const Port = process.env.PORT || 3755;
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Define your routes/controllers
const loginAuth = require("./controller/auth.controller.js");
app.use("/", loginAuth);

const RegisterAuth = require("./controller/auth.controller.js");
app.use("/", RegisterAuth);

const quizAdd = require("./controller/quizAdd.controller.js");
app.use("/admin", quizAdd);

const quiz = require("./controller/displayQuiz.controller.js");
app.use("/quiz", quiz);

const getquiz = require("./controller/quizAdd.controller.js");
app.use("/quiz", getquiz);

const user = require("./controller/auth.controller.js");
app.use("/user", user);

const userResult = require("./controller/userData.controller.js");
app.use("/userResult", userResult);

// Serve static files from the build folder
const buildPath = path.join(__dirname, '../build'); // Adjust path if necessary
app.use(express.static(buildPath));

// Serve index.html file for any non-API requests (optional, for single-page applications like React)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
app.listen(Port, async function() {
    try {
        await connect();
        console.log(`Listening on ${Port}`);
    } catch (error) {
        console.log(error);
    }
});
