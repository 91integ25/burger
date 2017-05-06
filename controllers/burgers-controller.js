var express = require('express');
var router = express.Router();

var burger = require("../model/burger");

router.get("/",function(req,res){
	burger.all(function(data){
		res.render("index",{burger:data});
	})
});

router.put("/:id",function(req,res){
	var condition = "id = " + req.params.id;

	burger.update({
		devoured: req.body.devoured
	},condition,function(){
		res.redirect("/")
	});
})
router.post("/",function(req,res){
	if(req.body.burger_name === ""){
		res.send("Name a burger you would like to eat");
	}else{
			burger.create([
		"burger_name","devoured"],
		[req.body.burger_name,req.body.devoured],
		function(){
			res.redirect("/");
		})
	}

})

module.exports = router;