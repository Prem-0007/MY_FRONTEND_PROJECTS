export default async function handler(req, res) {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
}
