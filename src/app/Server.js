var express = require("express")
var app = express()

app.use(express.static('dist'))

app.get("users", function(req, res){
    console.log("Logggginng innnnnn")
    var users = []
    for(var i = 0; i < 100; i ++)
})