const express = require("express"); // Makes backend server easy
const cors = require("cors");       // Allows frontend to talk to backend
const { execFile } = require("child_process");  // Let Node.js run external programs like password.exe
const { stdout } = require("process");

const app = express();              // Creates server

app.use(cors());
app.use(express.json());            // Allows JSON input

app.listen(5000, () => {            // Runs on http://localhost:5000
    console.log("Server running on port 5000");
});

// Route for password
app.post("/analyze", (req, res) => {

    const password = req.body.password;

    execFile("./password.exe", [password], (error, stdout, stderr) => {

        if(error)
            return res.send("Error running C++ program");

        res.send(stdout);
    });
});