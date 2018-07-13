var express = require('express');
var router = express.Router();

var burger = require("../models/burger.js");

router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body);
    burger.insertOne(req.body.burger_name, req.body.devoured, function(result) {
        res.json({ id: result.insertId });
    });
    
    // res.json({ id: result.insertId });
    
    // res.end();  
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('This is the condition', condition);
    console.log(condition);
    console.log(req.body);
    burger.moveOne(
        
        {
            devoured: true
        },
        condition,
        function(result) {
            
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            
            res.status(200).end();
        }
    )
    // console.log(req.body);
    // burger.moveOne(req.body.id);
});

module.exports = router;
