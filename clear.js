exports.run = async (client, message, args) => {
  const Discord = require("discord.js")
let cantidad = args.join(" "); 
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have `MANAGE_MESSAGES` permissions!")
if (!cantidad) return message.channel.send("Enter the amount of messages to be deleted!");
if (cantidad <= 1) return message.channel.send("You can't delete less than 2 message!")
if (cantidad > 100) return message.channel.send("You can't delete more than 100 messages!");
 await message.delete();
 await message.channel.bulkDelete(cantidad)
message.channel.send(`**${cantidad}** ­messages got succesfully deleted`)
}
