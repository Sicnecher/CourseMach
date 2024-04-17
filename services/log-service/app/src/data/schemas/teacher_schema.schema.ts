import * as mongoose from "mongoose"

export const TeacherSchema = new mongoose.Schema({
  field: { type: String, required: true },
  skills: { type: String, required: true },
  resume: { type: File, required: true },
  payment_method: { type: String, required: true },
  maximum_pay: Number,
  minimum_pay: Number,
  country: { type: String, required: true },
  bank: { type: String || Number, required: true },
  branch: { type: Number, required: true },
  account: { type: Number, required: true },
  nationalId: { type: String, required: true },
  userId: { type: String, required: true }
})

 export const TEACHER = mongoose.model('teacher', TeacherSchema);