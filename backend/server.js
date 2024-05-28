const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Pusher = require('pusher')
const whatsApp = require('./models/chat')
const cors = require('cors')



//pusher is used to check the changes in data instantly
const pusher = new Pusher({
    appId: '1083625',
    key: 'b872e7e015b514bfa26e',
    secret: '3912bc89666b83340d3b',
    cluster: 'ap2',
    useTLS: true
  });


//midddleWare
app.use(express.json())
app.use(cors())


//mongoose connection:
const url = "mongodb+srv://sunilraj:123sunilraj@cluster0.d8ajv.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const db = mongoose.connection;
db.once("open",()=>{
    console.log("Connected")
    const msgCollection = db.collection("whatsapps")
    const changeStream = msgCollection.watch();
    changeStream.on("change",(change)=>{
        console.log(change)
    if(change.operationType === "insert"){
        const messages = change.fullDocument;
        pusher.trigger("message","inserted",{
            name:messages.name,
            message:messages.message,
            timestamp:messages.timestamp,
            receive:messages.receive    
        })
    }        
    })    
})


app.get("/get", async(req,res)=>{
    
    const result = await whatsApp.find({})
    if(result){
        res.send(result)
    }
})



app.post('/message', async(req,res)=>{
    const{
        name,
        message,
        receive,
        timestamp
    } = req.body;

    const chats =  new whatsApp({
        name,message,receive,timestamp
    })

    const data = await chats.save()
    
    res.send(data)

})

const port = 5000;

app.listen(port,()=>{
    console.log("connected to 5000")
})