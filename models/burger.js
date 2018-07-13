var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
        // console.log('Here is the data: ' + data);
    },
    insertOne: function(burger_name, devoured, cb) {
        orm.insertOne(burger_name, devoured, function(res) {
            cb(res);
        });
        // console.log('Here is the data: ' + burger_name + devoured);
    },
    moveOne: function(objColVals, condition, cb) {
        orm.moveOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
    
}

// orm.selectAll();
// orm.insertOne('Onion Burger', true);
// orm.insertOne('Veggie Burger', false);

module.exports = burger;