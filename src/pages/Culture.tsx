import React, { useState } from 'react';
import { Palette, Music, Heart, ShoppingBag, Calendar, Users } from 'lucide-react';

const Culture = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const culturalElements = [
    {
      id: 1,
      category: 'handicrafts',
      title: 'Dokra Metal Craft',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      description: 'Ancient lost-wax casting technique creating beautiful brass figurines and decorative items.',
      origin: 'Tribal artisans',
      significance: 'UNESCO recognized traditional craft',
      availability: 'Available at local markets',
      priceRange: '₹500 - ₹5,000'
    },
    {
      id: 2,
      category: 'textiles',
      title: 'Tussar Silk Sarees',
      image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      description: 'Hand-woven golden silk sarees with intricate tribal motifs and natural dyes.',
      origin: 'Bhagalpur region',
      significance: 'Symbol of tribal femininity',
      availability: 'Handloom cooperatives',
      priceRange: '₹3,000 - ₹15,000'
    },
    {
      id: 3,
      category: 'art',
      title: 'Paitkar Paintings',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
      description: 'Traditional scroll paintings depicting mythological stories and tribal folklore.',
      origin: 'Santhal tribe',
      significance: 'Storytelling medium',
      availability: 'Art galleries and museums',
      priceRange: '₹1,000 - ₹8,000'
    },
    {
      id: 4,
      category: 'music',
      title: 'Jhumair Folk Dance',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      description: 'Traditional dance form performed during festivals with rhythmic music and vibrant costumes.',
      origin: 'Tribal communities',
      significance: 'Cultural celebration',
      availability: 'Festival performances',
      priceRange: 'Free cultural shows'
    },
    {
      id: 5,
      category: 'crafts',
      title: 'Bamboo Handicrafts',
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg',
      description: 'Eco-friendly bamboo products including baskets, furniture, and decorative items.',
      origin: 'Forest communities',
      significance: 'Sustainable livelihood',
      availability: 'Rural craft centers',
      priceRange: '₹200 - ₹2,000'
    },
    {
      id: 6,
      category: 'jewelry',
      title: 'Silver Tribal Jewelry',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Handcrafted silver ornaments with traditional designs worn by tribal women.',
      origin: 'Multiple tribes',
      significance: 'Cultural identity marker',
      availability: 'Tribal markets',
      priceRange: '₹1,500 - ₹10,000'
    }
  ];

  const festivals = [
    {
      name: 'Sarhul Festival',
      date: 'March-April',
      description: 'Celebration of nature and new beginnings with Sal tree worship',
      traditions: ['Tree worship', 'Folk dances', 'Traditional music', 'Community feasts']
    },
    {
      name: 'Karma Festival',
      date: 'August-September',
      description: 'Festival dedicated to the Karma tree for prosperity and well-being',
      traditions: ['Karma tree planting', 'Group dancing', 'Singing', 'Ritualistic ceremonies']
    },
    {
      name: 'Sohrai Festival',
      date: 'October-November',
      description: 'Harvest festival celebrating cattle and agricultural prosperity',
      traditions: ['Cattle decoration', 'Wall paintings', 'Folk songs', 'Dance performances']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'handicrafts', name: 'Handicrafts' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'art', name: 'Traditional Art' },
    { id: 'music', name: 'Music & Dance' },
    { id: 'crafts', name: 'Crafts' },
    { id: 'jewelry', name: 'Jewelry' }
  ];

  const filteredElements = selectedCategory === 'all' 
    ? culturalElements 
    : culturalElements.filter(element => element.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cultural Heritage of Jharkhand
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the rich tapestry of tribal traditions, exquisite handicrafts, and vibrant cultural expressions that define Jharkhand's unique identity
          </p>
        </div>

        {/* Cultural Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">32+</div>
            <div className="text-gray-600">Tribal Communities</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600">Art Forms</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Music className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Folk Dances</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Annual Festivals</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cultural Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredElements.map((element) => (
            <div key={element.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={element.image} 
                  alt={element.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {element.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-gray-600 mb-4">{element.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-700">Origin:</span>
                    <span className="text-sm text-gray-600">{element.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-700">Significance:</span>
                    <span className="text-sm text-gray-600">{element.significance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-700">Price Range:</span>
                    <span className="text-sm text-gray-600">{element.priceRange}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Buy Now
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-lg transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Major Festivals Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Major Festivals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-orange-600 mr-2" />
                  <span className="text-orange-600 font-semibold">{festival.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{festival.name}</h3>
                <p className="text-gray-600 mb-4">{festival.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Traditions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {festival.traditions.map((tradition, idx) => (
                      <span key={idx} className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-sm">
                        {tradition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Villages Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Experience Authentic Tribal Villages</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Live Cultural Immersion</h3>
              <p className="text-gray-600 mb-6">
                Stay with tribal families, participate in daily activities, learn traditional crafts, and experience the authentic lifestyle of Jharkhand's indigenous communities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Homestay Programs</h4>
                  <p className="text-sm text-gray-600">2-7 day experiences</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Craft Workshops</h4>
                  <p className="text-sm text-gray-600">Learn traditional skills</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Cultural Shows</h4>
                  <p className="text-sm text-gray-600">Evening performances</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Local Cuisine</h4>
                  <p className="text-sm text-gray-600">Traditional meals</p>
                </div>
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Cultural Experience
              </button>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Cultural Village Experience</p>
                <p className="text-gray-600">Authentic tribal lifestyle immersion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;