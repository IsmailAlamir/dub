import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'
import AccommodationList from './components/AccommodationList'

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Top Navigation */}
        <nav className="top-nav">
          <div className="logo">Dubai to the Stars</div>
          <ul className="nav-links">
            <li><Link to="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/booking" className={window.location.pathname === '/booking' ? 'active' : ''}>Trips</Link></li>
            <li><Link to="/pricing" className={window.location.pathname === '/pricing' ? 'active' : ''}>Packages</Link></li>
            <li><Link to="/accommodation" className={window.location.pathname === '/accommodation' ? 'active' : ''}>Accommodation</Link></li>
            <li><Link to="/dashboard" className={window.location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/accommodation" element={<AccommodationList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h3>Dubai to the Stars</h3>
              <p>The Ultimate Space Travel Experience</p>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact Us</h4>
              <p>Dubai Spaceport, UAE</p>
              <p>Email: info@dubaitothestars.com</p>
              <p>Phone: +971 4 123 4567</p>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">IG</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">YT</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Dubai to the Stars. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
