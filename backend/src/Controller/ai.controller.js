const aiService  = require("../services/ai.service");

module.exports.getreview = async (req , res)=> {
    const code = req.body.code; 
    if(!code){
        return res.status(404).send("write code!!!");
    }
    const response = await aiService(code);
    res.send(response);
}

