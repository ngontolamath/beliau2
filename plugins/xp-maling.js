//SEKRIP BY BEDUL BOT TAMPAN
let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Gunakan format .maling jumlah @target'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'lu mau maling berapa\n.maling jumlah @target'
  let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[who].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'maling jumlah @target', m)
  let exp = count
  let users = global.db.data.users
  if (count > users[who].exp) throw 'Target mu miskin gapunya xp segitu'
  if (!count) throw 'Format salah .maling jumlah @target'
  users[who].exp -= exp
  users[m.sender].exp += count

  m.reply(`Berhasil maling xp yg di dapat *${count}*`)
}
handler.help = ['maling (jumlah) @target']
handler.tags = ['premium']
handler.command = /^maling$/i
handler.premium = true

module.exports = handler

