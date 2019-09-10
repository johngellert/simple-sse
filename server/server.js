const express = require('express');
const pool = require("./modules/pool");

// declare an express app
const app = express();

const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.post('/api/colors', (req, res) => {
  const query = `INSERT INTO "colors" (color) VALUES ($1);`;
  const { color } = req.body;

  pool.query(query, [color]).then(() => {
    res.sendStatus(200);  
  }).catch(error => {
    console.log(`Error with POST color query:`, error);
    res.sendStatus(500);
  })
});

app.get('/api/colors', (req, res) => {
  const query = `SELECT * FROM "colors" ORDER BY "id" DESC;`;
  pool.query(query).then((results) => {
    res.send(results.rows);
  }).catch(error => {
    console.log(`Error with GET color query:`, error);
    res.sendStatus(500);
  })
})

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
