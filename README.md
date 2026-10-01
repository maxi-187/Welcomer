# Welcomer

A simple Discord bot built with [discord.js](https://discord.js.org) that posts an embed when a member joins or leaves your server.

## Requirements

- Node.js 18 or newer
- A Discord application with a bot token

## Installation

```bash
git clone https://github.com/maxi-187/Welcomer.git
cd Welcomer
npm install
```

## Create the Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
2. Open the **Bot** tab and add a bot.
3. Click **Reset Token** and copy the token. Keep it secret.
4. Under **Privileged Gateway Intents**, enable **SERVER MEMBERS INTENT**. Without it, join and leave events are not received.

## Invite the Bot

1. Open **OAuth2 → URL Generator**.
2. Select the scope `bot`.
3. Select the permissions **View Channel** and **Send Messages**.
4. Open the generated URL and add the bot to your server.

## Configuration

### Token (`.env`)

Create a `.env` file in the project folder (you can copy `.env.example`) and paste your token:

```
TOKEN=your_bot_token_here
```

`.env` is listed in `.gitignore`, so your token is not committed. Never share it. If it leaks, reset it in the Developer Portal.

### Settings (`config.json`)

| Key | Description |
| --- | --- |
| `WelcomeChannelID` | Channel where welcome messages are sent |
| `LeaveChannelID` | Channel where leave messages are sent (can be the same channel) |
| `FooterText` | Text shown in the embed footer |
| `EmbedColor` | Embed color, either a name like `"Orange"` or a hex value like `"#FF8800"` |

**How to get a channel ID:** In Discord, enable *User Settings → Advanced → Developer Mode*, then right-click a channel and choose **Copy Channel ID**.

## Run

```bash
npm start
```

The console should print `Logged in as ...!`.

## Customize Messages

Edit the `.setDescription(...)` calls in `index.js`. Use backticks so the username placeholder is replaced:

```js
// Welcome message (guildMemberAdd)
.setDescription(`Welcome, ${member.user.username}! We're glad to have you here!`)

// Leave message (guildMemberRemove)
.setDescription(`Goodbye, ${member.user.username}! We'll miss you!`)
```

## Troubleshooting

- **`Missing TOKEN`:** Create the `.env` file as described above.
- **`Used disallowed intents`:** Enable SERVER MEMBERS INTENT in the Developer Portal.
- **No messages appear:** Check the channel IDs and make sure the bot can view and send messages in those channels.
- **Bot is online but nothing happens on join:** Make sure the bot was invited to the server and that the intent is enabled.