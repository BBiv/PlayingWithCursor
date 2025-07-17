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
            src="https://via.placeholder.com/120x120?text=👤"
            alt="Profile Photo"
            className="profile-image"
          />
        </div>
        
        <div className="profile-info">
          <h2 className="user-name">John Doe</h2>
          <p className="user-email">john.doe@example.com</p>
        </div>
        
        <div className="profile-settings">
          <div className="setting-item">
            <span className="setting-label">Notifications</span>
            <label className="toggle-switch">            <input
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
  );
}

export default Profile; 