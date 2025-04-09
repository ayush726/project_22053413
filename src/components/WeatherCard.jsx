import React from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{data.location}</h2>
        <p className="text-5xl font-bold text-gray-900 my-4">{data.temperature}°C</p>
        <p className="text-xl text-gray-600">{data.condition}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Thermometer className="w-5 h-5" />
          <span>Feels like: {data.feelsLike}°C</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Droplets className="w-5 h-5" />
          <span>Humidity: {data.humidity}%</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Wind className="w-5 h-5" />
          <span>Wind: {data.windSpeed} km/h</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Cloud className="w-5 h-5" />
          <span>H: {data.high}° L: {data.low}°</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;