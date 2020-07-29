//token: client.login('NTk1MzE2NDI1MzAwNzcwODI3.XRpNoA.fwA9p7K7U-YWmApF0xmFJoaA1sg');
// Resultado final
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "olimpo!"


client.on("ready", () => {
  console.log(`Estoy listo!`);

  client.user.setPresence( {
      status: "online",
      game: {
          name: ` olimpo!info - La ip del servidor es: (Proximamente) `,
          type: "PLAYING"
      }
   });

});

client.on("message", async (message) => {
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
 if(message.content.startsWith("bbzitah")) {
   message.channel.send("lo nuestro es un secreto :3");
 }

// Comandos del bot, b!help



// Al hacer un comando poner al inicio if (message.content.startsWith(prefix +"comando")){ 

  if (message.content.startsWith(prefix + "info")) {
    const embed = new Discord.RichEmbed()
      .setFooter("OlimpoCraft", client.user.avatarURL)
      .addField(
        "Lista oficial de comandos",
        "Esta es la lista oficial de comandos del bot de OlimpoCraft, para poder usar estos comandos utiliza el prefix . antes de usar cualquier comando!. "
      )
      .addField(
        "Comandos Informativos ",
        "`foro` | `ip` | `tienda` | `redes`"
      )
      .addField("Comandos de Moderacion ", 
      "`sancion` | `kick`")
      .setColor(0xf57eff);

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "avatar")) {
    let miembro = message.mentions.users.first();
    if (!miembro) {
      const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(0xf57eff)
        .setFooter(`Avatar de ${message.author.tag} `);
      message.channel.send(embed);
    }
    if (miembro) {
      const embedd = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)
        .setColor(0xf57eff)
        .setFooter(`Avatar de ${miembro.tag} `);

      message.channel.send(embedd);
    }
  }

  if (message.content.startsWith(prefix + "sancion")) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(" ");

    if (!mencionado)
      return message.reply(
        "Oh, no has mencionado a ningun usuario para ser sancionado."
      );
    if (!razon)
      return message.channel.send(
        "Escriba alguna razón para sancionar al usuario."
      );

    message.guild.member(mencionado).ban(razon);
    message.channel.send(
      `**${mencionado.username}**, ha sido sancionado de OlimpoCraft por la siguiente razón; , **${razon}.**`
    );
  }

  if (message.content.startsWith(prefix + "kick")) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(" ");

    if (!mencionado)
      return message.reply(
        "Oh, no has mencionado a ningun usuario para ser Kickeado!."
      );
    if (!razon)
      return message.channel.send(
        "Escriba alguna razón para kickear al usuario."
      );

    message.guild.member(mencionado).kick(razon);
    message.channel.send(
      `**${mencionado.username}**, ha sido kickeado de OlimpoCraft por la siguiente razón; , ${razon}.`
    );
  }

  if (command === "clear") {
    let cantidad = args.join(" ");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("Usted no tiene permisos para hacer esto!");
    if (!cantidad)
      return message.channel.send(
        "Pon la cantidad de los mensajes que quieras borrar!"
      );
    if (cantidad <= 1)
      return message.channel.send(
        "Lo sentimos no puedes borrar menos de 2 mensajes!"
      );
    if (cantidad > 500)
      return message.channel.send(
        "Lo sentimos no puedes borrar mas de 500 mensajes!"
      );
    await message.delete();
    await message.channel.bulkDelete(cantidad);
    message.channel.send(
      `**${cantidad}** ­mensajes han sido borrados del canal`
    );
  }

  if (message.content.startsWith(prefix + "ip")) {
    let userm = message.mentions.users.first();
    if (!message.content.startsWith(prefix)) return;

    message.channel.send({
      embed: {
        color: 3447003,
        description:
          "La Ip de OlimpoCraft es::crossed_swords: | ¡Pronto! | :crossed_swords: "
      }
    });
  }

  if (message.content.startsWith(prefix + "foro")) {
    let userm = message.mentions.users.first();
    if (!message.content.startsWith(prefix)) return;

    message.channel.send({
      embed: {
        color: 3447003,
        description:
          "El Foro de OlimpoCraft es::crossed_swords: | Pronto | :crossed_swords:"
      }
    });
  }

  if (message.content.startsWith(prefix + "tienda")) {
    let userm = message.mentions.users.first();
    if (!message.content.startsWith(prefix)) return;

    message.channel.send({
      embed: {
        color: 3447003,
        description:
          "La tienda de OlimpoCraft es::crossed_swords: | https://olimpocraft-webstore.tebex.io/ | :crossed_swords:"
      }
    });
  }

  if (message.content.startsWith(prefix + "redes")) {
    let userm = message.mentions.users.first();
    if (!message.content.startsWith(prefix)) return;

    message.channel.send({
      embed: {
        color: 3447003,
        description:
          "Nuestras redes sociales son::crossed_swords: | Twitter:  | :crossed_swords: "
      }
    });
  }

  if (message.content.startsWith(prefix + "say")) {
    if (!args)
      return message.channel.send(
        `Debes escribir un mensaje para poder mandarlo.`
      );
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "Lo siento, no tienes permisos para hacer esto!"
      );
    message.channel.send(args.join(" "));
  }

});

// abcdaeri
client.login(process.env.BOT_TOKEN);
