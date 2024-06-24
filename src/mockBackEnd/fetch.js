// This module exports fake data fetching functionality.
// In a real app, this would grab data from the internet, but
// this module just waits a little bit before responding.

import tracks from "./data";

export function get() {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { status: 200, data: tracks };

      resolve(response);
    }, delay);
  });
}
