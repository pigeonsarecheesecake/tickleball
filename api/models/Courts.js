import mongoose from "mongoose"

const courtSchema = new mongoose.Schema({
  court: Number,
  selected: Boolean
})

const CourtModel = mongoose.model("Court", courtSchema)
export default CourtModel