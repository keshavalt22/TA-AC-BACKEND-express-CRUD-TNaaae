let express = require("express");
const user = require("../model/user");
let router = express.Router();

//book routes

router.get("/new", (req, res) => {
    res.render('student.ejs')
});

router.post("/", (req, res) => {
    //
})

router.get("/", (req, res) => {
    let names = ["ankit", "suraj", "prashant", "ravi"]
    res.render("list", { names: names});
})

router.get("/:id", (req, res) => {
    let id = req.params.id;
    user.findById({'_id':id}, (err, user) => {
        console.log(err);
        res.send(user);
    })
})

module.exports = router;