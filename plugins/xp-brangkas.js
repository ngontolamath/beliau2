let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let { name, limit, exp, lastclaim, registered, regTime, role, age } = global.DATABASE.data.users[who]
    let username = conn.getName(who)
    let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
    let str = `
◪ *「 DOMPET 」*
  ├─ ❏ *Name* : _${username}_
  ├─ ❏ *Nomor* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
  ├─ ❏ *Limit* : ${limit}
  ├─ ❏ *Exp* : ${exp}
  ├─ ❏ *Premium* : ${prem ? 'Ya': 'Tidak'}
  └─ ❏ *Rank* : ${role}
  

`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['peti', 'dompet']
handler.tags = ['xp']
handler.command = /^(peti|dompet)$/i
module.exports = handler