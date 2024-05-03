const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Registeruser = require('./model');
const middleware = require('./middleware');
const jwt = require('jsonwebtoken');
const app = express();





const ConnectDb = async()=>{
    try {
    const connectionInstance = await mongoose.connect("mongodb+srv://ayyappa:7396@cluster0.jckroc2.mongodb.net/?retryWrites=true&w=majority");
    console.log("connection sucessful :", connectionInstance.connection.host);
  } catch (error) {
    console.log("Mongodb connection error", error);
  }
}
ConnectDb();

app.use(express.json());
app.use(cors({origin:"*"}))



app.post('/completions',async(req,res)=>{
    const options = {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role: "user",content: req.body.message}],
            max_tokens:1,
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions',options)
        const data = await response.json()
        res.send(data)
    }catch(error){
        console.error(error)
    }
})





app.post('/register',async(req,res)=>{
    try{
        const {username,email,password,confirmpassword}=req.body;
        let exist = await Registeruser.findOne({email});
        if(exist){
            return res.status(400).send('User Already Exist');
        }
        if(password!==confirmpassword){
            return res.status(400).send('Password are not Matching');
        }
        let newuser = new Registeruser({
            username,
            email,
            password,
            confirmpassword
        })
        await newuser.save();
        res.status(200).send('Registered Successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Internel Server Error')
    }
})

app.post('/login',async(req,res)=>{ 
    try{
        const {email,password}=req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist){
            return res.status(400).send('User Not Found');
        }
        if(exist.password != password){
            return res.status(400).send('Invalid Credentials');
        }
        let payload = {
            user:{
                id : exist.id
            }
        }

        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token)=>{
                if(err) throw err;
                return res.json({token})
            }
            )
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error');

    }
})

app.get('/myprofile',middleware,async(req,res)=>{
   try{
    let exist = await Registeruser.findById(req.user.id);
    if(!exist){
        return res.status(400).send('User Not Found');
    }
    res.json(exist);
   }
   catch(err){
    console.log(err);
    return res.status(500).send('Server Error');
   } 
})


app.listen(5000,()=>{
    console.log('Server running...');
})