const connect = require("./db");
const express = require("express");
connect();

const app = express();
const port = 3000;

//Routes here
app.use("/api/notes", require("./routes/enotes"));
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("This is port 3000");
});

app.listen(port, () => {
  console.log("Running at port 3000");
});
