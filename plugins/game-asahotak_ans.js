const similarity = require('similarity')
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.text)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        if (['.ao', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2]
            this.reply(m.chat, `*Benar!* +${this.asahotak[id][2]} XP`, m)
                     clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= 0.72) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
module.exports = handler