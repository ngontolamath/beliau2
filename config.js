global.owner = ['6285974899229']  
global.mods = ['6285974899229'] 
global.prems = []
global.nameowner = 'Bedul'
global.numberowner = '6285974899229' 
global.mail = '-' 
global.gc = '-'
global.instagram = '-'
global.wm = '© Bedul'
global.wait = '_*Wait*_'
global.eror = '_*Server Error awkwok*_'
global.stiker_wait = '*Stiker sedang dibuat*'
global.packname = 'Made With'
global.author = 'Bedul Bot'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'q8ERLAkW' 
//global.btc = 'y6eHya54'
//global.btc = 'NQ4KtsFo'
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.betabotz.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'q8ERLAkW' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
