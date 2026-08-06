import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


// Middleware
if(process.env.NODE_ENV !== "production") {
  app.use(cors({
  origin: 'http://localhost:5173',
  })); // Enable CORS for all routes
}

app.use(express.json()); // This middleware is used to parse incoming JSON requests and make the data available in req.body
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


app.use( (req, res, next) => {
  console.log("Request method:", req.method, "Request URL:", req.url);
  next();
});

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/vite-project/dist")));

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "../frontend","vite-project","dist","index.html"));
});
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});

// mohammedolx88_db_user
// wsCf2I5WSzyz6Ssk
// mongodb+srv://mohammedolx88_db_user:wsCf2I5WSzyz6Ssk@cluster0.pxsdscq.mongodb.net/?appName=Cluster0