let express = require("express");
let app = express();
let path = require("path");

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routing middleware
app.use("/users", require("./routes/users"))


app.use((req, res, next) => {
    res.send("Page not found");
})

app.listen(5000, () => {
    console.log("Server listening on 5k")
});