import React, { useState } from 'react';
import LockeColePFP from '../Images/LockeColePFP.webp';

function Profile() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('Locke Cole');
  const [email, setEmail] = useState('locke.cole@example.com');
  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleEditToggle = () => {
    if (editMode) {
      setName(tempName);
      setEmail(tempEmail);
    } else {
      setTempName(name);
      setTempEmail(email);
    }
    setEditMode(!editMode);
  };

  return (
    <div className="page">
      <div className="profile-container">
        <div className="profile-header">
          <div />
          <button
            className={`edit-btn${editMode ? ' editing' : ''}`}
            onClick={handleEditToggle}
            aria-label={editMode ? 'Save' : 'Edit'}
          >
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="profile-photo">
          <img
            src={LockeColePFP}
            alt="Locke Cole"
            className="profile-image"
          />
        </div>
        <div className="profile-greeting">
          <h2>Hi, {name.split(' ')[0]}!</h2>
        </div>
        <div className="profile-sections">
          <div className="profile-section">
            <h3 className="section-label">Name</h3>
            {editMode ? (
              <input
                className="section-input"
                type="text"
                value={tempName}
                onChange={e => setTempName(e.target.value)}
                autoFocus
              />
            ) : (
              <p className="section-value">{name}</p>
            )}
          </div>
          <div className="profile-section">
            <h3 className="section-label">Email</h3>
            {editMode ? (
              <input
                className="section-input"
                type="email"
                value={tempEmail}
                onChange={e => setTempEmail(e.target.value)}
              />
            ) : (
              <p className="section-value">{email}</p>
            )}
          </div>
          <div className="profile-section">
            <h3 className="section-label">Push Notifications</h3>
            <div className="setting-item">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={handleNotificationToggle}
                  disabled={editMode}
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