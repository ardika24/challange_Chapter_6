const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const errorHandlers = require("./middlewares/erorrHandlers");
const router = require("./router");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use("/", express.static(path.join(__dirname, "public/")));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/app");

app.use((req, res, next) => {
  res.locals.url = req.originalUrl;
  next();
});

app.use(router);
app.use(errorHandlers.error500);
app.use(errorHandlers.error404);

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});
