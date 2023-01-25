// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
// Initialize express and define a port
const app = express();
const PORT = 3000;

require("dotenv").config();


// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());


let requests = []; // array to store console logs


app.post("/hook", (req, res) => {
  console.log("Webhook recieved:");
  console.log(JSON.stringify(req.body) + "\n ___________ \n"); // Call your action on the request here
  requests.push(JSON.stringify(req.body)); // add the log to the array
  res.status(200).end(); // Responding is important
});


app.get("/", (req, res) => {
  res.render("index", { requests: requests });
});

app.post("/console", (req, res) => {
  requests.push(JSON.stringify(req)); // add the log to the array
  logs.push(req.query.log); // add the log to the array
  // res.redirect('/');
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.set("view engine", "ejs"); //set the template engine
