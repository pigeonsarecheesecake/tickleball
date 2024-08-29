import mongoose from "mongoose"

const ticklerSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
})

const TicklerModel = mongoose.model("Tickler", ticklerSchema)
export default TicklerModel