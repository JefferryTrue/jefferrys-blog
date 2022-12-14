
var con_data = require('../db_connection')
var mysql = require('mysql');

function ConnectToDataBase(){
    var con = mysql.createConnection(con_data);
    con.connect((err) => {
        if (err) {
            console.error('[Error connecting]: ' + err.stack);
            return;
        }
        console.log('[connection id]: ' + con.threadId);
    });
    return con;
};

exports.CreateTable = function() {
    var con = ConnectToDataBase();
    var ConnectSql = "CREATE TABLE BLOGS (BlogId VARCHAR(100),Title VARCHAR(255),Author VARCHAR(100),Context MEDIUMTEXT,PubTime DATETIME(6),Type VARCHAR(50))"
    con.query(ConnectSql, (err) => {
        if (err) throw err;
        console.log('[Table Created]');
    });
    con.end();
};

//var Blog = ['Hello', 'jefferry', "I am Context", '2020-11-10 22:22:22', 'C++'];

exports.Insert_blog = function(Blog,callback) {
    var InsertSql = "INSERT INTO BLOGS(BlogId,Title,Author,Context,PubTime,Type) VALUES(upper(replace(uuid(),'-','')),?,?,?,?,?)";
    var con = ConnectToDataBase();
    con.query(InsertSql, Blog, callback);
    con.end();
};

exports.Delete_blog = function(BlogId,callback){
    var DeleteSql = "DELETE FROM BLOGS WHERE BlogId=?"
    var con = ConnectToDataBase();
    var IdArray = [];
    IdArray.push(BlogId);
    con.query(DeleteSql,IdArray,callback);
    con.end();
}

exports.Update_blog = function(Blog,callback){
    var UpdateSql = "UPDATE BLOGS SET Title=?,Author=?,Context=?,PubTime=?,Type=? WHERE BlogId=?"
    var con = ConnectToDataBase();
    con.query(UpdateSql,Blog,callback);
    con.end();
}

exports.Get_all = function(callback){
    var SelectSql = "SELECT * FROM BLOGS ORDER BY PubTime DESC";
    var con = ConnectToDataBase();
    con.query(SelectSql,callback);
    con.end();
}

exports.Get_one = function(BlogId,callback){
    var GetOneSql = "SELECT * FROM BLOGS WHERE BlogId=?";
    var con = ConnectToDataBase();
    var IdArray = [];
    IdArray.push(BlogId);
    con.query(GetOneSql,IdArray,callback);
    con.end();
}
