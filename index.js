const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token, discord_owner_id } = require('./config.json');
const fs = require('fs');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        skipTimer: false, // only skip if user used leave command
        loopSong: false,
        loopQueue: false,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
    resetMusicDataOnError() {
      this.musicData.queue.length = 0;
      this.musicData.isPlaying = false;
      this.musicData.nowPlaying = null;
      this.musicData.loopSong = false;
      this.musicData.loopQueue = false;
      this.musicData.songDispatcher = null;
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: discord_owner_id
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', ':notes: Music Command Group: :notes:']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false,
    unknownCommand: false,
    //help: false <-- add this if you want to disable the help command
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));
  const commandFiles = fs.readdirSync('./commands/music/').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    console.log("\x1b[36m" ,'[Command Manager]:',file); //get and log the files
  }

client.once('ready', () => {
  console.log(`${client.user.tag} is Ready!`);
  client.user.setActivity(`${prefix}help`, {
    type: 'WATCHING',
    url: 'https://github.com/Rdimo/Discord-Music-Bot'
  });
});
client.on('voiceStateUpdate', async (___, newState) => {
  if (
    newState.member.user.bot &&
    !newState.channelID &&
    newState.guild.musicData.songDispatcher &&
    newState.member.user.id == client.user.id
  ) {
    newState.guild.musicData.queue.length = 0;
    newState.guild.musicData.songDispatcher.end();
    return;
  }
  if (
    newState.member.user.bot &&
    newState.channelID &&
    newState.member.user.id == client.user.id &&
    !newState.selfDeaf
  ) {
    newState.setSelfDeaf(true);
  }
});
client.login(token);
