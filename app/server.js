const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log('Database connection failed:', err.message);
  } else {
    console.log('Connected to MySQL database successfully!');
  }
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>OpsMate</title>
      </head>
      <body>
        <h1>OpsMate Application</h1>
        <h2>OpsMate Version 2</h2>

        <p>Docker containerization project is running successfully.</p>
        <p>Successfully updated and deployed using Amazon ECS Fargate.</p>
        <p>Application connected with MySQL database when database configuration is available.</p>
      </body>
    </html>
  `);
});

app.get('/db', (req, res) => {
  db.query('SELECT 1 AS status', (err, results) => {
    if (err) {
      return res.status(500).json({
        message: 'Database connection failed',
        error: err.message
      });
    }

    res.json({
      message: 'Database connection successful',
      result: results
    });
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`OpsMate Version 2 running on port ${PORT}`);
});
