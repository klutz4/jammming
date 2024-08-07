const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = "http://localhost:3000/";
const scope = "user-read-private user-read-email playlist-modify-public";

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
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
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
        if (!playlistName || !playlistUris.length) {
            return;
          }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}`};

        // get user
        return fetch('https://api.spotify.com/v1/me',
            {
                headers: headers
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            const userId = jsonResponse.id;
            // post playlist
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({name: playlistName})
            }).then(response =>{
                return response.json();
            }).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({uris: playlistUris})
                })
            })

    })

    },
    fetchProfile() {
        const accessToken = Spotify.getAccessToken();

        return fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.display_name) {
                return {displayName: 'Guest'}
            }
            return {
                displayName: jsonResponse.display_name,
                imgUrl: jsonResponse.images[0].url
            }
        })
    }
}


export default Spotify;