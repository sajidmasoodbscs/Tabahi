require('dotenv').config();
const mongoose=require('mongoose');

const connectionstr=process.env.DATABASE;
const options={
    useUnifiedTopology:process.env.useUnifiedTopology,
    useNewUrlParser:process.env.useNewUrlParser
}
let db;
mongoose.connect(connectionstr,options).then((dbobj)=>{
    console.log("Database has been connected successfully");
    db=mongoose.connection;

}).catch((err)=>{
    console.log("Error in databse connection : ", err);
});

module.exports={
    'db':db
}

