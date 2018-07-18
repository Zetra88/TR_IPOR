const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(process.env.NDY1ODcxMzk0NjkwMDM5ODE4.DipMfw.02EHQoOU5TL82WBbUXhcWfaBqCY);
