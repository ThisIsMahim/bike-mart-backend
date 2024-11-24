import { Bike } from "./bike.interface";
import bikeModel from "./bike.model";

const createBikeInDB= async(bike:Bike)=>{
    return await bikeModel.create(bike)
}

const getAllBikeData= async()=>{
    try {
        const result= await bikeModel.find()
        return result
    } catch (error) {
        console.log(error);
    }
}
// using the randomly generated _id to find product
const getSingleBikeData= async(id:string)=>{
    try {
        const result= await bikeModel.findOne({_id:id})
        return result
    } catch (error) {
        console.log(error);
    }
}

const updateBikeData= async(id:string,data:object)=>{
try {
    const result =await bikeModel.findByIdAndUpdate({_id:id},data,{
        new: true, 
        runValidators: true,
      })
    return result
} catch (error) {
    console.log(error);
}
}

const deleteBikeData= async(id:string)=>{
    const result= await bikeModel.findByIdAndDelete({_id:id})
    return result
}

export const bikeServices={
    getAllBikeData,
    createBikeInDB,
    getSingleBikeData,
    updateBikeData,
    deleteBikeData
}