import { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    departureLocation: 'Dubai Spaceport',
    destination: '',
    departureDate: '',
    returnDate: '',
    seatClass: '',
    passengers: 1,
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Here you would typically send the data to an API
    alert('Your space trip has been booked! Check your email for confirmation.');
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Space Adventure</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="departureLocation">Departure Location</label>
            <select 
              id="departureLocation" 
              name="departureLocation" 
              value={formData.departureLocation} 
              onChange={handleChange}
              required
            >
              <option value="Dubai Spaceport">Dubai Spaceport</option>
              <option value="Abu Dhabi Launch Facility">Abu Dhabi Launch Facility</option>
              <option value="Sharjah Space Center">Sharjah Space Center</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <select 
              id="destination" 
              name="destination" 
              value={formData.destination} 
              onChange={handleChange}
              required
            >
              <option value="">Select Destination</option>
              <option value="Lunar Hotel">Lunar Hotel</option>
              <option value="International Space Station">International Space Station</option>
              <option value="Mars Colony">Mars Colony</option>
              <option value="Orbital Resort">Orbital Resort</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="departureDate">Departure Date</label>
            <input 
              type="date" 
              id="departureDate" 
              name="departureDate" 
              value={formData.departureDate} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="returnDate">Return Date</label>
            <input 
              type="date" 
              id="returnDate" 
              name="returnDate" 
              value={formData.returnDate} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="seatClass">Travel Class</label>
            <select 
              id="seatClass" 
              name="seatClass" 
              value={formData.seatClass} 
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Luxury Cabin">Luxury Cabin</option>
              <option value="Economy Shuttle">Economy Shuttle</option>
              <option value="VIP Experience">VIP Experience</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="passengers">Passengers</label>
            <input 
              type="number" 
              id="passengers" 
              name="passengers" 
              min="1" 
              max="10" 
              value={formData.passengers} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="book-now-btn full-width">Complete Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
