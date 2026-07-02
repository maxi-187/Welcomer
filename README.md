# WelcomeBot

Simple Discord.js welcome/leaver bot.

## Requirements

- Node.js 18 or newer
- A Discord application and bot token

## Install

1. Open a terminal in this folder.
2. Install dependencies:
   npm install

## Install from GitHub

1. Clone the repository:
   git clone https://github.com/maxi-187/Welcomer.git
2. Change into the project folder:
   cd <Welcomer>
3. Install dependencies:
   npm install

## Setup

1. Open `index.js`.
2. Replace `Your-Bot-Token` with your bot token.
3. Replace `ChannelID` with the ID of the welcome/leave channel.

## Get a Bot Token

1. Visit https://discord.com/developers/applications
2. Create a new application.
3. Go to the Bot tab and add a bot.
4. Copy the token and paste it into `index.js`.
5. Under "Privileged Gateway Intents", enable:
   - SERVER MEMBERS INTENT
   - MESSAGE CONTENT INTENT (if needed)

## Run the Bot

1. Start the bot:
   node index.js
2. Watch the console for `Logged in as ...!`.

## Notes

- Make sure the bot has permission to view and send messages in the configured channel.
- Use the Guild Member events only on servers where the bot is present.
