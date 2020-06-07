const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect
  (process.env.MONGODB_URI || "mongodb://localhost/timeClock", {
    useNewUrlParser: true, useFindAndModify: false,
    useUnifiedTopology: true, useCreateIndex: true
  })
  .then(() => console.log('Mongoose has sucessfully connected to MongoDB!'))
  .catch((err) => console.log('There was an issue connecting to MongoDB'));

//app.use(require("./routes/static"));
app.use("/api/clockin", require("./routes/api/clockin"));
app.use("/api/company", require("./routes/api/company"));
app.use("/api/employee", require("./routes/api/employee"));
app.use("/api/location", require("./routes/api/location"));
app.use("/api/role", require("./routes/api/role"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});