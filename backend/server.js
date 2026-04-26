const express = require("express"); // Makes backend server easy
const cors = require("cors");       // Allows frontend to talk to backend

const app = express();              // Creates server

app.use(cors());
app.use(express.json());            // Allows JSON input

app.listen(5000, () => {            // Runs on http://localhost:5000
    console.log("Server running on port 5000");
});