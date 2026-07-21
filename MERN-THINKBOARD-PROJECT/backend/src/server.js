import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(express.json()); // This middleware is used to parse incoming JSON requests and make the data available in req.body
app.use(rateLimiter); // Apply the rate limiter middleware to all routes

app.use( (req, res, next) => {
  console.log("Request method:", req.method, "Request URL:", req.url);
  next();
})

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});

// mohammedolx88_db_user
// wsCf2I5WSzyz6Ssk
// mongodb+srv://mohammedolx88_db_user:wsCf2I5WSzyz6Ssk@cluster0.pxsdscq.mongodb.net/?appName=Cluster0