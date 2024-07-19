const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "905 131 075";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_42_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxPei9GZW9ZSE1HdVNPTVpzREFUUVd4dW1YUzdYRGs3ZkQwWWVaZ3Q2WG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImR2azFwRU1TUmJtVFpNZU1wallCVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDlkMWUzMGEtYjc0Zi00NWU4LTllZWQtZGY3NjhiNDU5MDFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDE4NixcbiAgICAgIDE0MyxcbiAgICAgIDg2LFxuICAgICAgNzEsXG4gICAgICA1NSxcbiAgICAgIDEyLFxuICAgICAgNzMsXG4gICAgICA5MSxcbiAgICAgIDkyLFxuICAgICAgMjgsXG4gICAgICAyNTUsXG4gICAgICAyMDEsXG4gICAgICAzNixcbiAgICAgIDIyLFxuICAgICAgMTM4LFxuICAgICAgODIsXG4gICAgICAxODIsXG4gICAgICAxMzEsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE5NixcbiAgICAgIDI0OSxcbiAgICAgIDE4NCxcbiAgICAgIDQ3LFxuICAgICAgMzYsXG4gICAgICAyNTUsXG4gICAgICAxNDksXG4gICAgICAyMDksXG4gICAgICAyMjgsXG4gICAgICAyNCxcbiAgICAgIDE1OSxcbiAgICAgIDE5NCxcbiAgICAgIDIzOCxcbiAgICAgIDIyMixcbiAgICAgIDIsXG4gICAgICA1MSxcbiAgICAgIDM3LFxuICAgICAgMjE4LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDhYTk0yVE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTEzMTA3NToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NDczMDI1MDgxNDIyOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvN2pvTUNFS083NjdRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2RqcVZ5MlNLam10SnU0N3RYRzhQemN0WkE5ZE1BaEhkQWxnY3RBMGdIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzWFdsd3RGQThJZWxKdmRJdWo2Zi8rVmdkbDZiS29xZmlNL09uSnM5TTJqY3NzWlF6cW9FS01OUjB4R2ZjQUpRVEJuZTNidU9WQk10NlJjSzhKcTJCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2UFF2UGpZZVJNK3YxREF1dzgyY1d6OTdjVFZwOFRRQUcvNGx2bkhlU1FlckRVOXlFVFlsZXJaRUkxLzFLY0tYeDlZL09lWHNRVGJSeFJnc3ExcldEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDUxMzEwNzU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQyNTMyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1UY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjFHL3JOa2Zpc25rQk90eU5UMU4vbmlRSUZ4eFRsUldTcVNLM3FhaDMxTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDM0MDc1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "AABOWASE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
