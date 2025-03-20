import { useState } from 'react';
import UserDashboard from '../components/UserDashboard';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login - in a real app this would call an API
    console.log('Logging in with:', loginForm);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

return (
    <div className="dashboard-page">
        {!isLoggedIn ? (
            <div className="login-container">
                <div className="login-card">
                    <h2>Sign In to Your Account</h2>
                    <p>Access your space travel bookings and preferences</p>
                    
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={loginForm.email} 
                                onChange={handleLoginChange}
                                placeholder="Enter your email"
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={loginForm.password} 
                                onChange={handleLoginChange}
                                placeholder="Enter your password"
                                required 
                            />
                        </div>
                        
                        <div className="form-actions">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
                        </div>
                        
                        <button type="submit" className="sign-in-btn">Sign In</button>
                    </form>
                    
                    <div className="login-footer">
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="user-dashboard-container">
                <div className="dashboard-top">
                    <h1>Welcome to Your Space Dashboard</h1>
                    <button className="logout-btn" onClick={handleLogout}>Log Out</button>
                </div>
                <UserDashboard />
            </div>
        )}
    </div>
);
}

export default Dashboard;
