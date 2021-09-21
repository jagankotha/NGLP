const express = require("express");
const mongodb = require("mongodb");
const corsObj = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

const jagan= mongodb.MongoClient;

app.get("/products/:category",(req, res)=>{

    jagan.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net?retryWrites=true&w=majority",(err, connection)=>{

    if(err) throw err;
    else{
        const db = connection.db("angspa");
        db.collection(req.params.category).find().toArray((err, arrar)=>{
            if(err) throw err;
            else{
                res.send(arrar);
            }
        })
    }
    })

})

app.listen(8080,()=>{
    console.log("server litending the port number 8080");
});
