import { useState } from 'react';

function AccommodationList() {
  const [filter, setFilter] = useState('all');
  
  const accommodations = [
    {
      id: 1,
      name: 'Lunar Luxury Suite',
      location: 'Lunar Hotel',
      price: 'AED 75,000 per night',
      image: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'hotel',
      amenities: ['Zero Gravity Pool', 'Earth View Windows', 'Oxygen Enriched Air', 'Personal AI Assistant'],
      rating: 4.9,
      availability: true,
    },
    {
      id: 2,
      name: 'Orbital Pod',
      location: 'International Space Station',
      price: 'AED 45,000 per night',
      image: 'https://images.unsplash.com/photo-1517853407990-abfb321a6e05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'pod',
      amenities: ['180° Earth View', 'Private Quarters', 'Research Lab Access', 'Space Walk Experience'],
      rating: 4.7,
      availability: true,
    },
    {
      id: 3,
      name: 'Mars Habitat Dome',
      location: 'Mars Colony',
      price: 'AED 120,000 per night',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'dome',
      amenities: ['Terraformed Garden', 'Mars Rover Access', 'Radiation Shielding', 'Holographic Entertainment'],
      rating: 4.8,
      availability: false,
    },
    {
      id: 4,
      name: 'Orbital Resort Premium Suite',
      location: 'Orbital Resort',
      price: 'AED 95,000 per night',
      image: 'https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'hotel',
      amenities: ['Private Spa', 'Michelin Star Restaurant', 'Space Yoga', 'VR Gaming Arena'],
      rating: 5.0,
      availability: true,
    }
  ];

  const filteredAccommodations = filter === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.type === filter);

  return (
    <div className="accommodation-container">
      <div className="accommodation-filters">
        <h2>Space Accommodations</h2>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'hotel' ? 'active' : ''} 
            onClick={() => setFilter('hotel')}
          >
            Hotels
          </button>
          <button 
            className={filter === 'pod' ? 'active' : ''} 
            onClick={() => setFilter('pod')}
          >
            Pods
          </button>
          <button 
            className={filter === 'dome' ? 'active' : ''} 
            onClick={() => setFilter('dome')}
          >
            Domes
          </button>
        </div>
      </div>

      <div className="accommodation-grid">
        {filteredAccommodations.map(accommodation => (
          <div key={accommodation.id} className="accommodation-card">
            <div className="accommodation-image" style={{ backgroundImage: `url(${accommodation.image})` }}>
              {!accommodation.availability && <div className="sold-out-badge">Sold Out</div>}
            </div>
            <div className="accommodation-content">
              <div className="accommodation-header">
                <h3>{accommodation.name}</h3>
                <div className="accommodation-rating">
                  <span className="star-icon">★</span>
                  <span>{accommodation.rating}</span>
                </div>
              </div>
              <p className="accommodation-location">{accommodation.location}</p>
              <div className="accommodation-amenities">
                {accommodation.amenities.map((amenity, index) => (
                  <span key={index} className="amenity-tag">{amenity}</span>
                ))}
              </div>
              <div className="accommodation-price">{accommodation.price}</div>
              <button 
                className="book-now-btn"
                disabled={!accommodation.availability}
              >
                {accommodation.availability ? 'Book Now' : 'Sold Out'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccommodationList;
