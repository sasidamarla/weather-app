export const WeatherCard = ({ weather }) => {
  if (!weather) return null;
  return (
    <div
      className="w-full max-w-md rounded-2xl p-8 text-white"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold">{weather.name}</h2>
        <p className="text-white/60 capitalize mt-1">
          {weather.weather[0].description}
        </p>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="w-20 h-20 mx-auto"
      />
      <div className="text-center mb-8">
        <span className="text-7xl font-thin">
          {Math.round(weather.main.temp)}°C
        </span>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-white/60 text-sm">Humidity</p>
          <p className="text-xl font-medium">{weather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-white/60 text-sm">Wind Speed</p>
          <p className="text-xl font-medium">{weather.wind.speed} km/h</p>
        </div>
        <div className="text-center">
          <p className="text-white/60 text-sm">Feels Like</p>
          <p className="text-xl font-medium">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>
      </div>
    </div>
  );
};
