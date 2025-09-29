import React, { useState } from 'react';
import { Calendar, Users, MapPin, CreditCard, Clock, CheckCircle, Package, Car } from 'lucide-react';

const Booking = () => {
  const [activeTab, setActiveTab] = useState('hotels');
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    type: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    preferences: [],
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const tourPackages = [
    {
      id: 1,
      name: 'Jharkhand Wildlife Explorer',
      duration: '5 days / 4 nights',
      price: 15000,
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg',
      destinations: ['Betla National Park', 'Hazaribagh Wildlife Sanctuary', 'Palamau Tiger Reserve'],
      highlights: ['Tiger Safari', 'Elephant Spotting', 'Bird Watching', 'Nature Photography'],
      includes: ['Accommodation', 'Meals', 'Safari Guides', 'Transport']
    },
    {
      id: 2,
      name: 'Cultural Heritage Tour',
      duration: '4 days / 3 nights',
      price: 12000,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      destinations: ['Ranchi', 'Khunti', 'Saraikela', 'Traditional Villages'],
      highlights: ['Tribal Culture', 'Handicraft Workshops', 'Folk Performances', 'Local Cuisine'],
      includes: ['Homestay Experience', 'Cultural Guide', 'Craft Materials', 'All Meals']
    },
    {
      id: 3,
      name: 'Waterfall Adventure Circuit',
      duration: '3 days / 2 nights',
      price: 8500,
      image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg',
      destinations: ['Dassam Falls', 'Hundru Falls', 'Jonha Falls', 'Hirni Falls'],
      highlights: ['Waterfall Photography', 'Trekking', 'Rock Climbing', 'Swimming'],
      includes: ['Adventure Gear', 'Professional Guide', 'Accommodation', 'Transport']
    },
    {
      id: 4,
      name: 'Spiritual Jharkhand',
      duration: '6 days / 5 nights',
      price: 18000,
      image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg',
      destinations: ['Parasnath Hill', 'Rajrappa Temple', 'Jagannath Temple', 'Dewri Temple'],
      highlights: ['Temple Visits', 'Spiritual Retreats', 'Meditation Sessions', 'Religious Ceremonies'],
      includes: ['Spiritual Guide', 'Accommodation', 'Vegetarian Meals', 'Prayer Materials']
    }
  ];

  const activities = [
    {
      id: 1,
      name: 'Tiger Safari at Betla',
      duration: '4 hours',
      price: 2500,
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg',
      description: 'Early morning tiger safari with experienced naturalists',
      includes: ['Safari Vehicle', 'Guide', 'Entry Permits', 'Refreshments']
    },
    {
      id: 2,
      name: 'Tribal Village Experience',
      duration: '6 hours',
      price: 1800,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      description: 'Immersive cultural experience with tribal communities',
      includes: ['Village Guide', 'Lunch', 'Craft Workshop', 'Cultural Show']
    },
    {
      id: 3,
      name: 'Waterfall Trekking',
      duration: '8 hours',
      price: 1500,
      image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg',
      description: 'Guided trek to multiple waterfalls with photography stops',
      includes: ['Trekking Guide', 'Equipment', 'Lunch', 'Transport']
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value
      }
    }));
  };

  const handleNextStep = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  const handleBookingComplete = () => {
    alert('Booking completed successfully! You will receive a confirmation email shortly.');
    setBookingStep(1);
  };

  const tabs = [
    { id: 'hotels', name: 'Hotels & Resorts', icon: <MapPin className="h-5 w-5" /> },
    { id: 'packages', name: 'Tour Packages', icon: <Package className="h-5 w-5" /> },
    { id: 'activities', name: 'Activities', icon: <Clock className="h-5 w-5" /> },
    { id: 'transport', name: 'Transport', icon: <Car className="h-5 w-5" /> }
  ];

  const renderBookingForm = () => {
    switch (bookingStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.rooms}
                  onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={bookingData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
              >
                <option value="">Select Destination</option>
                <option value="ranchi">Ranchi</option>
                <option value="betla">Betla National Park</option>
                <option value="netarhat">Netarhat</option>
                <option value="dassam">Dassam Falls</option>
                <option value="parasnath">Parasnath Hill</option>
              </select>
            </div>
            
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              Continue to Contact Details
            </button>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.contactInfo.name}
                  onChange={(e) => handleContactInfoChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.contactInfo.email}
                  onChange={(e) => handleContactInfoChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={bookingData.contactInfo.phone}
                  onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment & Confirmation</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Booking Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination:</span>
                  <span className="font-semibold capitalize">{bookingData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-semibold">{bookingData.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-semibold">{bookingData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-semibold">{bookingData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rooms:</span>
                  <span className="font-semibold">{bookingData.rooms}</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Information
              </h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleBookingComplete}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Complete Booking
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hotels':
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Stay</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {renderBookingForm()}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Book With Us?</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Best Price Guarantee</h4>
                  <p className="text-blue-700 text-sm">We match any lower price you find elsewhere</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">Free Cancellation</h4>
                  <p className="text-green-700 text-sm">Cancel up to 24 hours before check-in</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">24/7 Support</h4>
                  <p className="text-purple-700 text-sm">Get help anytime during your trip</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'packages':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Packages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tourPackages.map(pkg => (
                <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{pkg.duration}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Destinations:</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.destinations.map((dest, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{dest}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">{highlight}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</span>
                        <span className="text-gray-600 text-sm">/person</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'activities':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Activities & Experiences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {activities.map(activity => (
                <div key={activity.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <img src={activity.image} alt={activity.name} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">₹{activity.price.toLocaleString()}</span>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'transport':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Transport Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">By Air</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Ranchi Airport (Birsa Munda Airport)</li>
                  <li>• Direct flights from major cities</li>
                  <li>• Airport taxi services available</li>
                  <li>• Pre-paid taxi counters</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Book Flight
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">By Train</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Ranchi Railway Station</li>
                  <li>• Dhanbad Junction</li>
                  <li>• Direct trains from Delhi, Mumbai</li>
                  <li>• Railway booking services</li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Book Train
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">By Road</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• State transport buses</li>
                  <li>• Private cab services</li>
                  <li>• Self-drive car rentals</li>
                  <li>• Highway connectivity</li>
                </ul>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Book Cab
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Jharkhand Experience
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Seamless booking for accommodations, tours, activities, and transport across Jharkhand
          </p>
        </div>

        {/* Booking Progress (for hotels tab) */}
        {activeTab === 'hotels' && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= bookingStep 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < bookingStep ? 'bg-blue-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <div className="text-sm text-gray-600">
                Step {bookingStep} of 3: {bookingStep === 1 ? 'Booking Details' : bookingStep === 2 ? 'Contact Information' : 'Payment'}
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Booking;