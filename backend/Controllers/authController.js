 import User from '../models/UserSchema.js'
 import Mentor from '../models/MentorSchema.js'
 import jwt from 'jsonwebtoken'
 import bcrypt from 'bcryptjs'

const generateToken = user=>{
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn:'15d'
    })
 }

 
 export const register = async(req,res)=>{
    
    const {email, password, name, role, photo, gender} = req.body
    
    try {
        let user = null

        if(role==='mentee'){
          user = await User.findOne({email})
        }
        else if(role==='mentor'){
            user = await Mentor.findOne({email})
        }

        //check user already exist
        if(user){
            return res.status(400).json({message:'User already exist'})
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if(role==='mentee'){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        if(role==='mentor'){
            user = new Mentor({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()

        res.status(200).json({success:true, message:'User successfully created'})

    } catch (err) {
        res.status(500).json({success:false, message:'Internal server error, Try again'})
    }
};


export const login = async(req,res)=>{
    
    const {email} = req.body

    try {

        let user = null

        const mentee = await User.findOne({email})
        const mentor = await Mentor.findOne({email})

        if(mentee){
            user = mentee
        }
        if(mentor){
            user = mentor
        }

        // check if user exist or not
        if(!user){
            return res.status(404).json({ message: "User not found"});
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

    if(!isPasswordMatch){
        return res.status(400).json({ status:false, message: "Invalid Credentials"});
    }

    //get token
    const token = generateToken(user);

    const {password, role, appointments, ...rest} = user._doc

   res.status(200).json({ status:true, message: "Successfully login", token, data:{...rest}, role});
   //res.status(200).json({ status:true, message: "Successfully login",  data:{...rest}, role});

    } catch (err) {
        res.status(500).json({ status:false, message: "Failed to login"});
    }
};

