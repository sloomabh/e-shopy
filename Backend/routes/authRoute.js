const express = require("express");
const {
  createUser,
  loginUserCtrl,
  loginAdmin,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  /* emptyCart,*/
  //applyCoupon,

  /* getAllOrders,
  getOrders,
  getOrderByUserId,
  updateOrderStatus,*/
  removeProductFromCart,
  updateProductQuantityFromCart,
  createOrder,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { checkout, paymentVerification } = require("../models/paymentCtrl");

const router = express.Router();

router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forget-password-token", forgotPasswordToken);
router.post("/reset-password/:token", resetPassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
//router.post("/order/checkout", authMiddleware, checkout);
//router.post("/order/paymentVerification", authMiddleware, paymentVerification);
/*router.post("/cart/applycoupon", authMiddleware, applyCoupon);*/
router.post("/cart/cash-order", authMiddleware, createOrder);

router.get("/all-users", getallUser);
/*router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);*/

router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);

router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
/*router.delete("/empty-cart", authMiddleware, emptyCart);*/

router.delete("/:id", authMiddleware, deleteaUser);

router.put("/edit-user", authMiddleware, updatedUser);
router.delete(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
/*router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);*/

module.exports = router;
