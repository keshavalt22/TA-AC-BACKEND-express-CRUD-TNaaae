let express = require("express");
let router = express.Router();


//user routes

router.get("/", (req, res) => {
    let users = ["Suraj", "Vivek", "Rahul", "Anshul"]
    res.render("users", {users : users})
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    user.findById(id,(err, product) => {
        res.send(user);
    })
});

router.get("/new", (req, res) => {
    res.render("userForm")
})

module.exports = router;