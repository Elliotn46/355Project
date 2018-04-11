var mysql =  require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getGenre = function(callback)
{
    var query = 'SELECT * from genre;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'insert into genre (genre_name (?)';

    var queryData = [params.genre_name];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};