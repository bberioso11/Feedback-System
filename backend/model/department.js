import Database from "./database.js";

class Department extends Database {
  async checkDepartment(name) {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(
        `SELECT * FROM departments WHERE name = ?`,
        [name]
      );
      if (data[0]) {
        return { isValid: true };
      } else {
        return { isValid: false };
      }
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }
}

export default Department;
