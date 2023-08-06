import mysql from "mysql2/promise";

class Database {
  async dbconnect() {
    // Create connection from database
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "e-feedback",
    });
    return connection;
  }
}

export default Database;
