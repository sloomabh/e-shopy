const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    //console.log(token);

    try {
      //  read  token
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      //TODO
      /* 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }
  */
      //find user by id from the payload of the token
      const user = await User.findById(decoded?.id);
      req.user = user;
      next();
    } catch (error) {
      throw new Error("NOT AUTHORIZED token expired . Please login again ");
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are Not an admin  ");
  } else {
    next();
  }
});

module.exports = {
  authMiddleware,
  isAdmin,
};
