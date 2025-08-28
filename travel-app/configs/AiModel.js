const { GoogleGenerativeAI } = require("@google/generative-ai");

const apikey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apikey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
  // safetySettings: Adjust safety setting
  // See https://ai.google.dev/gemini-api/
  history: []
};

 
  export const chatSession = model.startChat({
    generationConfig,
    history: []
    // safetySettings can be added here if needed
  });

  //const result = await chatSession.sendMessage("Hello");
  //console.log(result.response.text());


