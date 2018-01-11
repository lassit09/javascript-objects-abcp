var playlist = new Object({Phish: 'Harry Hood'});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
