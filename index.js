import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;

app.get("/health", (req, res) => {
  res.send("All Good ;)");
});

app.get("/", (req, res) => {
  res.send("Welcome to Homepage :)");
});

app.listen(PORT, () => {
  console.log(`The server is Running on Port ${PORT} 🚀`);
});
