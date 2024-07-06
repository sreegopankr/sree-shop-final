const User = require("../models/User");
const cryptoJS = require("crypto-js")
const router = require("express").Router();
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Invalid Credentials")

        const hashedPassword = cryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        if(req.body.password !== hashedPassword.toString(cryptoJS.enc.Utf8)){
            res.status(401).json("Invalid Credentials")
        }else{
            const {password,...others} = user._doc;

            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "3d"
                }
            )

            res.status(200).json({...others,accessToken})
        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router