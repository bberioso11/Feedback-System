import Database from "./database.js";

class Authenticate extends Database {
  async findEmail(email) {
    const db = await this.dbconnect();
    try {
      const [response] = await db.execute(
        `SELECT email FROM accounts WHERE email = ? `,
        [email]
      );
      return response[0];
    } catch (err) {
      return {
        isSuccess: false,
        error: err.message,
      };
    } finally {
      db.end();
    }
  }
  async register(data) {
    const db = await this.dbconnect();
    try {
      const findEmail = await this.findEmail(data.email);
      if (findEmail) {
        return { isSuccess: false, message: "Email is already used" };
      }
      await db.execute(
        "INSERT INTO accounts (firstname, lastname, email, password, course) VALUES (?, ?, ?, ?, ?)",
        [data.firstname, data.lastname, data.email, data.password, data.course]
      );
      return { isSuccess: true };
    } catch (err) {
      return { isSuccess: false, error: err.message };
    } finally {
      db.end();
    }
  }

  async login(data) {
    const db = await this.dbconnect();
    try {
      const [account] = await db.execute(
        "SELECT * FROM accounts WHERE email = ? AND password = ?",
        [data.email, data.password]
      );
      if (!account.length)
        return {
          response: { isSuccess: false, message: "Invalid Email or Password" },
        };
      return {
        response: { isSuccess: true, message: "Login Succesfully" },
        userData: account[0],
      };
    } catch (err) {
      return { isSuccess: false, error: err.message };
    } finally {
      db.end();
    }
  }
}

export default Authenticate;
