require("dotenv").config();
const express = require("express");
const cors=require('cors')
const db = require("./db");
const morgan = require("morgan");
//middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
const port = process.env.PORT || 3001;


//routers
app.use("/authentication", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));



app.use((req,res,next)=>{   
    console.log("middlerwarre");
    next();
})
//get ALL asset
app.get("/getAsset", async (req,res)=>{
    const result= await db.query("select * from addAsset");
    console.log(result.rows);
    
    res.status(200).json({
        status: "success",    
        result:result.rows.length,
        data:{
            addAsset: result.rows,
        },
        
    });
})
//get one Asset
app.get("/api/v1/addAsset/:title", async (req,res)=>{
    console.log(req.params.title)
    try{
  const result= await db.query("select * from addAsset where title=$1",[req.params.title]);
  console.log(result);
    res.status(200).json({
        status: "success",

        data:{
            addAsset: result.rows[0],
        },
        
    });
}catch(err){
    console.log(err)
}
})


//create the asset
app.post("/api/v1/addAsset", async(req,res)=>{
  console.log(req.body)
    try{
  const result= await db.query("INSERT INTO addAsset (title,catagory,quantity,price,total) values ($1,$2,$3,$4,$5) returning *",
  [req.body.title,req.body.catagory,req.body.quantity,req.body.price,req.body.total]);
  console.log(result);
    res.status(200).json({
        status: "success",

        data:{
            addAsset: result.rows[0],
        },
    })
}catch(err){
    console.log(err);
}
});

//send the request for admin...

app.post("/api/v1/request", async(req,res)=>{
    console.log(req.body)
      try{
    const result= await db.query("INSERT INTO request (name,phone_number,title,catagory,quantity) values ($1,$2,$3,$4,$5) returning *",
    [req.body.name,req.body.phone_number,req.body.title,req.body.catagory,req.body.quantity]);
    console.log(result);
      res.status(200).json({
          status: "success",
  
          data:{
              request: result.rows[0],
          },
      })
  }catch(err){
      console.log(err);
  }
  });
  









//Update the asset
app.put("/api/v1/addAsset/:title", async (req,res)=>{
//    console.log(req.params.title);
//    console.log(req.body);
 try{
   const result= await db.query("UPDATE addAsset SET catagory=$1, price=$2,total=$3 where title=$4 returning *",
   [req.body.catagory, req.body.price, req.body.total,req.params.title]);
   console.log(result);
    res.status(200).json({
        status: "success",

        data:{
            addAsset: result.rows[0],
        },
    });
}catch(err){
    console.log(err);
}

});

//Delete the Asset
app.delete("/api/v1/addAsset/:title", async (req,res)=>{
    try{
        const result= await db.query("DELETE FROM addAsset where title=$1",
        [req.params.title])
    res.status(204).json({
        status:"success",
    });
    }catch(err){
        console.log(err);
    }
});

app.listen(port,()=>{
    console.log(`server is up and listing on port ${port}`);
});