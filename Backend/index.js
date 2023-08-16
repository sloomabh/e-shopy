const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
/************************************************** */
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

/************************************ */
const authRouter = require("./routes/authRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dbConnect();

// ROUTES :
app.get("/", (req, res) => {
  res.send("test api ");
});
app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
