
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
//app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: "https://janavaasyojnaharyana.com" }));

// app.use(cors({
//     origin: 'http://localhost:3001', // or your frontend URL when deployed
//     credentials: true
//   }));



app.use(express.json());

app.use("/api/shop", require("./routes/shopRoutes"));

const PORT = 5000 //process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app; //  Vercel ke liye export kar diya
