const fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
  m.reply('Wait...')
  try {
    let res = await fetch(`https://raw.githubusercontent.com/ngontolamath/Databasee/main/anime/${command}.json`)
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
  
    await conn.sendFile(m.chat, json, 'error.jpg', 'tolol', m)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan')
  }
}
handler.help = ['kaneki','megumin','yotsuba','shinomiya','yumeko','tejina','chiho','toukachan', 'kakasih', 'akira','itori','kurumi','sagiri','eba','deidara','itachi','madara','asuna','ayuzawa','chitoge','emilia','hestia','inori','ana','miku','kaori','shizuka','doraemon','kaga','kotori','mikasa','akiyama','gremory','isuzu','shina','kagura','shinka','tsunade','sasuke','sakura','rize','nezuko','boruto','naruto','erza','minato','elaina','yuri','shota','waifu','loli','hinata']
handler.command = /^(|keneki|megumin|yotsuba|shinomiya|yumeko|tejina|chiho|toukachan|akira|kakasih|itori|kurumi|sagiri|eba|deidara|itachi|madara|asuna|ayuzawa|chitoge|emilia|hestia|inori|ana|miku|kaori|shizuka|doraemon|kaga|koturi|mikasa|akiyama|gremory|isuzu|shina|kagura|shinka|tsunade|sasuke|sakura|rize|nezuko|boruto|naruto|erza|minato|elaina|yuri|shota|waifu|loli|hinata)$/i
handler.tags = ['image']
handler.limit = false
module.exports = handler;
