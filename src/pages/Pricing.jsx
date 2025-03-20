import { useState } from 'react';

function Pricing() {
  const [pricingType, setPricingType] = useState('packages');

  const packages = [
    {
      id: 1,
      title: 'Orbital Explorer',
      description: 'Perfect for first-time space travelers looking for a taste of zero gravity',
      price: 'AED 199,999',
      features: [
        '2-day orbital journey',
        'Basic accommodation in shared pod',
        'Earth observation session',
        'Zero gravity experience',
        'Space photography session',
        'Basic meal package'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'Lunar Voyager',
      description: 'Our most popular package with the perfect balance of luxury and adventure',
      price: 'AED 599,999',
      features: [
        '7-day lunar journey',
        'Private luxury cabin',
        'Lunar surface excursion (4 hours)',
        'Zero gravity spa treatment',
        'Gourmet dining experience',
        'Lunar photography session',
        'Exclusive Earth-rise viewing',
        'Personalized space suit souvenir'
      ],
      popular: true
    },
    {
      id: 3,
      title: 'Martian Pioneer',
      description: 'For the adventurous souls ready to make history on the red planet',
      price: 'AED 1,299,999',
      features: [
        '21-day Mars expedition',
        'Premium dome accommodation',
        'Multiple Mars surface excursions',
        'Mars rover driving experience',
        'Scientific research participation',
        'Phobos and Deimos observation',
        'VIP dining package with Mars-grown ingredients',
        'Terraforming project contribution',
        'Exclusive Mars rock souvenir'
      ],
      popular: false
    }
  ];

  const classOptions = [
    {
      id: 1,
      name: 'Economy Shuttle',
      description: 'Comfortable and practical space travel',
      basePrice: 'AED 150,000',
      features: [
        'Shared cabin space',
        'Standard space meals',
        'Basic entertainment system',
        'Shared viewing port',
        'Standard space suit'
      ]
    },
    {
      id: 2,
      name: 'Business Class',
      description: 'Enhanced comfort with additional amenities',
      basePrice: 'AED 350,000',
      features: [
        'Semi-private cabin',
        'Premium meal options',
        'Advanced entertainment system',
        'Priority viewing port access',
        'Enhanced space suit',
        'Complimentary space cocktails',
        'Access to business lounge before departure'
      ]
    },
    {
      id: 3,
      name: 'Luxury Cabin',
      description: 'The ultimate luxury space travel experience',
      basePrice: 'AED 750,000',
      features: [
        'Fully private suite',
        'Gourmet dining experience with celebrity chef meals',
        'Personal AI assistant',
        'Private viewing dome',
        'Custom-fitted designer space suit',
        'Private zero-gravity relaxation area',
        'Exclusive VIP lounge access',
        'Personalized itinerary',
        'Complimentary space memorabilia package'
      ]
    }
  ];

  const destinations = [
    {
      id: 1,
      name: 'International Space Station',
      distance: '408 km',
      travelTime: '6 hours',
      baseCost: 'AED 250,000'
    },
    {
      id: 2,
      name: 'Orbital Resort',
      distance: '450 km',
      travelTime: '8 hours',
      baseCost: 'AED 350,000'
    },
    {
      id: 3,
      name: 'Lunar Hotel',
      distance: '384,400 km',
      travelTime: '3 days',
      baseCost: 'AED 550,000'
    },
    {
      id: 4,
      name: 'Lunar Base Alpha',
      distance: '384,400 km',
      travelTime: '3 days',
      baseCost: 'AED 500,000'
    },
    {
      id: 5,
      name: 'Mars Colony',
      distance: '54.6 million km',
      travelTime: '5 months',
      baseCost: 'AED 1,200,000'
    }
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Space Travel Pricing</h1>
        <p>Discover our range of packages and options for your journey to the stars</p>
      </div>

      <div className="pricing-tabs">
        <button 
          className={pricingType === 'packages' ? 'active' : ''} 
          onClick={() => setPricingType('packages')}
        >
          All-Inclusive Packages
        </button>
        <button 
          className={pricingType === 'class' ? 'active' : ''} 
          onClick={() => setPricingType('class')}
        >
          Travel Classes
        </button>
        <button 
          className={pricingType === 'destinations' ? 'active' : ''} 
          onClick={() => setPricingType('destinations')}
        >
          Destinations
        </button>
      </div>
      
      {pricingType === 'packages' && (
        <div className="pricing-packages">
          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{pkg.title}</h3>
                <p className="package-description">{pkg.description}</p>
                <div className="package-price">{pkg.price}</div>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="book-now-btn">Book This Package</button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {pricingType === 'class' && (
        <div className="pricing-classes">
          <div className="classes-grid">
            {classOptions.map(option => (
              <div key={option.id} className="class-card">
                <h3>{option.name}</h3>
                <p className="class-description">{option.description}</p>
                <div className="class-price">Starting from {option.basePrice}</div>
                <ul className="class-features">
                  {option.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="book-now-btn">Select This Class</button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {pricingType === 'destinations' && (
        <div className="pricing-destinations">
          <div className="destinations-table">
            <div className="table-header">
              <div className="destination-cell">Destination</div>
              <div className="distance-cell">Distance</div>
              <div className="travel-time-cell">Travel Time</div>
              <div className="base-cost-cell">Base Cost</div>
              <div className="action-cell"></div>
            </div>
            {destinations.map(destination => (
              <div key={destination.id} className="table-row">
                <div className="destination-cell">{destination.name}</div>
                <div className="distance-cell">{destination.distance}</div>
                <div className="travel-time-cell">{destination.travelTime}</div>
                <div className="base-cost-cell">{destination.baseCost}</div>
                <div className="action-cell">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
          <div className="destinations-note">
            <p>* Base costs shown are for Economy Shuttle class. Upgrade to Business or Luxury for enhanced experience.</p>
            <p>* Travel times may vary based on planetary alignment and spacecraft type.</p>
          </div>
        </div>
      )}
      
      <div className="pricing-footer">
        <h3>Need a Custom Package?</h3>
        <p>Contact our space travel consultants for a personalized journey tailored to your specific requirements.</p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
}

export default Pricing;
