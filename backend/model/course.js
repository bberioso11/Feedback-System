import Database from "./database.js";

class Course extends Database {
  async allCourses() {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(`SELECT * FROM course`);
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }
}

export default Course;
