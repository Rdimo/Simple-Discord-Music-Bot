# A Discord Music Bot written in JavaScript, the discord.js library and discord.js-commando framework

![](https://img.shields.io/github/watchers/Rdimo/Discord-Music-Bot?style=social) 
![](https://img.shields.io/github/stars/Rdimo/Discord-Music-Bot?style=social) 
[![image](https://img.shields.io/badge/language-javascript-yellow)](https://www.javascript.com/)
[![image](https://img.shields.io/badge/node-%3E%3D%2014.0.0-blue)](https://nodejs.org/)

### Installing the dependencies

`npm i`

### Setup

In the config.json file, change these to your actual tokens/api keys

```
{
  "token": "Your-Bot-Token",
  "prefix": "!",
  "discord_owner_id": "Your-Discord-ID",
  "youtubeAPI": "youtube-api-key"
}
```

### Options

Default Settings for options.json

```
{
  "playLiveStreams": true,
  "playVideosLongerThan1Hour": true,
  "maxQueueLength": 1000,
  "AutomaticallyShuffleYouTubePlaylists": false,
  "LeaveTimeOut": 90,
  "MaxResponseTime": 30,
  "deleteOldPlayMessage": false
}
```

- playLiveStreams : Allow to play Live Streams (`true`,`false`)
- playVideosLongerThan1Hour : Allow to play videos longer than 1 hour (`true`,`false`)
- maxQueueLength : Maximum numbers of songs that can be in queue (`integer > 1`)
- AutomaticallyShuffleYouTubePlaylists : Automatic shuffle YouTube playlists : (`true`,`false`)
- LeaveTimeOut : Timeout in seconds before bot leaves channel due to inactivity.(`integer` between `1` and `600`)
- MaxResponseTime : Maximum time in seconds allowed for user to response back to bot before cancelling command (example: using !play song name) : (`integer` between `5` and `150`)
- deleteOldPlayMessage : Remove play message after playing or no : (`true`,`false`)

### Commands

- Music

| Command               | Description                                                                                                               | Usage                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| !play                 | Play any song or playlist from youtube, you can do it by searching for a song by name or song url or playlist url         | !play darude sandstorm                                            |
| !create-playlist      | Create a saved playlist                                                                                                   | !create-playlist EDM                                              |
| !delete-playlist      | Delete a playlist from your saved playlists                                                                               | !delete-playlist EDM                                              |
| !display-playlist     | Display a saved playlist                                                                                                  | !display-playlist EDM                                             |
| !my-playlists         | List your saved playlists                                                                                                 | !my-playlists                                                     |
| !remove-from-playlist | Remove a song from a saved playlist using its index                                                                       | !remove-from-playlist EDM 5                                       |
| !save-to-playlist     | Save a song or a playlist to a saved playlist                                                                             | !save-to-playlist EDM https://www.youtube.com/watch?v=dQw4w9WgXcQ |
| !pause                | Pause the current playing song                                                                                            | !pause                                                            |
| !resume               | Resume the current paused song                                                                                            | !resume                                                           |
| !leave                | Leaves voice channel if in one                                                                                            | !leave                                                            |
| !remove               | Remove a specific song from queue by its number in queue                                                                  | !remove 4                                                         |
| !queue                | Display the song queue                                                                                                    | !queue                                                            |
| !shuffle              | Shuffle the song queue                                                                                                    | !shuffle                                                          |
| !skip                 | Skip the current playing song                                                                                             | !skip                                                             |
| !skipall              | Skip all songs in queue                                                                                                   | !skipall                                                          |
| !skipto               | Skip to a specific song in the queue, provide the song number as an argument                                              | !skipto 5                                                         |
| !volume               | Adjust song volume                                                                                                        | !volume 80                                                        |
| !music-trivia         | Engage in a music trivia with your friends. You can add more songs to the trivia pool in resources/music/musictrivia.json | !music-trivia                                                     |
| !loop                 | Loop the currently playing song                                                                                           | !loop 5                                                           |
| !loopqueue            | Loop the queue                                                                                                            | !loopqueue 2                                                      |
| !lyrics               | Get lyrics of any song or the lyrics of the currently playing song                                                        | !lyrics song-name                                                 |
| !now-playing          | Display the current playing song with a playback bar                                                                      | !now-playing                                                      |
| !move                 | Move song to a desired position in queue                                                                                  | !move 8 1                                                         |


### Support Me

Fork it and give it a star :D
Joind discord here to Discord.gg/zATCBVGRef
