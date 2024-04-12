import express from "express";
import mongoose from "mongoose";
import filmRoutes from "./routes/filmRoutes";
const app = express();
const PORT = 3000;
app.use(express.json());
mongoose
  .connect("your-mongodb-connection-string", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });
app.use("/api/films", filmRoutes); 
 app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });
