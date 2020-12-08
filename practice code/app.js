const express = require("exoress");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (require, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => console.log("listening on port 3000..."));
