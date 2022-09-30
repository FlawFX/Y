let fetch = require('node-fetch') 
 let handler = async(m, { conn }) => { 
     try { 
         let pp = await(await fetch(image)).buffer 
         let gc1 = '34649537982-1370248067@g.us' 
         let gc2 = '628112958665-1628163967@g.us' 
         let gc3 = '628112958665-1571053173@g.us' 
         let _gc1 = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl' + await conn.groupInviteCode(gc1) 
         let _gc2 = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl' + await conn.groupInviteCode(gc2) 
         let _gc3 = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl' + await conn.groupInviteCode(gc3) 
         let caption = ` 
 *Join juga group official Dani Bot!* 
 Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
 ${_gc1} 
  
 *Group 2* 
 ${_gc2} 
  
 *Group 3* 
 ${_gc3} 
  
 `.trim() 
         await conn.reply(m.chat, caption, m, { contextInfo: { 
             externalAdReply: { 
               sourceUrl: 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl', 
               title: 'Official group', 
               body: '© 𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛', 
               thumbnail: pp 
             } 
         }}) 
     } catch (e) { 
         let tulisan = ` 
 *ZennSky-Botz!* 
Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl
 
 `.trim() 
     await conn.sendButtonDoc(m.chat, tulisan.trim(), 'Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.', 'Rules', '.rules', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://instagram.com/karfuanyogich',
            title: 'Instagram Official',
            body: '© 𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛 By FlawZX',
          thumbnail: await (await fetch('https://telegra.ph/file/f05029f17de62fb420459.jpg')).buffer()
        }
     }
    })
 } 
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 module.exports = handler
