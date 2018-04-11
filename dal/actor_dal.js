var mysql =  require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getActor = function(callback)
{
    var query = 'SELECT * from actor;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'insert into actor (actor_first_name,actor_last_name) values (?,?)';

    var queryData = [params.actor_first_name,params.actor_last_name];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};