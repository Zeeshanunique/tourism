import React, { useState } from 'react';
import { MapPin, Star, Clock, Camera, Filter, Search } from 'lucide-react';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Betla National Park',
      category: 'wildlife',
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg',
      rating: 4.8,
      duration: '1-2 days',
      description: 'Home to tigers, elephants, and over 970 plant species in the heart of Jharkhand.',
      highlights: ['Tiger Safari', 'Elephant Spotting', 'Bird Watching', 'Trekking Trails'],
      location: 'Palamau District',
      bestTime: 'October to April',
      nearbyAttractions: ['Palamau Fort', 'Kamaldah Lake']
    },
    {
      id: 2,
      name: 'Dassam Falls',
      category: 'nature',
      image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg',
      rating: 4.6,
      duration: '4-6 hours',
      description: 'Spectacular waterfall cascading from 144 feet height, known as the Niagara of Jharkhand.',
      highlights: ['Photography', 'Picnicking', 'Nature Walks', 'Rock Climbing'],
      location: 'Taimara Village, Bundu',
      bestTime: 'July to December',
      nearbyAttractions: ['Hirni Falls', 'Hundru Falls']
    },
    {
      id: 3,
      name: 'Jagannath Temple',
      category: 'heritage',
      image: 'https://images.pexels.com/photos/2889696/pexels-photo-2889696.jpeg',
      rating: 4.5,
      duration: '2-3 hours',
      description: 'Replica of the famous Puri Jagannath Temple with intricate architectural details.',
      highlights: ['Architecture', 'Religious Significance', 'Annual Rath Yatra', 'Cultural Programs'],
      location: 'Ranchi',
      bestTime: 'Year Round',
      nearbyAttractions: ['Rock Garden', 'Tagore Hill']
    },
    {
      id: 4,
      name: 'Tribal Heritage Museum',
      category: 'culture',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      rating: 4.4,
      duration: '3-4 hours',
      description: 'Comprehensive showcase of tribal art, culture, and traditions of Jharkhand.',
      highlights: ['Tribal Artifacts', 'Traditional Crafts', 'Cultural Performances', 'Interactive Exhibits'],
      location: 'Ranchi',
      bestTime: 'Year Round',
      nearbyAttractions: ['State Museum', 'Birsa Zoological Park']
    },
    {
      id: 5,
      name: 'Netarhat Hill Station',
      category: 'nature',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      rating: 4.7,
      duration: '2-3 days',
      description: 'Queen of Chotanagpur, offering mesmerizing sunrises and sunsets.',
      highlights: ['Sunrise Point', 'Sunset Point', 'Pine Forests', 'School of Residential Education'],
      location: 'Latehar District',
      bestTime: 'October to March',
      nearbyAttractions: ['Lodh Falls', 'Magnolia Point']
    },
    {
      id: 6,
      name: 'Parasnath Hill',
      category: 'spiritual',
      image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg',
      rating: 4.3,
      duration: '1-2 days',
      description: 'Highest peak in Jharkhand and important Jain pilgrimage site.',
      highlights: ['Jain Temples', 'Trekking', 'Spiritual Retreat', 'Panoramic Views'],
      location: 'Giridih District',
      bestTime: 'October to March',
      nearbyAttractions: ['Madhuban', 'Usri Falls']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', count: destinations.length },
    { id: 'wildlife', name: 'Wildlife', count: destinations.filter(d => d.category === 'wildlife').length },
    { id: 'nature', name: 'Nature', count: destinations.filter(d => d.category === 'nature').length },
    { id: 'heritage', name: 'Heritage', count: destinations.filter(d => d.category === 'heritage').length },
    { id: 'culture', name: 'Culture', count: destinations.filter(d => d.category === 'culture').length },
    { id: 'spiritual', name: 'Spiritual', count: destinations.filter(d => d.category === 'spiritual').length }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Jharkhand's Treasures
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From pristine national parks to ancient temples, explore the diverse landscapes and rich heritage of Jharkhand
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg mb-12 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <MapPin className="mr-2 h-6 w-6 text-green-600" />
            Interactive Destination Map
          </h2>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-green-300">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-semibold">Interactive Map Integration</p>
              <p className="text-gray-500">Click on markers to explore destinations and nearby attractions</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {destination.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{destination.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Best Time: {destination.bestTime}</p>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-lg transition-colors">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;