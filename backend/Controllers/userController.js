import User from "../models/UserSchema.js";
import Booking from '../models/BookingSchema.js';
import Mentor from '../models/MentorSchema.js';

export const updateUser = async(req, res)=>{
    const id = req.params.id;

    try{
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});

        res.status(200).json({success:true, message:'Successfully updated', data:updateUser});
    
    } catch (err){
        res.status(500).json({success:false, message:'Failed to update'});
    }
};
export const deleteUser = async(req, res)=>{
    const id = req.params.id;
    console.log();

    try{
        await User.findByIdAndDelete(id,);

        res.status(200).json({success:true, message:'Successfully deleted'});
    
    } catch (err){
        res.status(500).json({success:false, message:'Failed to delete'});
    }
};
export const getSingleUser = async(req, res)=>{
    const id = req.params.id;

    try{
        const user = await User.findById(id).select("-password");

        res.status(200).json({success:true, message:'User found', data:user});
    
    } catch (err){
        res.status(404).json({success:false, message:'No User found'});
    }
};
export const getAllUser = async(req, res)=>{

    try{
        const users = await User.find({}).select("-password");

        res.status(200).json({success:true, message:'Users found', data:users});
    
    } catch (err){
        res.status(404).json({success:false, message:'Not found'});
    }
};

export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try {
        const user = await User.findById(userId);

        if(!user){
            return res
                .status(404)
                .json({ success: false, message: "User not found"});
        }

        const { password, ...rest } = user._doc;
        res
            .status(200)
            .json({
                success: true,
                message: "Profile info is getting",
                data: { ...rest },
            });

    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Something went wrong, cannot get"});
    }
};

export const getMyAppointments = async(req,res)=>{
    try {
        
        const bookings = await Booking.find({user:req.userId})

        const mentorIds = bookings.map(el=>el.mentor.id)

        const mentors = await Mentor.find({_id:{$in:mentorIds}}).select('-password')

        res.status(200).json({success:true, message:"Appointments are getting", data:mentors})

    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Something went wrong, cannot get"});
    }
}