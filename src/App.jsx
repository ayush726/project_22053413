import React, { useState } from 'react';
import { getWeatherData } from './services/weatherService';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { CloudRain } from 'lucide-react';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center p-8">
      <div className="flex items-center gap-2 mb-8">
        <CloudRain className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
      </div>

      <SearchBar onSearch={handleSearch} isLoading={loading} />

      <div className="mt-8 w-full max-w-md">
        {loading && (
          <div className="text-center text-gray-600">
            Loading weather data...
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {weather && !loading && !error && (
          <WeatherCard data={weather} />
        )}
      </div>
    </div>
  );
}

export default App;