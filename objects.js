
var playlist = {
artist: "artistName",
song: "songTitle"
};

playlist.artistName = [ "Lana Del Rey", "Grimes"];
playlist.songTitle = [ "Love", "Vanessa"];

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}