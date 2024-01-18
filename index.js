const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use("/api", routes);
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
