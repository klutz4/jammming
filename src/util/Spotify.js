const clientId = "073742cdd42e4f4ca88fe832552c19d7";
const redirectUri = "http://localhost:3000/";

let accessToken;

const Spotify = {
    getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
  
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
        return accessToken;
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
      }
    },
    search(input) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${input}`,
            {
                headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return [];
            }
            // parse json
            return jsonResponse.tracks.items.map((track) => 
                ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                })
            )
        })
    },
    savePlaylist(playlistName, playlistUris) {

    }
}

export default Spotify;