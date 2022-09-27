const {db}=require('./config/dbconfig');
const cors=require('cors');
const express=require('express');
const app=express();
const serverconfig=require('./config/serverconfig')


app.use(express());
app.use(cors());

app.listen(serverconfig.PORT,()=>{
    console.log(`Server is running on http://${serverconfig.HOST}:${serverconfig.PORT}`);
})


