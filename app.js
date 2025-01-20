require('dotenv').config();

const express = require("express");
const path = require("path");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require("./middlewares/auth");
const blogRoute = require('./routes/blog');

const Blog = require("./models/blog");
//creating application
const app = express();
const port = process.env.port;

//connecting to mongoDb
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDb"));

//use middlewares to parse the form data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


app.get("/", async (req, res) => {
    const allBlog = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlog,
    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})