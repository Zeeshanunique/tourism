import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind, Eye, Gauge } from 'lucide-react';

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState('ranchi');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cities = [
    { id: 'ranchi', name: 'Ranchi', region: 'Capital City' },
    { id: 'jamshedpur', name: 'Jamshedpur', region: 'Steel City' },
    { id: 'dhanbad', name: 'Dhanbad', region: 'Coal Capital' },
    { id: 'bokaro', name: 'Bokaro', region: 'Steel City' },
    { id: 'deoghar', name: 'Deoghar', region: 'Temple Town' },
    { id: 'hazaribagh', name: 'Hazaribagh', region: 'District Headquarters' },
    { id: 'giridih', name: 'Giridih', region: 'Mining Town' },
    { id: 'chaibasa', name: 'Chaibasa', region: 'Tribal Hub' }
  ];

  // Mock weather data - in a real app, this would come from a weather API
  const weatherData = {
    ranchi: {
      current: {
        temperature: 28,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        visibility: 8,
        pressure: 1013,
        uvIndex: 6,
        feelsLike: 31
      },
      forecast: [
        { day: 'Today', high: 32, low: 22, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 10 },
        { day: 'Tomorrow', high: 30, low: 20, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
        { day: 'Wednesday', high: 29, low: 19, condition: 'Cloudy', icon: 'cloudy', precipitation: 20 },
        { day: 'Thursday', high: 27, low: 18, condition: 'Light Rain', icon: 'rainy', precipitation: 70 },
        { day: 'Friday', high: 26, low: 17, condition: 'Heavy Rain', icon: 'rainy', precipitation: 90 },
        { day: 'Saturday', high: 28, low: 19, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 30 },
        { day: 'Sunday', high: 31, low: 21, condition: 'Sunny', icon: 'sunny', precipitation: 5 }
      ]
    },
    jamshedpur: {
      current: {
        temperature: 32,
        condition: 'Sunny',
        humidity: 58,
        windSpeed: 8,
        visibility: 10,
        pressure: 1015,
        uvIndex: 8,
        feelsLike: 36
      },
      forecast: [
        { day: 'Today', high: 35, low: 25, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
        { day: 'Tomorrow', high: 34, low: 24, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 5 },
        { day: 'Wednesday', high: 33, low: 23, condition: 'Cloudy', icon: 'cloudy', precipitation: 15 },
        { day: 'Thursday', high: 30, low: 21, condition: 'Light Rain', icon: 'rainy', precipitation: 60 },
        { day: 'Friday', high: 28, low: 20, condition: 'Heavy Rain', icon: 'rainy', precipitation: 85 },
        { day: 'Saturday', high: 31, low: 22, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 25 },
        { day: 'Sunday', high: 33, low: 24, condition: 'Sunny', icon: 'sunny', precipitation: 0 }
      ]
    },
    dhanbad: {
      current: {
        temperature: 30,
        condition: 'Cloudy',
        humidity: 72,
        windSpeed: 15,
        visibility: 6,
        pressure: 1010,
        uvIndex: 4,
        feelsLike: 34
      },
      forecast: [
        { day: 'Today', high: 33, low: 23, condition: 'Cloudy', icon: 'cloudy', precipitation: 25 },
        { day: 'Tomorrow', high: 31, low: 22, condition: 'Light Rain', icon: 'rainy', precipitation: 65 },
        { day: 'Wednesday', high: 29, low: 20, condition: 'Heavy Rain', icon: 'rainy', precipitation: 80 },
        { day: 'Thursday', high: 27, low: 19, condition: 'Heavy Rain', icon: 'rainy', precipitation: 90 },
        { day: 'Friday', high: 28, low: 20, condition: 'Cloudy', icon: 'cloudy', precipitation: 40 },
        { day: 'Saturday', high: 30, low: 21, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 20 },
        { day: 'Sunday', high: 32, low: 23, condition: 'Sunny', icon: 'sunny', precipitation: 10 }
      ]
    },
    bokaro: {
      current: {
        temperature: 29,
        condition: 'Light Rain',
        humidity: 78,
        windSpeed: 18,
        visibility: 5,
        pressure: 1008,
        uvIndex: 3,
        feelsLike: 33
      },
      forecast: [
        { day: 'Today', high: 31, low: 21, condition: 'Light Rain', icon: 'rainy', precipitation: 75 },
        { day: 'Tomorrow', high: 28, low: 19, condition: 'Heavy Rain', icon: 'rainy', precipitation: 85 },
        { day: 'Wednesday', high: 26, low: 18, condition: 'Heavy Rain', icon: 'rainy', precipitation: 95 },
        { day: 'Thursday', high: 27, low: 19, condition: 'Cloudy', icon: 'cloudy', precipitation: 45 },
        { day: 'Friday', high: 29, low: 20, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 30 },
        { day: 'Saturday', high: 31, low: 22, condition: 'Sunny', icon: 'sunny', precipitation: 15 },
        { day: 'Sunday', high: 33, low: 24, condition: 'Sunny', icon: 'sunny', precipitation: 5 }
      ]
    },
    deoghar: {
      current: {
        temperature: 27,
        condition: 'Partly Cloudy',
        humidity: 68,
        windSpeed: 10,
        visibility: 7,
        pressure: 1012,
        uvIndex: 5,
        feelsLike: 30
      },
      forecast: [
        { day: 'Today', high: 30, low: 20, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 15 },
        { day: 'Tomorrow', high: 28, low: 19, condition: 'Cloudy', icon: 'cloudy', precipitation: 35 },
        { day: 'Wednesday', high: 26, low: 17, condition: 'Light Rain', icon: 'rainy', precipitation: 70 },
        { day: 'Thursday', high: 25, low: 16, condition: 'Heavy Rain', icon: 'rainy', precipitation: 85 },
        { day: 'Friday', high: 27, low: 18, condition: 'Light Rain', icon: 'rainy', precipitation: 60 },
        { day: 'Saturday', high: 29, low: 20, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 25 },
        { day: 'Sunday', high: 31, low: 22, condition: 'Sunny', icon: 'sunny', precipitation: 10 }
      ]
    },
    hazaribagh: {
      current: {
        temperature: 26,
        condition: 'Cloudy',
        humidity: 75,
        windSpeed: 14,
        visibility: 6,
        pressure: 1009,
        uvIndex: 3,
        feelsLike: 29
      },
      forecast: [
        { day: 'Today', high: 29, low: 19, condition: 'Cloudy', icon: 'cloudy', precipitation: 40 },
        { day: 'Tomorrow', high: 27, low: 18, condition: 'Light Rain', icon: 'rainy', precipitation: 65 },
        { day: 'Wednesday', high: 25, low: 16, condition: 'Heavy Rain', icon: 'rainy', precipitation: 80 },
        { day: 'Thursday', high: 24, low: 15, condition: 'Heavy Rain', icon: 'rainy', precipitation: 90 },
        { day: 'Friday', high: 26, low: 17, condition: 'Cloudy', icon: 'cloudy', precipitation: 50 },
        { day: 'Saturday', high: 28, low: 19, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 30 },
        { day: 'Sunday', high: 30, low: 21, condition: 'Sunny', icon: 'sunny', precipitation: 15 }
      ]
    },
    giridih: {
      current: {
        temperature: 31,
        condition: 'Sunny',
        humidity: 60,
        windSpeed: 9,
        visibility: 9,
        pressure: 1014,
        uvIndex: 7,
        feelsLike: 35
      },
      forecast: [
        { day: 'Today', high: 34, low: 24, condition: 'Sunny', icon: 'sunny', precipitation: 5 },
        { day: 'Tomorrow', high: 33, low: 23, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 10 },
        { day: 'Wednesday', high: 31, low: 22, condition: 'Cloudy', icon: 'cloudy', precipitation: 25 },
        { day: 'Thursday', high: 29, low: 20, condition: 'Light Rain', icon: 'rainy', precipitation: 55 },
        { day: 'Friday', high: 27, low: 19, condition: 'Heavy Rain', icon: 'rainy', precipitation: 75 },
        { day: 'Saturday', high: 30, low: 21, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 20 },
        { day: 'Sunday', high: 32, low: 23, condition: 'Sunny', icon: 'sunny', precipitation: 5 }
      ]
    },
    chaibasa: {
      current: {
        temperature: 25,
        condition: 'Light Rain',
        humidity: 82,
        windSpeed: 16,
        visibility: 4,
        pressure: 1007,
        uvIndex: 2,
        feelsLike: 28
      },
      forecast: [
        { day: 'Today', high: 28, low: 18, condition: 'Light Rain', icon: 'rainy', precipitation: 80 },
        { day: 'Tomorrow', high: 26, low: 17, condition: 'Heavy Rain', icon: 'rainy', precipitation: 90 },
        { day: 'Wednesday', high: 24, low: 15, condition: 'Heavy Rain', icon: 'rainy', precipitation: 95 },
        { day: 'Thursday', high: 25, low: 16, condition: 'Cloudy', icon: 'cloudy', precipitation: 55 },
        { day: 'Friday', high: 27, low: 18, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 35 },
        { day: 'Saturday', high: 29, low: 20, condition: 'Sunny', icon: 'sunny', precipitation: 20 },
        { day: 'Sunday', high: 31, low: 22, condition: 'Sunny', icon: 'sunny', precipitation: 10 }
      ]
    }
  };

  const currentWeather = weatherData[selectedCity as keyof typeof weatherData];

  const getWeatherIcon = (condition: string, size: string = 'h-8 w-8') => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className={`${size} text-yellow-500`} />;
      case 'partly-cloudy':
        return <Cloud className={`${size} text-gray-400`} />;
      case 'cloudy':
        return <Cloud className={`${size} text-gray-500`} />;
      case 'rainy':
        return <CloudRain className={`${size} text-blue-500`} />;
      default:
        return <Sun className={`${size} text-yellow-500`} />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'from-yellow-400 to-orange-500';
      case 'partly cloudy':
        return 'from-blue-400 to-gray-500';
      case 'cloudy':
        return 'from-gray-400 to-gray-600';
      case 'light rain':
      case 'heavy rain':
        return 'from-blue-500 to-blue-700';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weather in Jharkhand
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real-time weather updates and forecasts for major cities and tourist destinations across Jharkhand
          </p>
        </div>

        {/* City Selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {cities.map(city => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCity === city.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{city.name}</div>
                <div className="text-xs opacity-75">{city.region}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Current Weather Card */}
        <div className={`bg-gradient-to-r ${getConditionColor(currentWeather.current.condition)} rounded-3xl p-8 mb-8 text-white shadow-2xl`}>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-2">
                {cities.find(c => c.id === selectedCity)?.name}
              </h2>
              <p className="text-xl opacity-90 mb-4">{currentWeather.current.condition}</p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                {getWeatherIcon(currentWeather.current.condition, 'h-16 w-16')}
                <div className="text-6xl font-bold">{currentWeather.current.temperature}°C</div>
              </div>
              <p className="text-lg opacity-75 mt-2">
                Feels like {currentWeather.current.feelsLike}°C
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Droplets className="h-5 w-5 mr-2" />
                  <span className="text-sm opacity-75">Humidity</span>
                </div>
                <div className="text-2xl font-bold">{currentWeather.current.humidity}%</div>
              </div>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Wind className="h-5 w-5 mr-2" />
                  <span className="text-sm opacity-75">Wind Speed</span>
                </div>
                <div className="text-2xl font-bold">{currentWeather.current.windSpeed} km/h</div>
              </div>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Eye className="h-5 w-5 mr-2" />
                  <span className="text-sm opacity-75">Visibility</span>
                </div>
                <div className="text-2xl font-bold">{currentWeather.current.visibility} km</div>
              </div>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Gauge className="h-5 w-5 mr-2" />
                  <span className="text-sm opacity-75">Pressure</span>
                </div>
                <div className="text-2xl font-bold">{currentWeather.current.pressure} mb</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg opacity-75 mb-2">Current Time</div>
              <div className="text-3xl font-bold">
                {currentTime.toLocaleTimeString('en-IN', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZone: 'Asia/Kolkata'
                })}
              </div>
              <div className="text-sm opacity-75 mt-1">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'Asia/Kolkata'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">7-Day Forecast</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {currentWeather.forecast.map((day, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-900 mb-2">{day.day}</div>
                <div className="flex justify-center mb-3">
                  {getWeatherIcon(day.icon, 'h-10 w-10')}
                </div>
                <div className="text-sm text-gray-600 mb-2">{day.condition}</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">{day.high}°</span>
                  <span className="text-gray-500">{day.low}°</span>
                </div>
                <div className="flex items-center justify-center text-xs text-blue-600">
                  <Droplets className="h-3 w-3 mr-1" />
                  {day.precipitation}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Alerts & Tips */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Weather Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-yellow-200 rounded-full p-1 mr-3 mt-1">
                  <Sun className="h-4 w-4 text-yellow-700" />
                </div>
                <div>
                  <div className="font-semibold text-yellow-800">High UV Index</div>
                  <div className="text-yellow-700 text-sm">UV index is {currentWeather.current.uvIndex}. Use sunscreen and protective clothing.</div>
                </div>
              </div>
              
              {currentWeather.current.condition.toLowerCase().includes('rain') && (
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full p-1 mr-3 mt-1">
                    <CloudRain className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800">Rain Expected</div>
                    <div className="text-blue-700 text-sm">Carry umbrella and plan indoor activities.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">Travel Tips</h3>
            <div className="space-y-3 text-green-700">
              <div className="flex items-center">
                <Thermometer className="h-4 w-4 mr-2" />
                <span className="text-sm">Best time to visit outdoor attractions: Early morning or evening</span>
              </div>
              <div className="flex items-center">
                <Wind className="h-4 w-4 mr-2" />
                <span className="text-sm">Wind speed is moderate, good for outdoor activities</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span className="text-sm">Visibility is good for photography and sightseeing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Weather Guide</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Winter (Dec-Feb)</h4>
              <p className="text-gray-600 text-sm">Pleasant weather, ideal for sightseeing. Temperature: 10-25°C</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Summer (Mar-May)</h4>
              <p className="text-gray-600 text-sm">Hot and dry weather. Temperature: 25-40°C. Carry water and sun protection.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CloudRain className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Monsoon (Jun-Sep)</h4>
              <p className="text-gray-600 text-sm">Heavy rainfall, lush greenery. Temperature: 20-30°C. Roads may be affected.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Post-Monsoon (Oct-Nov)</h4>
              <p className="text-gray-600 text-sm">Clear skies, perfect for outdoor activities. Temperature: 15-28°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;