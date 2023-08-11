import express from "express";
import authenticate from "./routes/authenticate.js";
import userApiRoutes from "./routes/userApi.js";
import departmentApiRoutes from "./routes/departmentApi.js";
import accountRoutes from "./routes/account.js";
import courseRoutes from "./routes/courseRoutes.js";
import cookieParser from "cookie-parser";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import QRCode from "qrcode";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => console.log("Server is running in 3000"));

app.use("/api/authenticate", authenticate);
app.use("/api/user", userApiRoutes);
app.use("/api/department", departmentApiRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/review", reviewRoutes);
app.get("/qr", (req, res) => {
  const targetUrl = "https://efeedback.com/department/LearningResource"; // Replace this with the URL you want to redirect to
  const options = {
    type: "png", // Set the QR code image type (e.g., png, jpeg, etc.)
  };

  QRCode.toDataURL(targetUrl, options, (err, dataURL) => {
    if (err) {
      return res.status(500).send("Error generating QR code.");
    }
    res.send(`<img src="${dataURL}" alt="QR Code">`);
  });
});
