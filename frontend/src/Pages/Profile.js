import React, { useState } from 'react';

function Profile() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="page">
      <div className="profile-container">
        <div className="profile-photo">
          <img 
            src="https://images.unsplash.com/photo-15070032111690a1dd72282?w=200=200fit=crop&crop=face"
            alt="Locke Cole"
            className="profile-image"
          />
        </div>
        
        <div className="profile-greeting">
          <h2>Locke!</h2>
        </div>
        
        <div className="profile-sections">
          <div className="profile-section">
            <h3 className="section-label">Name</h3>
            <p className="section-value">Locke Cole</p>
          </div>
          
          <div className="profile-section">
            <h3 className="section-label">Email</h3>
            <p className="section-value">locke.cole@example.com</p>
          </div>
          
          <div className="profile-section">
            <h3 className="section-label">Push Notifications</h3>
            <div className="setting-item">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={handleNotificationToggle}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 