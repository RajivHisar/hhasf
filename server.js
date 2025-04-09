
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api/shop", require("./routes/shopRoutes"));

// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app; //  Vercel ke liye export kar diya
