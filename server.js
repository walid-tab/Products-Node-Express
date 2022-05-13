const express =require('express');
const productRouter = require('./Routes/productRouter');
const app=express();
const port = process.env.PORT || 5000;
app.use(express.json())


app.use("/api",productRouter);


app.listen(port,()=>{
    console.log(`the server is up and running on http://localhost:${port}`)
    
})





