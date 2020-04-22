const express = require("express");
const path = require("path");
const router = require("express").Router();

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.listen(PORT, function () {
    console.log(`🌎 Server listening on port ${PORT}!`);
});