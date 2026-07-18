import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// mohammedolx88_db_user
// wsCf2I5WSzyz6Ssk
// mongodb+srv://mohammedolx88_db_user:wsCf2I5WSzyz6Ssk@cluster0.pxsdscq.mongodb.net/?appName=Cluster0