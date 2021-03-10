export default function fetchIPAddress(ip) {
    return fetch(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_ACCESS_TOKEN_IP_TOKEN}&ipAddress=${ip}`
    )
    .then(response => response.json())
    .then(data => data)
}