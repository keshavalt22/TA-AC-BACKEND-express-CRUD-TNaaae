let express = require('express');
let path = require('path');
// let mongoose = require("mongoose");
// let user = require("./model/user");
let app = express();

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use(express.urlencoded({ extended: false}));

// mongoose.connect("mongodb://127.0.0.1:27017/sample", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },(err) => {
//     console.log(err ? err : "connected to database");
// });


app.use("/", require('./routes/index'));
app.use("/student", require("./routes/students"));


app.use((req, res, next) => {
    res.status(404).send("Page not found")
})

app.listen(5000,() => {
    console.log('Server listening on 5k')
});
