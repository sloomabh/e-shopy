const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(process.env.MONGODB_URL);

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error :", error);
  }
};
module.exports = dbConnect;
