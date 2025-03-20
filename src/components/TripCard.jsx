import { useState } from 'react';

function TripCard({ trip }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="trip-card">
      <div 
        className="trip-image" 
        style={{ backgroundImage: `url(${trip.image})` }}
      >
        {trip.featured && <div className="featured-badge">Featured</div>}
      </div>
      
      <div className="trip-content">
        <h3>{trip.title}</h3>
        <p>{trip.description}</p>
        
        <div className="trip-meta">
          <div className="trip-duration">
            <span className="meta-icon">🕒</span> {trip.duration}
          </div>
          <div className="trip-distance">
            <span className="meta-icon">🚀</span> {trip.distance} from Earth
          </div>
        </div>
        
        <div className="trip-price">Starting from {trip.price}</div>
        
        {showDetails && (
          <div className="trip-details">
            <h4>What's Included:</h4>
            <ul>
              {trip.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h4>Departure Dates:</h4>
            <div className="departure-dates">
              {trip.departureDates.map((date, index) => (
                <span key={index} className="departure-date">{date}</span>
              ))}
            </div>
          </div>
        )}
        
        <div className="trip-actions">
          <button 
            className="details-btn" 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
