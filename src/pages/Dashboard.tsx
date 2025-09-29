import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { MapPin, Calendar, Camera, Heart, Star, TrendingUp, Award, Clock } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - in a real app, this would come from your backend
  const userStats = {
    placesVisited: 8,
    photosUploaded: 24,
    reviewsWritten: 6,
    totalDistance: 1250,
    favoriteDestinations: 12,
    travelDays: 15
  };

  const visitedPlaces = [
    {
      id: 1,
      name: 'Betla National Park',
      date: '2024-01-15',
      rating: 5,
      photos: 8,
      review: 'Amazing wildlife experience! Saw tigers and elephants.',
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg'
    },
    {
      id: 2,
      name: 'Dassam Falls',
      date: '2024-01-20',
      rating: 4,
      photos: 12,
      review: 'Beautiful waterfall, perfect for photography.',
      image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg'
    },
    {
      id: 3,
      name: 'Jagannath Temple',
      date: '2024-02-05',
      rating: 5,
      photos: 4,
      review: 'Peaceful and spiritually enriching experience.',
      image: 'https://images.pexels.com/photos/2889696/pexels-photo-2889696.jpeg'
    }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Netarhat Hill Station',
      reason: 'Based on your love for nature photography',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      category: 'Nature',
      rating: 4.7
    },
    {
      id: 2,
      name: 'Parasnath Hill',
      reason: 'Perfect for your spiritual journey interests',
      image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg',
      category: 'Spiritual',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Tribal Heritage Museum',
      reason: 'Matches your cultural exploration preferences',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      category: 'Culture',
      rating: 4.4
    }
  ];

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Netarhat Hill Station',
      date: '2024-03-15',
      duration: '3 days',
      status: 'Confirmed',
      bookingId: 'JH2024001'
    },
    {
      id: 2,
      destination: 'Hazaribagh Wildlife Sanctuary',
      date: '2024-04-10',
      duration: '2 days',
      status: 'Pending',
      bookingId: 'JH2024002'
    }
  ];

  const photoGallery = [
    { id: 1, src: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg', location: 'Betla National Park', likes: 15 },
    { id: 2, src: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg', location: 'Dassam Falls', likes: 23 },
    { id: 3, src: 'https://images.pexels.com/photos/2889696/pexels-photo-2889696.jpeg', location: 'Jagannath Temple', likes: 18 },
    { id: 4, src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', location: 'Cultural Village', likes: 12 },
    { id: 5, src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg', location: 'Hill Station', likes: 27 },
    { id: 6, src: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg', location: 'Mountain View', likes: 19 }
  ];

  const achievements = [
    { id: 1, title: 'Wildlife Explorer', description: 'Visited 3 national parks', icon: '🦁', earned: true },
    { id: 2, title: 'Culture Enthusiast', description: 'Explored 5 cultural sites', icon: '🎭', earned: true },
    { id: 3, title: 'Photography Master', description: 'Uploaded 20+ photos', icon: '📸', earned: true },
    { id: 4, title: 'Adventure Seeker', description: 'Completed 2 trekking trails', icon: '🏔️', earned: false },
    { id: 5, title: 'Heritage Guardian', description: 'Visited 10 heritage sites', icon: '🏛️', earned: false },
    { id: 6, title: 'Local Expert', description: 'Wrote 10+ reviews', icon: '⭐', earned: false }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'visited', name: 'Visited Places', icon: <MapPin className="h-5 w-5" /> },
    { id: 'upcoming', name: 'Upcoming Trips', icon: <Calendar className="h-5 w-5" /> },
    { id: 'photos', name: 'Photo Gallery', icon: <Camera className="h-5 w-5" /> },
    { id: 'recommendations', name: 'For You', icon: <Heart className="h-5 w-5" /> },
    { id: 'achievements', name: 'Achievements', icon: <Award className="h-5 w-5" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">{userStats.placesVisited}</div>
                <div className="text-blue-700 text-sm">Places Visited</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Camera className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-900">{userStats.photosUploaded}</div>
                <div className="text-green-700 text-sm">Photos Uploaded</div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-900">{userStats.reviewsWritten}</div>
                <div className="text-yellow-700 text-sm">Reviews Written</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-900">{userStats.totalDistance}</div>
                <div className="text-purple-700 text-sm">KM Traveled</div>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-900">{userStats.favoriteDestinations}</div>
                <div className="text-red-700 text-sm">Favorites</div>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6 text-center">
                <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-indigo-900">{userStats.travelDays}</div>
                <div className="text-indigo-700 text-sm">Travel Days</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {visitedPlaces.slice(0, 3).map(place => (
                  <div key={place.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img src={place.image} alt={place.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{place.name}</h4>
                      <p className="text-gray-600 text-sm">{place.date}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(place.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'visited':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitedPlaces.map(place => (
              <div key={place.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 text-sm">{place.date}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-4">
                      {[...Array(place.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Camera className="h-4 w-4 mr-1" />
                      <span className="text-sm">{place.photos} photos</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{place.review}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'upcoming':
        return (
          <div className="space-y-6">
            {upcomingTrips.map(trip => (
              <div key={trip.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{trip.destination}</h3>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{trip.date} • {trip.duration}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    trip.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {trip.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Booking ID: {trip.bookingId}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'photos':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoGallery.map(photo => (
              <div key={photo.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={photo.src} alt={photo.location} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">{photo.location}</h4>
                    <div className="flex items-center text-red-500">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">{photo.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'recommendations':
        return (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Recommended for You</h3>
              <p className="text-gray-600">Based on your travel history and preferences</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map(rec => (
                <div key={rec.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img src={rec.image} alt={rec.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{rec.name}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{rec.category}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-gray-600 text-sm">{rec.rating}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{rec.reason}</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Explore Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Achievements</h3>
              <p className="text-gray-600">Unlock badges by exploring Jharkhand</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map(achievement => (
                <div key={achievement.id} className={`rounded-2xl p-6 border-2 ${
                  achievement.earned 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-center">
                    <div className={`text-4xl mb-3 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className={`text-lg font-bold mb-2 ${
                      achievement.earned ? 'text-green-900' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      achievement.earned ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && (
                      <div className="mt-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Earned
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your dashboard</h2>
          <p className="text-gray-600">Sign in to track your travels and get personalized recommendations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">Track your Jharkhand adventures and discover new destinations</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
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

export default Dashboard;