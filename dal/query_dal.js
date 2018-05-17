var mysql =  require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getQuery = function(movie_id, callback){
    var query = 'call query_procedure(?)';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};

exports.getQuery1 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};

exports.getQuery2 = function(movie_id, callback){
    var query = 'select movie_name from movie ' +
    ' left join movie_rating on movie.rating_number = movie_rating.rating_number;';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery3 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
    'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery4 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery5 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery6 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery7 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery8 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery9 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};
exports.getQuery10 = function(movie_id, callback){
    var query = 'select movie_name from movie\n' +
        'where rating_number in ( select rating_number from movie where rating_number >= 9);';
    var queryData = [movie_id];

    connection.query(query, queryData,function(err,result){
        callback(err,result);
    });
};