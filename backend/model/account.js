import Database from "./database.js";

class Account extends Database {
  async getAllCourses() {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(`SELECT name FROM course`);
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }

  async getAccounts(course) {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(
        `SELECT * FROM accounts WHERE course = ?`,
        [course]
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }

  async deleteAccount(id) {
    const db = await this.dbconnect();
    try {
      await db.execute(`DELETE FROM accounts WHERE id = ?`, [id]);
      return {
        isSuccess: true,
      };
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }
}

export default Account;
