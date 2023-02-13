const express= require("express")
const app= express()
const bodyparser= require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.get("/add",function(req,res){
    res.sendFile("./numbers.html",{root:__dirname})
})
app.get("/multiply",function(req,res){
    res.sendFile("./number.html",{root:__dirname})
})
app.post("/sum",function(req,res){
    let firstnumber=JSON.parse( req.body.firstnumber)
let secondnumber=JSON.parse(req.body.secondnumber) 
let thirdnumber= JSON.parse(req.body.thirdnumber)
let sum= firstnumber+secondnumber+thirdnumber
res.send(`The sum of those numbers is ${sum}`)
})
app.post("/multiplication",function(req,res){
    let firstnumber= JSON.parse(req.body.firstnumber)
    let secondnumber= JSON.parse(req.body.secondnumber)
let thirdnumber= JSON.parse(req.body.thirdnumber)
const multiplication=  firstnumber*secondnumber*thirdnumber
res.send(`The product of those numbers is ${multiplication} `)})
app.listen(5000,function(req,res){
    console.log("The server is running on port 5000");
})