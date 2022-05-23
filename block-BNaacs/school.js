let express = require('express');

let app = express();

let path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.listen(5000, () => {
    console.log("Server listening on 5k")
})