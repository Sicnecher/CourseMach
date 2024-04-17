import mongoose from "mongoose"
export async function connect(): Promise<void> {
    try{
        const uri = process.env.DATABASE_URI
        await mongoose.connect(uri)
    }catch(error){
        console.error(error)
    }
}