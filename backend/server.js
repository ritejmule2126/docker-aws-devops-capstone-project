const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL config
const db = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "pass123",
  database: process.env.DB_NAME || "appdb"
});

// Connect DB
db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Create table if not exists
db.query(`
  CREATE TABLE IF NOT EXISTS apptb (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
  )
`);

// POST user
app.post("/user", (req, res) => {
  const { data } = req.body;
  db.query(
    "INSERT INTO apptb (name) VALUES (?)",
    [data],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Insert failed");
      }
      res.json({ success: true, result });
    }
  );
});

// GET users
app.get("/user", (req, res) => {
  db.query("SELECT * FROM apptb", (err, result) => {
    if (err) {
      return res.status(500).send("Fetch failed");
    }
    res.json(result);
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date()
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});

