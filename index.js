const express = require("express");
const app = express();
const connectDB = require("./configs/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(cors());
app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
