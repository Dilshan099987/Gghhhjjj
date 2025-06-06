const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["awaisxd","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
╭━〔 ✨ *DILSHAN-MD* ✨ 〕━⊷  
👋 *Hello, ${pushname}! Welcome*  
🔹━━━━━━━━━━━━━━━━━━━🔹  
  
╭─〔 💠 *ABOUT ME* 💠 〕─╮  
┃ 💬 *Bot Name:* Dilshan MD  
┃ 👨‍💻 *Creator:* Dilshan Ashinsa  
┃ 🪪 *Real Name:* Dilshan Ashinsa  
┃ 📛 *Public Name:* Dilshan MD  
┃ 🎂 *Age:* 18 Years  
┃ 🏡 *City:* Hambanthota  
┃ 🧑‍💻 *Role:* Simple WhatsApp Developer  
╰────────────────────╯  
  
🔗 *Powered by:* ᴅɪʟꜱʜᴀɴ ᴍᴅ 🌟  
╰━━━━━━━━━━━━━━━━━━━⊷
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/zqu8s7.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: 'https://whatsapp.com/channel/0029Vb691MgG8l5GHg8HgI3b',
      newsletterName: 'DILSHAN-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
