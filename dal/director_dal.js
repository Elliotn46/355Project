var mysql =  require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getDirector = function(callback)
{
    var query = 'SELECT * from director;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'insert into director (director_first_name,director_last_name) values (?,?)';

    var queryData = [params.director_first_name,params.director_last_name];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};


exports.update = function(params,callback){
    var query = 'update director set director_first_name = ?, director_last_name = ? where director_id = ?';

    var queryData = [params.director_fisrt_name, params.director_last_name, params.director_id];

    connection.query(query,queryData, function(err,result){

        callback(err,result);

    });
};

exports.getinfo = function(director_id, callback){
    var query = 'call director_getinfo(?)';
    var queryData = [director_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};