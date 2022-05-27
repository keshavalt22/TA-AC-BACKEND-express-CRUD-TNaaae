let express = require("express");
let router = express.Router();


//user routes

router.get("/", (req, res) => {
    let users = ["Suraj", "Vivek", "Rahul", "Anshul"]
    res.render("users", {users : users})
});

router.get("/new", (req, res) => {
    res.render("userForm")
})

router.get("/:id", (req, res) => {
    let id = req.params.id;
    users.findById(id,(err, product) => {
        res.send(user);
    })
});

router.get("/:id/edit", (req,res) => {
    //
})

router.put("/:name", (req, res) => {
    let name = req.params.name;
    //
})

router.delete("/:id", (req, res) => {
    //
})

module.exports = router;