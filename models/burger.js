var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.selectAll('burgers', function(data){
            cb(data);
        });
    }
}