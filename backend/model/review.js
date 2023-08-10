import Database from "./database.js";

class Review extends Database {
  async getAllReviewDepartment(department) {
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
        const roundedRatings = Math.round(review.ratings);
        return { ...review, date: formatedDate, ratings: roundedRatings };
      });
      return newData;
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }

  async getReview(id) {
    const db = await this.dbconnect();
    try {
      const [data] = await db.execute(
        "SELECT * FROM `feedback-answers` WHERE id = ?",
        [id]
      );
      const date = new Date(data[0].date);
      const formatedDate = date.toLocaleString("us-en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const roundedRatings = Math.round(data[0].ratings);
      return { ...data[0], date: formatedDate, ratings: roundedRatings };
    } catch (err) {
      console.log(err);
    } finally {
      db.end();
    }
  }
}

export default Review;
