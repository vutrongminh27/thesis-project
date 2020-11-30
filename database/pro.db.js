var express = require('express');
var app = express();



app.get('/', function (req, res) {
   
    var sql = require("mssql");

    var config = {
        user: 'Scada',
        password: '1234',
        server: 'localhost', 
        database: 'Senior1' ,
        port: 1433,
        options: {
            encrypt: false
        }
    };


    sql.connect(config, function (err) {
    
        if (err) 
        
            console.log(err);

        var request = new sql.Request();
           
        request.query(`select * from Table_1 where ID = 'ALL01' and Value >= 1 `, function (err, recordset) {
            
            if (err) {
            console.log(err)
            throw err;
            }else{
                res.render('pro',{list : recordset.recordset});
            }
        });
    });
});

module.exports = app;

