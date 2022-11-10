
var con = require('../db_connection')

function IfConnectError(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connection id : ' + con.threadId);
}

function IfCreateError(err) {
    if (err) throw err;
    console.log('Table Created');
}

function IfInsertError(err, res) {
    if (err) { //失败就报个错
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log("数据库增的结果：");
    console.log(res);
}

var CreateTable = function () {
    var ConnectSql = "CREATE TABLE BLOGS (BlogId VARCHAR(255) ,Title VARCHAR(255),Author VARCHAR(255),Context mediumtext,PubTime DATETIME(6),Type VARCHAR(255))";
    con.connect(IfConnectError);
    con.query(ConnectSql, IfCreateError);
    con.end();
}

var Blog = ['Hello', 'jefferry', "I am Context", '2020-11-10 22:22:22', 'C++'];

var Insert_blog = function (Blog) {
    var InsertSql = "INSERT INTO BLOGS(BlogId,Title,Author,Context,PubTime,Type) VALUES(uuid(),?,?,?,?,?)";
    con.connect(IfConnectError);
    con.query(InsertSql, Blog, IfInsertError);
    con.end();
}

Insert_blog(Blog);

module.exports = {CreateTable,Insert_blog}