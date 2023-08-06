import Database from "./database.js";

class Review extends Database {
  async getReview(department) {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(
        "SELECT * FROM `feedback-answers` WHERE department = ?",
        [department]
      );
      const newData = data.map((review) => {
        const date = new Date(review.date);
        const formatedDate = date.toLocaleString("us-en", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return { ...review, date: formatedDate };
      });
      return newData;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }
}

export default Review;
