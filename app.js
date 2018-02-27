var express = require("express");
var exphbs = require("express-handlebars");
const PORT = process.env.PORT || 5000;
var routes = require("./routes/route.js");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

 var app = express();
  app.use(express.static(__dirname + "/public"))
  app.set("view engine", "handlebars");
  app.engine(
    "handlebars",
    exphbs({
      extname: "handlebars"
    })
  );
  app.get("/", routes.city);
  app.get("/:city", routes.city);
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
