import express from "express";
import routes from "./routes/api/router.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
