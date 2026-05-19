import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { WeatherCard } from "./WeatherCard";
export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = async () => {
    if (city.trim() === "") return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65f80172554a85335c99d261b1d42abb&units=metric`,
      );
      const data = await response.json();

      if (data.cod === 401) {
        setError("API key not activated yet, try later!");
      } else if (data.cod === "404") {
        setError("City not found!");
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.log(err);
      setError("something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <h1 className="text-white text-3xl font-bold mb-8">Weather App</h1>
      <SearchBar
        city={city}
        handleCity={handleCity}
        handleSearch={handleSearch}
      />
      {loading && <p className="text-white/70 text-lg">Fetching weather...</p>}
      {error && <p className="text-red-400 text-lg">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
};
