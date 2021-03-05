const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error")

const app = express();

// app.set('view engine','pug');

// app.engine("handlebars", expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
// app.set("view engine", "handlebars");

app.set('view engine', 'ejs')
app.set("views", "views"); // Not necessary, already default

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);