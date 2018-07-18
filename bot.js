const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.RichEmbed();
client.on("ready", () => {
  console.log("I am ready!");
});

// Set the prefix
let prefix = "cs-";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "berserk")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Knight [RK] / Ranger [RG] / Wizard [WZ]",
        icon_url: "https://i.imgur.com/tX9I5d4.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/vHTRRPA.png"
      },
          fields: [{
          name: "Berserk I (H2)",
          value: "Increase critical chance \n."
        },
        {
          name: "Berserk II (H10)",
          value: "F 3 Hits: \n(Att-Def) x 50% x 150% + (Att-Def) x 29% \nN 6 Hits: \n(Att-Def) x 50% x 150%"
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "h36")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Knight [RK]",
        icon_url: "https://i.imgur.com/tX9I5d4.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/omhjHOU.png"
      },
          fields: [{
          name: "Pierce I (H36)",
          value: "Deal 3x Incremental Damage \n."
        },
        {
          name: "Pierce II (H49)",
          value: "1st Hit: ATT x 160% - Def/2 \n2nd Hit: 1st Hit x 125% \n3rd Hit: 2nd Hit x 120%\nChance to silence enemy after 1st Hit."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "h36")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Ranger [RG]",
        icon_url: "https://i.imgur.com/DHM0ciA.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/UPsLIDu.png"
      },
          fields: [{
          name: "Ghost I (H36)",
          value: "Deal 3x Incremental Damage \n."
        },
        {
          name: "Ghost II (H49)",
          value: "1st Hit: ATT x 160% - Def/2 \n2nd Hit: 1st Hit x 125% \n3rd Hit: 2nd Hit x 120%\nChance to silence enemy after 1st Hit."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "h36")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Wizard [WZ]",
        icon_url: "https://i.imgur.com/XNstrLI.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/BmmCTeL.png"
      },
          fields: [{
          name: "Firewall I (H36)",
          value: "Deal 3x Incremental Damage \n."
        },
        {
          name: "Firewall II (H49)",
          value: "1st Hit: ATT x 160% - Def/2 \n2nd Hit: 1st Hit x 125% \n3rd Hit: 2nd Hit x 120%\nChance to silence enemy after 1st Hit."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "counter")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Knight [RK] / Ranger [RG] / Wizard [WZ] / Assassin [AS]",
        icon_url: "https://i.imgur.com/tX9I5d4.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/oTiO3ww.png"
      },
          fields: [{
          name: "Counter Attack / [AS] Counter I (H8)",
          value: "Return ATT x 47% damage to enemy. \n."
        },
        {
          name: "Counter Attack / [AS] Counter II (H22)",
          value: "Return ATT x 52% damage to enemy. Have chance to stun the enemy."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "froze")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Knight [RK]",
        icon_url: "https://i.imgur.com/tX9I5d4.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/qt0gqme.png"
      },
          fields: [{
          name: "Froze Bolt I (H4)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to freeze enemy, \n2nd Hit deal (ATT - DEF x 95%) x 50% to enemy \n."
        },
        {
          name: "Froze Bolt II (H16)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to freeze enemy, \n2nd Hit deal (ATT - DEF x 90%) x 50% to enemy"
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "froze")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Ranger [RG]",
        icon_url: "https://i.imgur.com/DHM0ciA.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/d8flFS9.png"
      },
          fields: [{
          name: "Froze Bolt I (H4)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to freeze enemy, \n2nd Hit deal (ATT - DEF x 95%) x 50% to enemy \n."
        },
        {
          name: "Froze Bolt II (H16)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to freeze enemy, \n2nd Hit deal (ATT - DEF x 90%) x 50% to enemy."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "froze")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Assassin [AS]",
        icon_url: "https://i.imgur.com/K0tqUKN.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/9O8YU9n.png"
      },
          fields: [{
          name: "Froze Assassination I (H4)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to freeze enemy, \n2nd Hit deal (ATT - DEF x 95%) x 50% to enemy \n."
        },
        {
          name: "Froze Assassination II (H16)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to freeze enemy, \n2nd Hit deal (ATT - DEF x 90%) x 50% to enemy."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "stone")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Wizard [WZ]",
        icon_url: "https://i.imgur.com/XNstrLI.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/qlUNGWv.png"
      },
          fields: [{
          name: "Stone Curse I (H4)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to petrify enemy, \n2nd Hit deal (ATT - DEF x 95%) x 50% to enemy \n."
        },
        {
          name: "Stone Curse II (H16)",
          value: "Deal ATT x 135% - DEF / 2 damage to enemy \nHave chance to petrify enemy, \n2nd Hit deal (ATT - DEF x 90%) x 50% to enemy"
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "cure")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Knight [RK] / Ranger [RG] / Wizard [WZ] / Assassin [AS]",
        icon_url: "https://i.imgur.com/tX9I5d4.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/aBM9xm2.png"
      },
          fields: [{
          name: "Cure I (H9)",
          value: "Restore (Max HP - Current HP) x 49% \n."
        },
        {
          name: "Cure II (H24)",
          value: "Restore (Max HP - Current HP) x 49%, and \nRestore (Max HP - Current HP) x 1% per sec."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "awaken")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Knight [RK] / Ranger [RG] / Wizard [WZ] / Assassin [AS]",
        icon_url: "https://i.imgur.com/tX9I5d4.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/K71pssV.png"
      },
          fields: [{
          name: "Awaken I (H17)",
          value: "Restore (Max SP - Current SP) x 49% \n."
        },
        {
          name: "Awaken II (H33)",
          value: "Restore (Max SP - Current SP) x 49%, and \nRestore (Max SP - Current SP) x 1% per sec."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

  if (message.content.startsWith(prefix + "mshock")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Wizard [WZ]",
        icon_url: "https://i.imgur.com/XNstrLI.png"
      },
      "thumbnail": {
        "url": "https://i.imgur.com/hA1SOoi.png"
      },
          fields: [{
          name: "Magical Shock I (H1)",
          value: "Deal ATT x 90% - Def /2 damage \nHave chance to stun enemy \n."
        },
        {
          name: "Magical Shock II (H7)",
          value: "Deal ATT x 95% - Def /2 damage \nHave chance to stun enemy \nCritical chance increase when enemy is stunned."
        }],
    }
  }).then(message => {message.delete(30000)});
  } 

});

client.login(process.env.BOT_TOKEN);
