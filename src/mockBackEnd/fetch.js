// This module exports fake data fetching functionality.
// In a real app, this would grab data from the internet, but
// this module just waits a little bit before responding.

import tracks from "./data";

export function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!tracks.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(tracks)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      const response = { status: 200, data: tracks[endpoint] };

      resolve(response);
    }, delay);
  });
}
