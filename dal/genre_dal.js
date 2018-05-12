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
    var query = 'insert into genre (genre_name) values(?)';

    var queryData = [params.genre_name];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};


exports.update = function(params,callback){
    var query = 'update genre set genre_name = ? where genre_id = ?';

    var queryData = [params.genre_name,  params.genre_id];

    connection.query(query,queryData, function(err,result){

        callback(err,result);

    });
};

exports.getinfo = function(params, callback){
    var query = 'call genre_getinfo(?)';
    var queryData = [params.genre_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};

exports.delete = function(genre_id, callback) {
    var query = 'DELETE FROM genre WHERE genre_id = ?';
    var queryData = [genre_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};