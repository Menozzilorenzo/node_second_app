const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
require("./models/pet");
//require("./routes/petRoutes")(app);

mongoose.connect("mongodb+srv://lorenzo:forchies11@cluster0-gofyw.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});
const PORT = 5000;

app.listen(PORT, () =>{
    console.log("Server running");
});

