const express=require('express')
const app=express()
var cors = require('cors')
const port=8080;
app.use(cors())
app.use(express.json())
const users=[
  {id:1,name:"Julfiker",phone:"017419999",email:"julfiker755.bd@gmail.com"},
  {id:2,name:"shuvo",phone:"017419999",email:"julfiker755.bd@gmail.com"},
  {id:3,name:"Apon",phone:"017419999",email:"julfiker755.bd@gmail.com"},
  {id:4,name:"Tapon",phone:"017419999",email:"julfiker755.bd@gmail.com"},
  {id:5,name:"Selim",phone:"017419999",email:"julfiker755.bd@gmail.com"},
  {id:6,name:"Rasel",phone:"017419999",email:"julfiker755.bd@gmail.com"},
]
app.get("/",(req,res)=>{
  res.send("Hello JSON Data")
})
app.get("/users",(req,res)=>{
  res.send(users)
})
app.get("/users/:id",(req,res)=>{
  const id=req.params.id
  const user=users.find(u=>u.id == id)
  res.send(user)
})
app.post("/users",(req,res)=>{
  const user=req.body
  user.id=users.length+1
  users.push(user)
  res.send(user)
})
app.listen(port,()=>{
console.log('server run sccessfull')
})