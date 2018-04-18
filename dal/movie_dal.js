var mysql =  require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getRating = function(callback)
{
    var query = 'SELECT * from movie_rating;';


    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.getMovie = function(callback)
{
    var query = 'SELECT * from movie;';


    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'insert into movie (movie_name, rating_number, date_watched, director_id) values (?,?,?,?)';

    var queryData = [params.movie_name,params.movie_add_rating,params.date_watched,params.director_id];
    connection.query(query,queryData, function(err,result){
        callback(err,result);
    });
};


exports.update = function(params,callback){
    var query = 'update movie set movie_name = ? , rating_number = ?, date_watched = ? where movie_id = ?';

    var queryData = [params.movie_name, params.movie_rating, params.date_watched, params.movie_id];

    connection.query(query,queryData, function(err,result){

        callback(err,result);

    });
};

exports.getinfo = function(movie_id, callback){
    var query = 'call movie_getinfo(?)';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};