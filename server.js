const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  let htmlFile = path.join(__dirname, "index.html");
  res.sendFile(htmlFile);
});

app.listen(3002, () => {
  console.log("express started successfully");
});
