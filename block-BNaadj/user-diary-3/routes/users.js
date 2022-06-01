let express = require("express");
let router = express.Router();
let User = require('../models/User');

//user routes

router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users', {users: users})
    })
});

router.get("/new", (req, res) => {
    res.render("userForm")
})

router.get("/:id", (req, res) => {
    let id = req.params.id;
    User.findById(id,(err, user) => {
        if(err) return next(err);
        res.render('singleUser', {user: user});
    })
});

router.post("/", (req, res, next) => {
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/users/' + user._id);
    })
})

router.get("/:id/edit", (req,res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('edituserForm', {user: user});
    })
})

router.post("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect('/users/' + id);
    })
})

router.get("/:id/delete", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if(err) return next(err);
        res.redirect('/users');
    })  
})

module.exports = router;