import Database from "./database.js";

class UserData extends Database {
  async getUserData(userID) {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(
        `SELECT id, firstname, lastname, email, account_type FROM accounts WHERE id = ?`,
        [userID]
      );
      return { isSuccess: true, data: data[0] };
    } catch (err) {
      return { isSuccess: false, error: err.message };
    } finally {
      db.end();
    }
  }
}

export default UserData;
