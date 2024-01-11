const fetch = require('node-fetch');

const handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    await m.reply('Thinking....');
    const text = encodeURIComponent(text);

    const apiEndpoint = `https://ultimetron.guruapi.tech/gpt3?prompt=${text}`;

    try {
      let response = await fetch(apiEndpoint);
      let data = await response.json();
      let result = data.completion;

      if (!result) {
        throw new Error('No valid JSON response from the API');
      }

      await m.reply(result);
    } catch (error) {
      console.error('Error from the API:', error);
      throw "An error occurred while processing the request.";
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
}

handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
