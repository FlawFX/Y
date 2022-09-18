let handler = async (m, { conn, command }) => {
m.reply(`Wait ${command} sedang proses🐦`)
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true)
}
ptt: false, seconds: 9999999,contextInfo: { 
         externalAdReply: { 
 	     sourceUrl: 'https://youtu.be/RlhkqeUDZrA',
           title: '▶︎ ━━━━━━━●────────── ',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/69c49fed075cc6a395a1a.jpg')).buffer()
}

handler.help = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['sound']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.owner = false
module.exports = handler
