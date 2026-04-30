import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "switchyard.proxy.rlwy.net",
  port: 25934,
  user: "root",
  password: "zTnazIGuSBgyBUlNAHIsewfINLXjEbNg",
  database: "nizeyiman_project4",
  
});

await db.connect()
.then(() => {
    console.log("Connected to the database successfully!");
    
})
.catch((error) => {
    console.error("Error connecting to the database:", error.message);
});



export default db;