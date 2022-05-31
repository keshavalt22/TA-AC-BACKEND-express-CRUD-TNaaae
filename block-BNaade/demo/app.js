let express = require("express");
let mongoose = require('mongoose');

let path = require("path");

let usersRouter = require("./routes/users");

//connect to db
mongoose.connect("mongodb://127.0.0.1:27017/demo", {
    useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
    console.log("connected", err ? false : true);
});

//intantiating express app
let app = express();

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//capture form data
app.use(express.urlencoded({extended: false}));

//setup startic directory
app.use(express.static(path.join(__dirname, "public")));

//routing middleware
app.use("/users", usersRouter)


//error handler middleware
//404
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

//Custome error handler middleware
app.use((err, req, res, next) => {
    res.send(err);
})


//listener
app.listen(5000, () => {
    console.log("Server listening on 5k")
});