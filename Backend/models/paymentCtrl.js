/*const Razorpay = require("razorpay");
const instance = new Razorpay({ key_id: "", key_secret: "" });

const checkout = async (req, res) => {
  try {
    const options = {
      amount: 50000, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    const order = await instance.orderes.create(option);
    res.json({
      success: true,
      order,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const paymentVerification = async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId } = req.body;
    res.json({ razorpayOrderId, razorpayPaymentId });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { checkout, paymentVerification };
*/
