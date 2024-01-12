const express = require("express");
const app = express();
const routes = require("./routes/api/router.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
