export async function getIPAddressInfo() {
  const apiKey = import.meta.env.VITE_IP_API_KEY;

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=8.8.8.8`,
  );

  return res.json();
}
