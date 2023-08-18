const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000; //if we forget to assign a port it will work with 4000 port
/************************************************** */
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

/*********** IMPORT ROUTERS************************* */
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");

app.use(morgan("dev")); // toget information in console log for each req : GET /api/product 200 203.942 ms - 592
app.use(bodyParser.json()); // we can send json object to client
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); //we can send cookies to client
/******************************************************** */

dbConnect();

// ROUTES :
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

/********** MIDDELWARE  FOR GLOBAL ERRORS  ******* */
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
