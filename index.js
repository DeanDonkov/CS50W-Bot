const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Test command (To see if the bot works) 

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});
 
//Help command
  
client.on("message", (msg) => {
  if (msg.content === "/help") {
      
    var command_list = 'Here is a list of my commands!' +
    '\n`/project0` will give you information about project0' +
    '\n`/project1` will give you information about project1' +
    '\n`/project2` will give you information about project2' +
    '\n`/project3` will give you information about project3' +
    '\n`/final` will give you information about the final' +
    '\n`/course` will give the course link'
    '\n`/help` lists all my commands'

    msg.reply(command_list);
  }
});
  client.on("message", (msg) => {
  if (msg.content === "/project0") {
    msg.reply("#project-0 Project Homepage link:https://docs.cs50.net/web/2020/x/projects/0/project0.html");
  }
});
client.on("message", (msg) => {
  if (msg.content === "/project1") {
    msg.reply("#project-1 Project Homepage link:https://docs.cs50.net/web/2020/x/projects/1/project1.html");
  }
});
client.on("message", (msg) => {
  if (msg.content === "/project2") {
    
    msg.reply("#project-2 Project Homepage link:https://docs.cs50.net/web/2020/x/projects/2/project2.html");
  }
});
client.on("message", (msg) => {
  if (msg.content === "/project3") {
    
    msg.reply("#project-3 Project Homepage link:https://docs.cs50.net/web/2020/x/projects/3/project3.html");
  }
});
client.on("message", (msg) => {
  if (msg.content === "/final") {
    
    msg.reply("#final Project Homepage link:https://docs.cs50.net/web/2020/x/projects/final/final.html");
  }
});
  client.on("message", (msg) => {
  if (msg.content === "/course") {
    
    msg.reply("Course link: https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript");
  }
});

client.login(process.env.TOKEN);
