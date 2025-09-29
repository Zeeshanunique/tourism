import React, { useState } from 'react';
import { Plane, Brain as Train, Car, Bus, MapPin, Clock, IndianRupee, Info } from 'lucide-react';

const Transport = () => {
  const [selectedMode, setSelectedMode] = useState('all');

  const transportModes = [
    {
      id: 'air',
      name: 'Air Travel',
      icon: <Plane className="h-8 w-8" />,
      color: 'blue',
      description: 'Fastest way to reach Jharkhand from major cities'
    },
    {
      id: 'rail',
      name: 'Railway',
      icon: <Train className="h-8 w-8" />,
      color: 'green',
      description: 'Extensive railway network connecting all major destinations'
    },
    {
      id: 'road',
      name: 'Road Transport',
      icon: <Car className="h-8 w-8" />,
      color: 'orange',
      description: 'Flexible travel options with buses, taxis, and car rentals'
    },
    {
      id: 'local',
      name: 'Local Transport',
      icon: <Bus className="h-8 w-8" />,
      color: 'purple',
      description: 'Local buses, auto-rickshaws, and city transport services'
    }
  ];

  const airportInfo = {
    name: 'Birsa Munda Airport (Ranchi)',
    code: 'IXR',
    location: 'Ranchi',
    facilities: ['Terminal Building', 'Parking', 'Restaurants', 'ATM', 'Medical Center'],
    airlines: [
      { name: 'Air India', routes: ['Delhi', 'Mumbai', 'Kolkata', 'Bengaluru'] },
      { name: 'IndiGo', routes: ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai'] },
      { name: 'SpiceJet', routes: ['Delhi', 'Kolkata', 'Pune'] },
      { name: 'Vistara', routes: ['Delhi', 'Mumbai'] }
    ],
    distance: {
      'Ranchi City': '7 km',
      'Betla National Park': '160 km',
      'Netarhat': '156 km',
      'Dassam Falls': '40 km'
    }
  };

  const railwayStations = [
    {
      name: 'Ranchi Railway Station',
      code: 'RNC',
      type: 'Major Junction',
      platforms: 6,
      facilities: ['Waiting Room', 'Food Courts', 'Parking', 'ATM', 'Book Stall'],
      majorTrains: [
        { name: 'Rajdhani Express', route: 'Delhi - Ranchi', duration: '16h 30m' },
        { name: 'Shatabdi Express', route: 'Kolkata - Ranchi', duration: '6h 45m' },
        { name: 'Hatia Express', route: 'Mumbai - Hatia', duration: '28h 15m' }
      ]
    },
    {
      name: 'Dhanbad Junction',
      code: 'DHN',
      type: 'Major Junction',
      platforms: 8,
      facilities: ['Waiting Room', 'Restaurants', 'Parking', 'Medical Center'],
      majorTrains: [
        { name: 'Coalfield Express', route: 'Delhi - Dhanbad', duration: '18h 20m' },
        { name: 'Black Diamond Express', route: 'Mumbai - Dhanbad', duration: '26h 45m' }
      ]
    },
    {
      name: 'Bokaro Steel City',
      code: 'BKSC',
      type: 'Terminal Station',
      platforms: 4,
      facilities: ['Waiting Room', 'Food Stalls', 'Parking'],
      majorTrains: [
        { name: 'Steel Express', route: 'Delhi - Bokaro', duration: '17h 30m' }
      ]
    }
  ];

  const roadRoutes = [
    {
      from: 'Delhi',
      distance: '1,350 km',
      duration: '22-24 hours',
      route: 'Delhi → Agra → Kanpur → Allahabad → Varanasi → Gaya → Ranchi',
      highways: ['NH-19', 'NH-2', 'NH-139'],
      tollCost: '₹800-1,200'
    },
    {
      from: 'Mumbai',
      distance: '1,650 km',
      duration: '28-30 hours',
      route: 'Mumbai → Nagpur → Raipur → Ranchi',
      highways: ['NH-6', 'NH-49', 'NH-20'],
      tollCost: '₹1,200-1,500'
    },
    {
      from: 'Kolkata',
      distance: '420 km',
      duration: '8-9 hours',
      route: 'Kolkata → Durgapur → Asansol → Dhanbad → Ranchi',
      highways: ['NH-19', 'NH-32'],
      tollCost: '₹300-500'
    }
  ];

  const localTransport = [
    {
      type: 'City Bus',
      description: 'Regular bus services connecting major city areas',
      fare: '₹5-15',
      availability: '6:00 AM - 10:00 PM',
      routes: ['Main Road', 'Albert Ekka Chowk', 'Doranda', 'Kanke Road']
    },
    {
      type: 'Auto Rickshaw',
      description: 'Three-wheeler shared and private rides',
      fare: '₹10-50',
      availability: '24/7',
      routes: ['Within city limits', 'Short distance travel']
    },
    {
      type: 'Taxi/Cab',
      description: 'Private taxi services and app-based cabs',
      fare: '₹80-150',
      availability: '24/7',
      routes: ['City to airport', 'Intercity travel', 'Tourist destinations']
    },
    {
      type: 'Rental Cars',
      description: 'Self-drive and chauffeur-driven car rentals',
      fare: '₹1,500-3,000/day',
      availability: 'Advance booking required',
      routes: ['Tourist circuits', 'Long distance travel']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const filteredModes = selectedMode === 'all' ? transportModes : transportModes.filter(mode => mode.id === selectedMode);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transport to Jharkhand
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive guide to reaching and traveling within Jharkhand using various modes of transport
          </p>
        </div>

        {/* Transport Mode Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setSelectedMode('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedMode === 'all'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
            }`}
          >
            All Transport
          </button>
          {transportModes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                selectedMode === mode.id
                  ? `bg-${mode.color}-600 text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {mode.icon}
              <span>{mode.name}</span>
            </button>
          ))}
        </div>

        {/* Transport Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredModes.map(mode => (
            <div key={mode.id} className={`border-2 rounded-2xl p-6 ${getColorClasses(mode.color)}`}>
              <div className="text-center">
                <div className="mb-4">
                  {mode.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{mode.name}</h3>
                <p className="text-sm">{mode.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Air Travel Section */}
        {(selectedMode === 'all' || selectedMode === 'air') && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Plane className="mr-3 h-8 w-8 text-blue-600" />
              Air Travel
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Airport Information</h3>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-blue-900">{airportInfo.name}</h4>
                      <p className="text-blue-700">Code: {airportInfo.code}</p>
                      <div className="flex items-center text-blue-600 mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{airportInfo.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-blue-900 mb-2">Facilities:</h5>
                    <div className="flex flex-wrap gap-2">
                      {airportInfo.facilities.map((facility, index) => (
                        <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Airlines & Routes</h3>
                <div className="space-y-4">
                  {airportInfo.airlines.map((airline, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{airline.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {airline.routes.map((route, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {route}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Distance from Airport</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(airportInfo.distance).map(([destination, distance]) => (
                  <div key={destination} className="bg-gray-50 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-gray-900">{destination}</h4>
                    <p className="text-gray-600">{distance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Railway Section */}
        {(selectedMode === 'all' || selectedMode === 'rail') && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Train className="mr-3 h-8 w-8 text-green-600" />
              Railway Network
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {railwayStations.map((station, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {station.code}
                      </span>
                      <span className="text-gray-600 text-sm">{station.platforms} Platforms</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Facilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {station.facilities.map((facility, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Major Trains:</h4>
                    <div className="space-y-2">
                      {station.majorTrains.map((train, idx) => (
                        <div key={idx} className="bg-green-50 p-3 rounded">
                          <div className="font-medium text-green-900">{train.name}</div>
                          <div className="text-green-700 text-sm">{train.route}</div>
                          <div className="flex items-center text-green-600 text-sm mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {train.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Road Transport Section */}
        {(selectedMode === 'all' || selectedMode === 'road') && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Car className="mr-3 h-8 w-8 text-orange-600" />
              Road Transport
            </h2>
            
            <div className="space-y-6">
              {roadRoutes.map((route, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">From {route.from}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{route.distance}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{route.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <IndianRupee className="h-4 w-4 mr-2" />
                          <span>{route.tollCost}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-700 mb-2">Route:</h4>
                      <p className="text-gray-600 text-sm">{route.route}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Highways:</h4>
                      <div className="flex flex-wrap gap-2">
                        {route.highways.map((highway, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                            {highway}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Local Transport Section */}
        {(selectedMode === 'all' || selectedMode === 'local') && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Bus className="mr-3 h-8 w-8 text-purple-600" />
              Local Transport
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {localTransport.map((transport, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{transport.type}</h3>
                  <p className="text-gray-600 mb-4">{transport.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Fare Range:</span>
                      <span className="text-purple-600 font-semibold">{transport.fare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Availability:</span>
                      <span className="text-gray-600">{transport.availability}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 block mb-2">Routes/Coverage:</span>
                      <div className="flex flex-wrap gap-2">
                        {transport.routes.map((route, idx) => (
                          <span key={idx} className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">
                            {route}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Travel Tips */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Info className="mr-3 h-6 w-6 text-blue-600" />
            Travel Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Time to Travel</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• October to March: Pleasant weather for sightseeing</li>
                <li>• April to June: Hot weather, carry water and sun protection</li>
                <li>• July to September: Monsoon season, roads may be affected</li>
                <li>• Book accommodations in advance during peak season</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Contacts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tourist Helpline: 1363</li>
                <li>• Railway Enquiry: 139</li>
                <li>• Airport Information: +91-651-2491204</li>
                <li>• Emergency Services: 112</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;