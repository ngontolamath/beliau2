const { tiktokdl } = require('tiktokdl');

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\nContoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`;
  }
  try {
    if (!args[0].match(/tiktok/gi)) {
      throw `Berikan URL dari TikTok!`;
    }
    conn.reply(m.chat, wait, m);
    const response = await tiktokdl(args[0]);
    const { video } = response;
    await conn.sendFile(m.chat, video, 'tiktok.mp4', '*TikTok Downloader*');
  } catch (e) {
    throw `Error: ${eror}`;
  }
};

handler.help = ['tiktok', 'tt', 'tiktokdl'];
handler.command = /^(tiktok|tt|tiktokdl)$/i
handler.tags = ['downloader'];
handler.limit = true;

handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

module.exports = handler;