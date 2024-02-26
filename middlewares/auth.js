const User = require('../models/User');
const jwt = require('jsonwebtoken');
exports.isAuthenticated = async(req,res,next) =>
{
  try {
    const {token} = req.cookies;
    if(!token)
    {
     return res.status(401).json({
         message:"Please login first"
     });
    }
 
 const decoded = await jwt.verify(token,process.env.JWT_SECRET);
 if (!decoded._id) {
    return res.status(401).json({
        message: "Invalid token"
    });
} 
const user =  await User.findById(decoded._id);
 if (!user) {
    return res.status(401).json({
        message: "User not found"
    });
}

req.user = user;
 
 next();
    
  } catch (error) {
    res.status(500).json({
        message: error.message,
    });
  }
};
