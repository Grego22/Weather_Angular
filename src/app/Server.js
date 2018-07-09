var express = require("express")
var app = express()

app.use(express.static('dist'))

app.use(function(req, res, next){
    if(req.method !== 'OPTIONS'){
        res.statusCode = 401;
        return next("Please provide your auth toke")
    }
    return next()
})

app.use(allowCrossDomain)

app.get("users", function(req, res){
    console.log("Logggginng innnnnn")
    var users = []
    for(var i = 0; i < 100; i ++)
})