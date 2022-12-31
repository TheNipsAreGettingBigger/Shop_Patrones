const express = require("express");
const app = express();
const { createServer } = require("http");
const dotenv = require("dotenv");

dotenv.config();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", require("./routers/auth.routes"));

const server = createServer(app);
server.listen(process.env.PORT, () => {
  console.log("listening on port http://localhost:8000");
});
