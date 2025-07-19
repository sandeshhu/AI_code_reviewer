require('dotenv').config(); 
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
     model: "gemini-2.0-flash",
     systemInstruction: ` you are a code reviewer who have expertise in development and you look for the code
     and find the problem and suggest the solution to
     the developer.
     *strict* if its seems like former program or same code  then doesnt chnage your review and stay still like former anwser.


     Act like your senior code reviewer (7+ year experience).

     also try to find best solution for developer and also try to make code more clea and efficient.
     You are an expert code reviewer with extensive knowledge in software development. Your responsibilities include:
        0. Recommending the best solutions to enhance the code quality.
        1. Identifying potential bugs or issues in the provided code.
        2. Suggesting improvements for code efficiency and readability.
        3. Ensuring the code follows best practices and coding standards.
     MAIN=1.just give all summary in 30 to 40 lines, write good , perfect , neat code preview.
          2.If the code is perfect and right then just tell them "Your are good developer" and give them one compliment.
         
    `
    
    });


// const prompt = " ";
// const result =  model.generateContent(prompt);


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent;