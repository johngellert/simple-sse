const express = require("express");
const app = express(); // declare an express app
const PORT = process.env.PORT || 5000;
var cors = require("cors"); // allow cross-origin resource sharing
const pool = require("./modules/pool");

const bodyParser = require("body-parser");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let resultsColors = [];
app.get("/color-events", cors(), (req, res) => {
  // SSE Setup
  let messageId = 0;
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache"
  });

  setInterval(() => {
    res.write(`id:${messageId}\n`);
    res.write("event:colorUpdates\n");
    res.write(`data:${JSON.stringify(resultsColors)}\n`);
    res.write("\n\n");
    messageId += 1;
  }, 1000);

});

const getColors = () => {
  const query = `SELECT * FROM "colors" ORDER BY "id" DESC LIMIT 10;`;
  console.log("getting colors");
  pool
    .query(query)
    .then(results => {
      resultsColors = [...results.rows];
      console.log(resultsColors);
    })
    .catch(error => {
      console.log(`Error with GET color query:`, error);
    });
};

/* Routes */
app.post("/api/colors", (req, res) => {
  const query = `INSERT INTO "colors" (color) VALUES ($1);`;
  const { color } = req.body;
  pool
    .query(query, [color])
    .then(() => {
      res.sendStatus(201);
      getColors();
    })
    .catch(error => {
      console.log(`Error with POST color query:`, error);
      res.sendStatus(500);
    });
});

// Serve static files
app.use(express.static("build"));

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
