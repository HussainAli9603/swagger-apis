var PORT = process.env.port || 3000;
let express = require('express');
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = require('express')();
    const User = require('./models/user');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/firstDatabase', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection Error"));
db.once('open',function(){
    console.log("database connected!!");
});

app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json({
    limit : '50mb'    ///////// LIMIT for JSON
  }));

app.use(bodyParser.urlencoded({
    limit : '50mb', ///////// LIMIT for URL ENCODE (image data)
    extended : true
  }));

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads



app.get('/',function(req,res){
    res.send("First Express Page")
});
app.post('/api/add/user',(req,res)=>{
   var user = new User();
   user.name = req.body.name;
   user.email = req.body.email;
   user.save((err,user)=>{
       if(err) return err;
       res.json({"success":true,"message":"user add",user});
   })
});


app.listen(PORT,()=>{
    console.log(`The server is running on PORT: ${PORT}`)
})