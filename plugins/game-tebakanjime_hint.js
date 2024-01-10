let handler = async (m, { conn }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    m.reply('```' + json.result.name.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '_') + '```\nBALAS SOALNYA, BUKAN PESAN INI!')
}
handler.command = /^wa$/i

handler.limit = true

module.exports = handler
