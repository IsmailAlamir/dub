import { useState } from 'react';
import BookingForm from '../components/BookingForm';

function Booking() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  
  const availableTrips = [
    {
      id: 1,
      title: 'Luxury Lunar Experience',
      image: 'https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'AED 599,999',
      description: 'Experience the lunar surface in style with our premium package',
      duration: '7 days'
    },
    {
      id: 2,
      title: 'Orbital Station Escape',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'AED 299,999',
      description: 'Spend a weekend orbiting Earth with breathtaking views',
      duration: '3 days'
    },
    {
      id: 3,
      title: 'Mars Expedition',
      image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'AED 1,299,999',
      description: 'Be among the first humans to set foot on the red planet',
      duration: '21 days'
    }
  ];

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Book Your Space Journey</h1>
        <p>Select your trip and complete your reservation</p>
      </div>
      
      {!selectedTrip ? (
        <div className="trip-selection">
          <h2>Select Your Trip</h2>
          <div className="available-trips">
            {availableTrips.map(trip => (
              <div 
                key={trip.id} 
                className="trip-selection-card"
                onClick={() => setSelectedTrip(trip)}
              >
                <div className="trip-selection-image" style={{ backgroundImage: `url(${trip.image})` }}></div>
                <div className="trip-selection-content">
                  <h3>{trip.title}</h3>
                  <p>{trip.description}</p>
                  <div className="trip-selection-details">
                    <span className="trip-duration">{trip.duration}</span>
                    <span className="trip-price">{trip.price}</span>
                  </div>
                  <button className="select-trip-btn">Select This Trip</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="booking-process">
          <div className="selected-trip-summary">
            <h2>Your Selected Trip</h2>
            <div className="selected-trip-card">
              <div className="selected-trip-image" style={{ backgroundImage: `url(${selectedTrip.image})` }}></div>
              <div className="selected-trip-details">
                <h3>{selectedTrip.title}</h3>
                <p>{selectedTrip.description}</p>
                <div className="trip-info">
                  <span className="trip-duration">Duration: {selectedTrip.duration}</span>
                  <span className="trip-price">Price: {selectedTrip.price}</span>
                </div>
                <button 
                  className="change-selection-btn"
                  onClick={() => setSelectedTrip(null)}
                >
                  Change Selection
                </button>
              </div>
            </div>
          </div>
          
          <BookingForm selectedTrip={selectedTrip} />
        </div>
      )}
    </div>
  );
}

export default Booking;
