const express = require("express"); // Makes backend server easy
const cors = require("cors");       // Allows frontend to talk to backend
const { execFile } = require("child_process");  // Let Node.js run external programs like password.exe
const { stdout } = require("process");

const app = express();              // Creates server

app.use(cors());
app.use(express.json());            // Allows JSON input

// ------------------Route for password--------------------
app.post("/analyze", (req, res) => {    // Special URL route
    
    const password = req.body.password; // Gets password send from frontend
    
    execFile("./password.exe", [password], (error, stdout, stderr) => { // Runs C++ exe
        
        if(error)
            return res.send("Error running C++ program");
        
        res.send(stdout); // Send output back to browser
    });
});

//-------------------Runs Server-----------------------
app.listen(5000, () => {            // Runs on http://localhost:5000
    console.log("Server running on port 5000");
});