require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// IMPORT YOUR SCHEMAS HERE
require("./models/books"); //This is just an example. Don't forget to delete this

const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cors());


app.get("/books",(res) => {

}) 





// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/booksRoutes")(app); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
