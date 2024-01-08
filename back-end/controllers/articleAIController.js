const OpenAI = require('openai').OpenAI;

const openai = new OpenAI({
    apiKey: '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'
});

exports.getArticle = async (req, res) => {
    try {
        const data = req.body;
        const chatCompletion = await openai.chat.completions.create({
            messages: [{
                role: 'user',
                content: `You just write an article about the ${data.category} with the idea of ${data.ideas} in 100 words with the text format the same this {article: {"title": "...", "introduction": "..."}}`
            }],
            model: 'gpt-3.5-turbo',
        });
        res.status(201).json({
            status: 'success',
            data: {
                article: JSON.parse(chatCompletion.choices[0].message.content).article
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}