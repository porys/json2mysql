var config = require('./config');
var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
    host    :config.host,
    port : config.port,
    user : config.user,
    password : config.password,
    database:config.database
});
connection.connect((err) => {
  if (err) throw err;
});

fs.readdir(config.datafolder, (err,files) => {
  console.log(`found ${files.length} files.`);
  files.forEach(function(file){
    fs.readFile(config.datafolder + file, (err, data) => {
      if (err) throw err;
      var json = JSON.parse(data);
      json.forEach((row) => {
        var query = connection.query(`insert into ${file.substring(0,file.indexOf('.'))} set ?`, row, (err, result) => {
          if (err) throw err;
          console.log(query.sql);
        });
      });
    });
  });
});
