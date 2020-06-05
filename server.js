const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect
  (process.env.MONGODB_URI || "mongodb://localhost/timeClock", {
    useNewUrlParser: true, useFindAndModify: false,
    useUnifiedTopology: true, useCreateIndex: true
  })
  .then(() => console.log('Mongoose has sucessfully connected to MongoDB!'))
  .catch((err) => console.log('There was an issue connecting to MongoDB'));

//app.use(require("./routes/static.js"));
app.use(require("./routes/app.js"));
app.use(require("./routes/users.js"));

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});