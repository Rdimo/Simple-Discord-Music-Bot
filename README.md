## A Discord Music Bot written in JavaScript,     made by iLikeBouncyBalls#6969

![](https://img.shields.io/github/watchers/Rdimo/Discord-Music-Bot?style=social) 
![](https://img.shields.io/github/stars/Rdimo/Discord-Music-Bot?style=social) 

[Vid tutorial here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
### License
This project can be used and modified by anyone who wants to, made this bot for the people who just want their own simple music bot, so just download the zip and follow the tutorial to get started 🠗
	
|    Step by Step Installation 		|
| ------------------------------------ 	|
| [Download](https://github.com/Rdimo/Discord-Music-Bot/archive/refs/heads/main.zip) this project as a zip, then extract it	|
| Open the folder in [visual studio code](https://code.visualstudio.com/Download#) or other editor of your choice							|
| open terminal and type `npm i` to install the required modules 		|
| change the tokens/api keys in config.json 		|
| `node index.js` in terminal to start the bot 				|
| `Done!` 				|
```
{
  "token": "Your-Bot-Token",
  "prefix": "!",
  "discord_owner_id": "Your-Discord-ID",
  "youtubeAPI": "youtube-api-key"
}
```
[How to get a Youtube API key](https://developers.google.com/youtube/v3/getting-started)

[Installing node.js on Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)


### Need help?
| Add iLikeBouncyBalls#6969 on discord for help or join Discord.gg/zATCBVGRef	|
| -----------------------------------------------------------------------------	|
| Fork it and give it a star if you liked this bot or wanna support this project 😄	|

### Options

Default Settings for options.json, change them to your liking

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

* ` !play`                 | Play any song or playlist from youtube, you can do it by searching for a song by name or song url or playlist url                                                     
* ` !create-playlist`      | Create a saved playlist                                                                                                                                                  
* ` !delete-playlist`      | Delete a playlist from your saved playlists                                                                                                                            
* ` !display-playlist`     | Display a saved playlist                                                                                                                                               
* ` !my-playlists`         | List your saved playlists                                                                                                                                                      
* ` !remove-from-playlist` | Remove a song from a saved playlist using its index                                                                                                              
* ` !save-to-playlist`     | Save a song or a playlist to a saved playlist
* ` !pause`                | Pause the current playing song                                                                                                                                                       
* ` !resume`               | Resume the current paused song                                                                                                                                                      
* ` !leave`                | Leaves voice channel if in one                                                                                                                                                        
* ` !remove`               | Remove a specific song from queue by its number in queue                                                                                                                          
* ` !queue`                | Display the song queue                                                                                                                                                              
* ` !shuffle`              | Shuffle the song queue                                                                                                                                                              
* ` !skip`                 | Skip the current playing song                                                                                                                                                       
* ` !skipall`              | Skip all songs in queue                                                                                                                                                              
* ` !skipto`               | Skip to a specific song in the queue, provide the song number as an argument                                                                                                      
* ` !volume`               | Adjust song volume                                                                                                                                                              
* ` !music-trivia`         | Engage in a music trivia with your friends. You can add more songs to the trivia pool in resources/music/musictrivia.json                                                     
* ` !loop`                 | Loop the currently playing song                                                                                                                                                                                                                                              
* ` !now-playing`          | Display the current playing song with a playback bar                                                                                                                  
* ` !move`                 | Move song to a desired position in queue                                                                                                                                      
* ` !help` 		   | Displays a list of available commands, or detailed information for a specified command.
* ` !ping` 		   | Checks the bot's ping to the Discord server.

### This bot was made by
Love ❌
code ✅