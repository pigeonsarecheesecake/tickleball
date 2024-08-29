import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import 'dotenv/config'
import TicklerModel from './models/Ticklers.js'
import CourtModel from './models/Courts.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

connectDB()
async function connectDB(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to db')
  } catch (error) {
    console.log(error.message)
  }
}


app.get('/', async (req, res) => {
  try {
    const ticklers = await TicklerModel.find({})
    const count = await TicklerModel.countDocuments({status: true})
    res.json({ticklers, count})
  } catch (error) {
    log(error.message)
  }
})


app.get('/courts', async (req, res) => {
  try {
    const courts = await CourtModel.find({})
    res.json(courts)
  } catch (error) {
    log(error.message)
  }
})

app.put('/courts', async (req, res) => {
  const {_id, selected} = req.body
  try {
    const data = await CourtModel.findOneAndUpdate({_id: _id},{selected: selected})
    res.json(data)
  } catch (error) {
    console.log(error.message)
  }
})

app.put('/', async (req, res) => {
  const {_id, status} = req.body
  try {
    const data = await TicklerModel.findOneAndUpdate({_id: _id},{status: status})
    res.json(data)
  } catch (error) {
    console.log(error.message)
  }
})


app.listen(port, ()=>{console.log('running')})