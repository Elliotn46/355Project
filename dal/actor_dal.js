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


exports.update = function(params,callback){
    var query = 'update actor set actor_first_name = ?, actor_last_name = ? where actor_id = ?';

    var queryData = [params.actor_first_name, params.actor_last_name, params.actor_id];

    connection.query(query,queryData, function(err,result){

        callback(err,result);

    });
};

exports.getinfo = function(actor_id, callback){
    var query = 'call actor_getinfo(?)';
    var queryData = [actor_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};

exports.delete = function(actor_id, callback) {
    var query = 'DELETE FROM actor WHERE actor_id = ?';
    var queryData = [actor_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};