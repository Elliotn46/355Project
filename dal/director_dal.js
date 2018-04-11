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
    var query = 'insert into director (director_first_name, director_last_name (?,?)';

    var queryData = [params.director_first_name,params.director_last_name];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};