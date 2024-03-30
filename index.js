const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require("./server")

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - Hogaya re tera jake dekh le`
  )
  bitly_axel = "https://bit.ly/3oQZWb0"

  const r = new Discord.RichPresence()
    .setApplicationId('1189175733222907956')
    .setType('PLAYING') 
    .setURL('https://discord.gg/zsBb2X7SNJ')
    .setState('Paying Out')

    .setName('Selling Mcfa')
    .setDetails('Join for nitro')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1188453803813511201/1190193413962870856/-nitro.gif?ex=65a0e8fe&is=658e73fe&hm=5407e57cf4dae119336a7ce61b7cc759dff9095240e3ed9010eac4c1657740d8&=')
    .setAssetsLargeText('Join us')
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1188453803813511201/1190193413962870856/-nitro.gif?ex=65a0e8fe&is=658e73fe&hm=5407e57cf4dae119336a7ce61b7cc759dff9095240e3ed9010eac4c1657740d8&=')
    .setAssetsSmallText('OWNER')
        .addButton('SURPRISE', "https://discord.gg/zsBb2X7SNJ")
    .addButton('DISCORD',"https://discord.gg/zsBb2X7SNJ")

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})
require('dotenv').config();
keepAlive();
client.login(process.env.token) //Your account token

// man put ur token in secrets