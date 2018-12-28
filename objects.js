
var playlist = {
  artist1 = "song1",
  artist2 = "song2"
};

playlist.artistName = [ "Phil Ochs", "Grimes"];
playlist.songTitle = [ "My Bloody Valentine", "Slowdive"];

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}