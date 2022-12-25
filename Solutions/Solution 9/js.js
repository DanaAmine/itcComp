//nodejs
let mysql = require("mysql");
let connection = mysql.createConnection({
    host:"itcwebsite",
    user:"Amine",
    password:"",
    database:"itc"
})
connection.connect(()=>{
    if(error){
        console.log("there is an error"+ error)
    }else{
        console.log("connected to database")
    }
})