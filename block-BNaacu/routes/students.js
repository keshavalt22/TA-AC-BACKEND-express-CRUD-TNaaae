let express = require("express");
let router = express.Router();

//book routes

router.get("/new", (req, res) => {
    res.render('student.ejs')
});

router.post("/", (req, res) => {
    res.send(req.body);
})

router.get("/", (req, res) => {
    let names = ["ankit", "suraj", "prashant", "ravi"]
    res.render("list", { names: names});
});  



router.get("/:id", (req, res) => {
    res.render('studentDetail', {
        student: { name : "Rahul", email: "rahul@altcampus.io"}
    })

module.exports = router;