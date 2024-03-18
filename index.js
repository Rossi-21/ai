const OpenAI = require('openai');

require('dotenv').config();

const apiKey = process.env.API_KEY

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: apiKey
})

const messages = [
    {
        role: 'system',
        content:  'You are a brilliant scientist. You can explain even the most complex topics to anyone regardless of their intelligence. Your response is always short and to the point. Responses should never be more than one paragraph'
    },
    {
        role: 'user',
        content: 'explain Quantum Computing to me?'
    }
];


(async () => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4-1106-preview',
            messages: messages
        });
        const generatedText = response.choices[0].message.content;
        console.log(generatedText);
    } catch (error) {
        console.error('Error:', error);
    }
})();

