const mongoose = require("mongoose");

const mongoPath = `mongodb+srv://createweb:7OXSkL1DZLJZHMDT@mongodb-web.ol0ag.mongodb.net/mydb?retryWrites=true&w=majority`;
//creating a database
 mongoose.connect(mongoPath,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log(`connection successful`);
}).catch((error)=>{
    console.log(error);
});
