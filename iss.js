const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  // endpoint https://api.ipify.org?format=json
  // return data as {"ip":"75.156.142.74"}
  const url = 'https://api.ipifsy.org?format=json';
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const IP = JSON.parse(body).ip;
      callback(null, IP);
    }
  });
};

module.exports = { fetchMyIP };