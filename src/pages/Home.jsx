import { useState } from 'react';
import TripCard from '../components/TripCard';

function Home() {
  const [departureLocation, setDepartureLocation] = useState('Dubai Spaceport');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [seatClass, setSeatClass] = useState('');

  const featuredTrips = [
    {
      id: 1,
      title: 'Luxury Lunar Experience',
      image: 'https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'AED 599,999',
      description: 'Experience the lunar surface in style with our premium package',
      duration: '7 days',
      distance: '384,400 km',
      featured: true,
      includes: [
        'Luxury accommodation at Lunar Hotel',
        'Zero gravity spa treatments',
        'Lunar rover excursions',
        'Earth-rise viewing experience',
        'Gourmet meals by celebrity chefs'
      ],
      departureDates: ['Dec 15, 2023', 'Jan 20, 2024', 'Feb 18, 2024']
    },
    {
      id: 2,
      title: 'Orbital Station Escape',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'AED 299,999',
      description: 'Spend a weekend orbiting Earth with breathtaking views',
      duration: '3 days',
      distance: '408 km',
      featured: false,
      includes: [
        'Private pod accommodation',
        'Space walk with professional guide',
        'Scientific experiments participation',
        'Live Earth photography session',
        'Zero gravity yoga classes'
      ],
      departureDates: ['Nov 10, 2023', 'Dec 5, 2023', 'Jan 15, 2024']
    },
    {
      id: 3,
      title: 'Mars Expedition',
      image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'AED 1,299,999',
      description: 'Be among the first humans to set foot on the red planet',
      duration: '21 days',
      distance: '54.6 million km',
      featured: true,
      includes: [
        'Mars dome luxury accommodation',
        'Red planet surface exploration',
        'Mars rover driving experience',
        'Deimos and Phobos observation',
        'Terraforming participation program'
      ],
      departureDates: ['Mar 20, 2024', 'Sep 15, 2024']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al Falasi',
      quote: 'The zero-gravity experience was beyond my wildest dreams. Dubai to the Stars made everything seamless.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      quote: 'The views of Earth from the orbital suite were life-changing. Worth every dirham!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Mohammed Khan',
      quote: 'Lunar Hotel exceeded all expectations. Dubai to the Stars has redefined luxury travel.',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Searching for trips with:', { departureLocation, destination, departureDate, returnDate, seatClass });
    alert('See available trips matching your criteria');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Journey Beyond Limits</h1>
          <p>Your Ultimate Space Adventure Awaits</p>
          <button className="cta-button">Book Your Trip</button>
        </div>
      </section>

      {/* Quick Booking/Search Panel */}
      <section className="booking-panel">
        <div className="booking-container">
          <div className="booking-input">
            <label>Departure</label>
            <select value={departureLocation} onChange={(e) => setDepartureLocation(e.target.value)}>
              <option value="Dubai Spaceport">Dubai Spaceport</option>
              <option value="Abu Dhabi Launch Facility">Abu Dhabi Launch Facility</option>
            </select>
          </div>
          
          <div className="booking-input">
            <label>Destination</label>
            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">Select Destination</option>
              <option value="Lunar Hotel">Lunar Hotel</option>
              <option value="International Space Station">International Space Station</option>
              <option value="Mars Colony">Mars Colony</option>
              <option value="Orbital Resort">Orbital Resort</option>
            </select>
          </div>
          
          <div className="booking-input">
            <label>Departure Date</label>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </div>
          
          <div className="booking-input">
            <label>Return Date</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </div>
          
          <div className="booking-input">
            <label>Class</label>
            <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)}>
              <option value="">Select Class</option>
              <option value="Luxury Cabin">Luxury Cabin</option>
              <option value="Economy Shuttle">Economy Shuttle</option>
              <option value="VIP Experience">VIP Experience</option>
            </select>
          </div>
          
          <button className="find-trips-btn" onClick={handleSearch}>Find Trips</button>
        </div>
      </section>

      {/* Featured Trips & Experiences */}
      <section className="featured-trips">
        <h2>Explore Our Most Popular Trips</h2>
        <div className="trips-grid">
          {featuredTrips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

      {/* USP & Informative Section */}
      <section className="usp-section">
        <div className="usp-container">
          <div className="usp-item">
            <div className="usp-icon">🚀</div>
            <h3>Exclusive Space Destinations</h3>
            <p>Access to the most luxurious and exclusive destinations in space</p>
          </div>
          <div className="usp-item">
            <div className="usp-icon">🌌</div>
            <h3>Zero-Gravity Experiences</h3>
            <p>Unforgettable zero-gravity activities curated by expert astronauts</p>
          </div>
          <div className="usp-item">
            <div className="usp-icon">🛡️</div>
            <h3>Advanced Safety & Comfort</h3>
            <p>State-of-the-art spacecraft with Dubai's signature luxury and safety</p>
          </div>
        </div>
      </section>

      {/* Testimonials & Social Proof */}
      <section className="testimonials">
        <h2>What Our Travelers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-image" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
