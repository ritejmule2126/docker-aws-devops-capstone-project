const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createPool({
  host: "db",
  user: "root",
  password: "pass123",
  database: "appdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// health check
app.get("/", (req, res) => {
  res.send("API is running");
});

// GET users
app.get("/user", (req, res) => {
  con.query("SELECT * FROM apptb", (err, results) => {
    if (err) {
      console.error("SELECT ERROR:", err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// POST user
app.post("/user", (req, res) => {
  console.log("POST body:", req.body);

  const name = req.body.data;
  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  con.query(
    "INSERT INTO apptb (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        console.error("INSERT ERROR:", err);
        return res.status(500).json(err);
      }
      res.json({ message: "Inserted successfully" });
    }
  );
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});


// Add this at the bottom, before app.listen
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date(),
  });
});

