
var playlist = {
Phil Ochs: ""

playlist.artistName = [ "Phil Ochs", "Grimes"];
playlist.songTitle = [ "My Bloody Valentine", "Slowdive"];

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}