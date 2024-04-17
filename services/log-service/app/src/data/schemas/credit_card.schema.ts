import * as mongoose from "mongoose"

export const CreditSchema = new mongoose.Schema({
  card_number: { type: String, required: true },
  expire_date: { type: String, required: true },
  ccv: { type: String, required: true },
  full_name: { type: String, required: true },
  userId: {type: String, required: true },
  nationalId: { type: String, required: true }
})

 export const CREDIT = mongoose.model('credit-card', CreditSchema);