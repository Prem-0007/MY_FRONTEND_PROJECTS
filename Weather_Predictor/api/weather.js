export default async function handler(req, res) {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_KEY;

  if (!city) {
    return res.status(400).json({ message: "City is required" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
      { cache: "no-store" }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}