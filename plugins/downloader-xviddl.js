var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'Masukkan Query Link!'
 try {
let anu = await fetch(`https://api.botcahx.eu.org/api/download/xvideosdl?url=${text}&apikey=u3PIc2hC`)
let hasil = await anu.json() 

conn.sendFile(m.chat, hasil.result.url, 'eror.mp4', 'Cabul anjg', m)
} catch (e) {
throw `*Server Error!*`
}
  }                                                    
handler.command = handler.help = ['xvideosdown','xdown'];
handler.tags = ['internet'];
module.exports = handler;
