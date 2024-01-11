var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'Masukkan Query Link!'
 try {
let anu = await fetch(`https://api.botcahx.eu.org/api/download/xnxxdl?url=${text}&apikey=${lann}`)
let hasil = await anu.json() 

conn.sendFile(m.chat, hasil.result.url, 'error.mp4', 'Cabul lu', m)
 } catch (e) {
 throw `*Server error!*`
 }
}
handler.command = handler.help = ['xnxxdown'];
handler.tags = ['internet'];
module.exports = handler;
