import Database from "./database.js";

class Feedback extends Database {
  async questionsList() {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute("SELECT * FROM `feedback-question`");
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }

  async choicesList() {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute("SELECT * FROM `feedback-choices`");
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }

  async submitFeedback(form) {
    const db = await this.dbconnect();
    try {
      await db.execute(
        "INSERT INTO `feedback-answers` (name, userid ,department, question1, question2, question3, question4, question5, suggestion, comment, ratings) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          form.name,
          form.userid,
          form.department,
          form.question1,
          form.question2,
          form.question3,
          form.question4,
          form.question5,
          form.suggestion,
          form.comment,
          form.ratings,
        ]
      );
      return {
        isSuccess: true,
      };
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }

  async deleteFeedback(id) {
    const db = await this.dbconnect();
    try {
      await db.execute("DELETE FROM `feedback-answers` WHERE id = ? ", [id]);
      return { isSuccess: true };
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }
}

export default Feedback;
