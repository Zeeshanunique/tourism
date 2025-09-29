import React, { useState } from 'react';
import { Hotel, MapPin, Star, Wifi, Car, UtensilsCrossed, Dumbbell, Phone, Mail, Heart, Filter } from 'lucide-react';

const Hospitality = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const accommodations = [
    {
      id: 1,
      name: 'Forest View Resort Betla',
      type: 'resort',
      location: 'Betla National Park',
      rating: 4.6,
      price: 3500,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      amenities: ['Wifi', 'Restaurant', 'Pool', 'Safari Tours', 'Spa'],
      description: 'Luxury eco-resort offering wildlife safari experiences and panoramic forest views.',
      contact: {
        phone: '+91 9876543210',
        email: 'info@forestviewbetla.com'
      },
      features: ['Wildlife Safari', 'Nature Walks', 'Bird Watching', 'Campfire'],
      rooms: 25
    },
    {
      id: 2,
      name: 'Hotel Capitol Hill',
      type: 'hotel',
      location: 'Ranchi',
      rating: 4.3,
      price: 2800,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      amenities: ['Wifi', 'Restaurant', 'Gym', 'Business Center', 'Room Service'],
      description: 'Modern business hotel in the heart of Ranchi with excellent connectivity.',
      contact: {
        phone: '+91 9876543211',
        email: 'reservations@capitolhill.com'
      },
      features: ['Business Center', 'Conference Halls', 'City Tours', 'Airport Pickup'],
      rooms: 45
    },
    {
      id: 3,
      name: 'Netarhat Tourist Lodge',
      type: 'lodge',
      location: 'Netarhat',
      rating: 4.1,
      price: 1500,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      amenities: ['Restaurant', 'Parking', 'Tour Guide', 'Bonfire'],
      description: 'Government tourist lodge offering affordable accommodation with scenic mountain views.',
      contact: {
        phone: '+91 9876543212',
        email: 'booking@netarhatlodge.gov.in'
      },
      features: ['Sunrise Point', 'Sunset Point', 'Trekking', 'Photography'],
      rooms: 20
    },
    {
      id: 4,
      name: 'Tribal Heritage Resort',
      type: 'resort',
      location: 'Khunti',
      rating: 4.4,
      price: 2200,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      amenities: ['Restaurant', 'Cultural Shows', 'Craft Workshops', 'Village Tours'],
      description: 'Unique resort showcasing tribal culture with authentic accommodation experience.',
      contact: {
        phone: '+91 9876543213',
        email: 'info@tribalheritage.com'
      },
      features: ['Cultural Immersion', 'Handicraft Shopping', 'Folk Dance', 'Traditional Cuisine'],
      rooms: 30
    },
    {
      id: 5,
      name: 'Waterfall View Hotel',
      type: 'hotel',
      location: 'Hundru Falls',
      rating: 4.2,
      price: 1800,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      amenities: ['Restaurant', 'Parking', 'Garden', 'Adventure Sports'],
      description: 'Boutique hotel near Hundru Falls offering adventure activities and natural beauty.',
      contact: {
        phone: '+91 9876543214',
        email: 'stay@waterfallview.com'
      },
      features: ['Waterfall View', 'Rock Climbing', 'River Rafting', 'Photography Tours'],
      rooms: 18
    },
    {
      id: 6,
      name: 'Eco Village Homestay',
      type: 'homestay',
      location: 'Saraikela',
      rating: 4.5,
      price: 1200,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      amenities: ['Home Cooked Meals', 'Village Tours', 'Craft Learning', 'Organic Farm'],
      description: 'Authentic village homestay experience with local family hospitality.',
      contact: {
        phone: '+91 9876543215',
        email: 'host@ecovillagestay.com'
      },
      features: ['Family Stay', 'Local Cuisine', 'Farm Experience', 'Cultural Exchange'],
      rooms: 8
    }
  ];

  const hospitals = [
    {
      name: 'Rajendra Institute of Medical Sciences (RIMS)',
      location: 'Ranchi',
      type: 'Multi-specialty',
      services: ['Emergency', '24/7 Ambulance', 'ICU', 'Trauma Center'],
      contact: {
        phone: '+91 651-2450141',
        emergency: '102'
      }
    },
    {
      name: 'Palamau Medical College Hospital',
      location: 'Daltonganj',
      type: 'Government Hospital',
      services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics'],
      contact: {
        phone: '+91 6562-222222',
        emergency: '108'
      }
    },
    {
      name: 'Tata Main Hospital',
      location: 'Jamshedpur',
      type: 'Corporate Hospital',
      services: ['Multi-specialty', 'Advanced Surgery', 'Diagnostics', 'Preventive Care'],
      contact: {
        phone: '+91 657-2224444',
        emergency: '657-2224455'
      }
    }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'hotel', name: 'Hotels' },
    { id: 'resort', name: 'Resorts' },
    { id: 'lodge', name: 'Lodges' },
    { id: 'homestay', name: 'Homestays' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'Ranchi', name: 'Ranchi' },
    { id: 'Betla National Park', name: 'Betla National Park' },
    { id: 'Netarhat', name: 'Netarhat' },
    { id: 'Khunti', name: 'Khunti' },
    { id: 'Hundru Falls', name: 'Hundru Falls' },
    { id: 'Saraikela', name: 'Saraikela' }
  ];

  const filteredAccommodations = accommodations.filter(acc => {
    const matchesType = selectedType === 'all' || acc.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || acc.location === selectedLocation;
    return matchesType && matchesLocation;
  });

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'restaurant': return <UtensilsCrossed className="h-4 w-4" />;
      case 'gym': return <Dumbbell className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hospitality & Healthcare
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover comfortable accommodations and reliable healthcare facilities across Jharkhand for a safe and pleasant journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Hotel className="mr-3 h-8 w-8 text-blue-600" />
            Accommodations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <div key={accommodation.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">{accommodation.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {accommodation.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{accommodation.name}</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{accommodation.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{accommodation.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                        <div key={index} className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                          {getAmenityIcon(amenity)}
                          <span className="ml-1">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Special Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₹{accommodation.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {accommodation.rooms} rooms available
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>{accommodation.contact.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Book Now
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-lg transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthcare Facilities */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="bg-red-100 p-2 rounded-lg mr-3">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
            Healthcare Facilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{hospital.location}</span>
                </div>
                
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {hospital.type}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.services.map((service, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">General: {hospital.contact.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-2 flex items-center justify-center text-white text-xs">!</span>
                    <span className="text-red-600 font-semibold">Emergency: {hospital.contact.emergency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
            <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Contacts</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold mr-2">108</span>
                <span className="text-red-700">Ambulance</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold mr-2">102</span>
                <span className="text-red-700">Medical Emergency</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold mr-2">100</span>
                <span className="text-red-700">Police</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;