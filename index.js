require("dotenv").config();

const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const config = require("./config.json");

if (!process.env.TOKEN) {
  console.error("Missing TOKEN. Create a .env file with TOKEN=your_bot_token");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.on("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.get(config.WelcomeChannelID);
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setAuthor({
      name: member.user.username,
      iconURL: member.user.displayAvatarURL(),
    })
    .setDescription(
      `Welcome, ${member.user.username}! We're glad to have you here!`,
    )
    .setColor(config.EmbedColor)
    .setFooter({ text: config.FooterText })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

client.on("guildMemberRemove", async (member) => {
  const channel = member.guild.channels.cache.get(config.LeaveChannelID);
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setAuthor({
      name: member.user.username,
      iconURL: member.user.displayAvatarURL(),
    })
    .setDescription(`Goodbye, ${member.user.username}! We'll miss you!`)
    .setColor(config.EmbedColor)
    .setFooter({ text: config.FooterText })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);
