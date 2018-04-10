var mysql =  require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getMovie = function(callback)
{
    var query = 'SELECT * from movie;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'insert into movie (movie_name, movie_rating, date_watched, director_id) values (?,?,?,?)';

    var queryData = [params.movie_name,params.movie_rating,params.date_watched,params.director_id];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};