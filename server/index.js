const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const connectDB=require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
