
const jwt = require("jsonwebtoken")

exports.verifyToken = (req,res,next) =>{
    const token = req.headers['authorization'];
    if(!token){
      return res.json({status: 403, error:'token not provided.'})
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,data)=>{
      if (err){
       return res.json({status:401, message:"token verification failed"})
      }
      req.user = data;
      next();
    })
  }