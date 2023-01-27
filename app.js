const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// routes
const postRouter = require("./routes/post");
const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.all(["/", "index"], indexRouter);
app.use("/post", postRouter);
app.use("/register", registerRouter);
// app.use('/edit',editRouter)

mongoose
  .connect(
    "mongodb+srv://FbBackEndAdmin:1234@fbbackendcluster.7wruoa6.mongodb.net/SocialApp"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err + " aldaa app js");
  });
