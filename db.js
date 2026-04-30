import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "switchyard.proxy.rlwy.net",
  port: 25934,
  user: "root",
  password: "zTnazIGuSBgyBUlNAHIsewfINLXjEbNg",
  database: "nizeyiman_project4"
});
db.execute("drop table if exists users")
db.execute("create table if not exists users (id int auto_increment primary key, username varchar(255), email varchar(255), password varchar(255))")

db.connect()
  .then(() => {
    console.log("Connected to the database!");
    })

export default db;