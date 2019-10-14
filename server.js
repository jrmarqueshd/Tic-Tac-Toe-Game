const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");

app.use(express.static(path.join(__dirname, "src")));
app.set("views", path.join(__dirname, "src"));
app.engine("html", require("ejs").renderFile);
app.set("views engine", "html");

app.get("/", (req, res) => {
	res.render("index.html");
});

server.listen(3000);
