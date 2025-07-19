const express = require("express");
const aiRoutes = require("./routes/ai.route");
const cors = require("cors");

const app = express();
app.get('/', (req,res)=> {
    res.send("hello");
})

app.use(cors());
app.use(express.json())
app.use("/ai", aiRoutes)

module.exports=app;