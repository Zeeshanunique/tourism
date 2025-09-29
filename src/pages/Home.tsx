import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Camera, Calendar, Users, Star, Sparkles } from 'lucide-react';

const Home = () => {
  const [preferences, setPreferences] = useState({
    interests: '',
    duration: '',
    budget: '',
    travelStyle: ''
  });

  const handlePreferenceChange = (key: string, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const featuredDestinations = [
    {
      name: 'Betla National Park',
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg',
      description: 'Wildlife sanctuary with tigers, elephants, and diverse flora',
      category: 'Wildlife'
    },
    {
      name: 'Dassam Falls',
      image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg',
      description: 'Spectacular 144-feet waterfall surrounded by lush greenery',
      category: 'Nature'
    },
    {
      name: 'Jagannath Temple, Ranchi',
      image: 'https://images.pexels.com/photos/2889696/pexels-photo-2889696.jpeg',
      description: 'Ancient temple showcasing traditional architecture',
      category: 'Heritage'
    },
    {
      name: 'Tribal Culture Villages',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      description: 'Experience authentic tribal lifestyle and traditions',
      category: 'Culture'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Jharkhand surprised me with its natural beauty and rich culture. The AI recommendations were spot-on!'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Amazing wildlife experience at Betla National Park. The booking system made everything seamless.'
    },
    {
      name: 'Anita Singh',
      location: 'Kolkata',
      rating: 5,
      text: 'The cultural villages gave me insights into tribal traditions I never knew existed. Highly recommended!'
    }
  ];

  const generateItinerary = () => {
    // Mock AI recommendation logic
    alert('AI is generating your personalized itinerary based on your preferences! Check your dashboard for recommendations.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Heart of India
            <span className="block text-green-300">Jharkhand Awaits</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience pristine forests, majestic waterfalls, rich tribal culture, and wildlife adventures in India's mineral-rich state
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Destinations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/booking"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* AI Itinerary Recommendation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-purple-600 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AI-Powered Trip Planning</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Let our intelligent system create the perfect itinerary based on your preferences, interests, and travel style
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What interests you most?</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={preferences.interests}
                    onChange={(e) => handlePreferenceChange('interests', e.target.value)}
                  >
                    <option value="">Select your interests</option>
                    <option value="wildlife">Wildlife & Nature</option>
                    <option value="culture">Culture & Heritage</option>
                    <option value="adventure">Adventure & Trekking</option>
                    <option value="spiritual">Spiritual & Religious</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Trip Duration</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={preferences.duration}
                    onChange={(e) => handlePreferenceChange('duration', e.target.value)}
                  >
                    <option value="">Select duration</option>
                    <option value="1-2">1-2 Days</option>
                    <option value="3-5">3-5 Days</option>
                    <option value="6-7">6-7 Days</option>
                    <option value="7+">More than a week</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={preferences.budget}
                    onChange={(e) => handlePreferenceChange('budget', e.target.value)}
                  >
                    <option value="">Select budget</option>
                    <option value="budget">Budget (₹5,000-15,000)</option>
                    <option value="mid">Mid-range (₹15,000-30,000)</option>
                    <option value="luxury">Luxury (₹30,000+)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Style</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={preferences.travelStyle}
                    onChange={(e) => handlePreferenceChange('travelStyle', e.target.value)}
                  >
                    <option value="">Select style</option>
                    <option value="solo">Solo Adventure</option>
                    <option value="couple">Romantic Getaway</option>
                    <option value="family">Family Trip</option>
                    <option value="friends">Friends Group</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={generateItinerary}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center mx-auto transition-all transform hover:scale-105 shadow-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Generate My Perfect Itinerary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the most breathtaking locations that showcase Jharkhand's natural beauty and cultural heritage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link 
                    to="/destinations"
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold">150+</div>
              <div className="text-green-200">Tourist Destinations</div>
            </div>
            <div className="space-y-2">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-green-200">Happy Travelers</div>
            </div>
            <div className="space-y-2">
              <Camera className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold">32</div>
              <div className="text-green-200">Tribal Communities</div>
            </div>
            <div className="space-y-2">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold">365</div>
              <div className="text-green-200">Days of Adventure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Travelers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from visitors who discovered Jharkhand's magic</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Jharkhand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey today and create memories that will last a lifetime in the heart of India
          </p>
          <Link
            to="/booking"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Book Your Adventure Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;