const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = "Your-Bot-Token"; // Your Bot Token

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.get("ChannelID"); // Welcome-ID Channel
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setAuthor({
      name: member.user.username,
      iconURL: member.user.displayAvatarURL({ dynamic: true }),
    })
    .setDescription(
      `\nHey <@${member.user.id}>, welcome to **${member.guild.name}**!`,
    )
    .setColor(`Orange`)
    .setFooter({ text: `Welcomer` })
    .setTimestamp(Date.now());

  channel.send({ embeds: [embed] });
});

client.on("guildMemberRemove", async (member) => {
  const channel = member.guild.channels.cache.get("ChannelID"); // Leave-ID Channel
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setAuthor({
      name: member.user.username,
      iconURL: member.user.displayAvatarURL({ dynamic: true }),
    })
    .setDescription(`\n<@${member.user.id}> has left **${member.guild.name}**.`)
    .setColor(`Orange`)
    .setFooter({ text: `Leaver` })
    .setTimestamp(Date.now());

  channel.send({ embeds: [embed] });
});

client.login(TOKEN);
