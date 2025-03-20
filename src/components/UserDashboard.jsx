import { useState } from 'react';
import CountdownTimer from './CountdownTimer';

function UserDashboard() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data - in a real app this would come from an API
  const userBookings = {
    upcoming: [
      {
        id: 'BK-2023-001',
        trip: 'Luxury Lunar Experience',
        destination: 'Lunar Hotel',
        departureDate: '2023-12-15',
        returnDate: '2023-12-22',
        price: 'AED 599,999',
        status: 'Confirmed',
        image: 'https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'BK-2024-003',
        trip: 'Mars Expedition',
        destination: 'Mars Colony',
        departureDate: '2024-03-20',
        returnDate: '2024-04-10',
        price: 'AED 1,299,999',
        status: 'Pending',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      }
    ],
    past: [
      {
        id: 'BK-2023-002',
        trip: 'Orbital Station Escape',
        destination: 'International Space Station',
        departureDate: '2023-08-10',
        returnDate: '2023-08-15',
        price: 'AED 299,999',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      }
    ]
  };

  const renderBookingCards = (bookings) => {
    if (bookings.length === 0) {
      return <p className="no-bookings">No bookings to display.</p>;
    }

    return bookings.map(booking => (
      <div key={booking.id} className="booking-card">
        <div className="booking-image" style={{ backgroundImage: `url(${booking.image})` }}></div>
        <div className="booking-details">
          <h3>{booking.trip}</h3>
          <div className="booking-info">
            <p><strong>Booking ID:</strong> {booking.id}</p>
            <p><strong>Destination:</strong> {booking.destination}</p>
            <p><strong>Departure:</strong> {booking.departureDate}</p>
            <p><strong>Return:</strong> {booking.returnDate}</p>
            <p><strong>Total:</strong> {booking.price}</p>
            <p className={`booking-status status-${booking.status.toLowerCase()}`}>
              {booking.status}
            </p>
          </div>
          
          {booking.status === 'Confirmed' && (
            <div className="countdown-container">
              <p>Your journey begins in:</p>
              <CountdownTimer targetDate={booking.departureDate} />
            </div>
          )}
          
          <div className="booking-actions">
            <button className="view-details-btn">View Details</button>
            {booking.status === 'Pending' && (
              <button className="cancel-btn">Cancel</button>
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h2>My Space Travels</h2>
        
        <div className="dashboard-tabs">
          <button 
            className={activeTab === 'upcoming' ? 'active' : ''}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Trips
          </button>
          <button 
            className={activeTab === 'past' ? 'active' : ''}
            onClick={() => setActiveTab('past')}
          >
            Past Trips
          </button>
        </div>
      </div>
      
      <div className="dashboard-content">
        {activeTab === 'upcoming' && (
          <div className="upcoming-bookings">
            {renderBookingCards(userBookings.upcoming)}
          </div>
        )}
        
        {activeTab === 'past' && (
          <div className="past-bookings">
            {renderBookingCards(userBookings.past)}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
