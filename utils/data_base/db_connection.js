
var mysql = require('mysql');

var con = mysql.createConnection({
        host :'sh-cynosdbmysql-grp-9kuapl7i.sql.tencentcdb.com',
        port:'20356',
        user:'root',
        password:'qQ13527503399',
        database:'jefferrysblog',
});

module.exports = con;
