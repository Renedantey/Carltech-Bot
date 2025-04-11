








const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |SPARK-X-2025;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09qK1IzdDlCTDduSlNoVUpteHBSZEhuK050K29kOUtRcDd3OHp1MjNIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDdGNVVURFhYbGR3NTlGamNYMXNiUzhnWTJUeWtUVVAwS1VQMXlJYkFBRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTi9jdHJBb09GYys3NzhEMnY2Y0dFWWhaSjVmK0pHSTBSUFRmRVM0ZUhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMVdvejU3NlVmWXlRWWpQN0tGNDczNGI1c2VqZDM3c3NxeEJlM204RWpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIYUlDaGJWQ2FsUzdvSFhrQkk1SitsUEd0emlMd3dwK004dEs5a1FQM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVmVWJTRWRIQXJiS2dmNjQweDQ3WnR1U2JpOWp6VXoybUJVZURtWnNRajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVPTXl0aG9vZDNXSlRDTlVQNWtXdTVLNTBOa3F0czFpc2xWc01zRngxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmhGM0lXeUJjMStRMzZ5OWo1VGV1NFR1MDRRdWFZQUlKWFExUmR0N0FoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl5ZG5oc2ZNOHdtN2JaOW5MUDBubitXd1lwbjNmTi9INXlxemM2YXE1ZHJTWjVybUZLMDlMK0pnMkhtd2piczJ1WTZvQU1GNFJ3LzEwczUvVFFtK2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6InM4NlVoaUxNbFljNzZHNllIaEcxYjc0VEkrdlFBWk1yVlhaMUp0Q29pTDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJlcFdjVUs4UmhTZkN4cS1memxVWFEiLCJwaG9uZUlkIjoiOTU1ZGMwOGMtYmViYi00YjBhLWI3MjAtY2UzYmMyZTBjZDU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9vQWlHWHloeUxHZUFFZDV4M2M1THZocVo1cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4anBnY1RMekxhNUZQczYzUmc2RXJ3cHZ6blU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRDMyODE1QkciLCJtZSI6eyJpZCI6IjIzMzIwNDE1MDgwNjo0OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIhP8K/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbVAxOVFLRU1YOTRyOEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzUUZheGE4a09KeW9jdW5YNHo1MzU0aW02K2JCdGR3UmhUZ0JpN1dybm5jPSIsImFjY291bnRTaWduYXR1cmUiOiIzTjdlZ1ZYTkZwVW1nVHRkRGt3ZklpZDl0RXhDVzJKTW00KzZUWEQxQlJNZ1RhK2xJckdNS3RlVnpuOVkzZ0tiUDBoSTdTN1ZYUjRRUVE1amwrZ3hpQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRm0xN3JuUWZmcC9YVUljVEIyVVRjSWlpNzdHdmtRaENuNzhSd0dtN0xuZTc1b1pwRW1CNzd3VnMxZUd6UTZxNnpZdUN2UXhVNnp2V0VSZGRWeW1DaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyMDQxNTA4MDY6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDBCV3NXdkpEaWNxSExwMStNK2QrZUlwdXZtd2JYY0VZVTRBWXUxcTU1MyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0MzU1MDI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNodSJ9| '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Carl William",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Carl William",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'SPARK-X-2025',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    CHATBO : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    ANTI_CALL : process.env.ANTI_CALL || 'yes',
                  MENUTYPE : process.env.MENUTYPE || '',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_SAVE_CONTACTS_NAME: "SPARK-X", // Default name prefix for new contacts
                  AUTO_REPLY_MESSAGE: "", 
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
