import React, { useState } from 'react';
import './css/intro.css'

export default function Intro() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="intro-container">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="navbar-links">
          <button className="navbar-logo-button">
            <img src="/static/logo.png" alt="Logo" className="navbar-logo" />
          </button>
          <a href="">
            <button className="navbar-button">Book</button>
          </a>
          <a href="/my-bookings">
            <button className="navbar-button">My Bookings</button>
          </a>
          <button className="navbar-button">About Us</button>
          <button className="navbar-button">Contact Us</button>
        </div>
        <div className="navbar-login">
          <a href="/login">
            <button className="login-button">Login</button>
          </a>
        </div>
      </nav>

      

      {/* Tabs Section */}
      <div className="tabs-container">
        <div className="tabs-content">
          <ul className="tabs-list">
            <li
              onClick={() => setOpenTab(1)}
              className={`tab-item ${openTab === 1 ? "active" : ""}`}
            >
              <a href="#" className="tab-link">
                Book a flight
              </a>
              {openTab === 1 && <div className="tab-indicator"></div>}
            </li>
            <li
              onClick={() => setOpenTab(2)}
              className={`tab-item ${openTab === 2 ? "active" : ""}`}
            >
              <a href="#" className="tab-link">
                Round Trip
              </a>
              {openTab === 2 && <div className="tab-indicator"></div>}
            </li>
            <li
              onClick={() => setOpenTab(3)}
              className={`tab-item ${openTab === 3 ? "active" : ""}`}
            >
              <a href="#" className="tab-link">
                Flight status
              </a>
              {openTab === 3 && <div className="tab-indicator"></div>}
            </li>
          </ul>
          <div className="tabs-forms">
            {/* Book a flight Form */}
            <form action="/book_a_flight" method="post">
              {openTab === 1 && (
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="from">From:</label>
                      <select id="from" name="from" className="form-input" required defaultValue="">
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="COK">Cochin International Airport (COK)</option>
                        <option value="CCJ">Calicut International Airport (CCJ)</option>
                        <option value="TRV">Trivandrum International Airport (TRV)</option>
                        <option value="CNN">Kannur International Airport (CNN)</option>
                        <option value="MAA">Chennai International Airport (MAA)</option>
                        <option value="BOM">
                          Chhatrapati Shivaji Maharaj International Airport (BOM)
                        </option>
                        <option value="BLR">Kempegowda International Airport (BLR)</option>
                        <option value="SHJ">Sharjah International Airport (SHJ)</option>
                        <option value="DXB">Dubai International Airport (DXB)</option>
                        <option value="AUH">Abu Dhabi International Airport (AUH)</option>
                        <option value="DOH">Hamad International Airport (DOH)</option>
                        <option value="BAH">Bahrain International Airport (BAH)</option>
                        <option value="LHR">London Heathrow Airport (LHR)</option>
                        <option value="JFK">John F. Kennedy International Airport (JFK)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="to">To:</label>
                      <select id="to" name="to" className="form-input" required defaultValue="">
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="COK">Cochin International Airport (COK)</option>
                        <option value="CCJ">Calicut International Airport (CCJ)</option>
                        <option value="TRV">Trivandrum International Airport (TRV)</option>
                        <option value="CNN">Kannur International Airport (CNN)</option>
                        <option value="MAA">Chennai International Airport (MAA)</option>
                        <option value="BOM">
                          Chhatrapati Shivaji Maharaj International Airport (BOM)
                        </option>
                        <option value="BLR">Kempegowda International Airport (BLR)</option>
                        <option value="SHJ">Sharjah International Airport (SHJ)</option>
                        <option value="DXB">Dubai International Airport (DXB)</option>
                        <option value="AUH">Abu Dhabi International Airport (AUH)</option>
                        <option value="DOH">Hamad International Airport (DOH)</option>
                        <option value="BAH">Bahrain International Airport (BAH)</option>
                        <option value="LHR">London Heathrow Airport (LHR)</option>
                        <option value="JFK">John F. Kennedy International Airport (JFK)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="departure">Departure:</label>
                      <input
                        type="date"
                        id="departure"
                        className="form-input"
                        placeholder="Select a date"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passenger">Passengers/Class:</label>
                      <select
                        id="passenger"
                        name="passenger"
                        className="form-input"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select class
                        </option>
                        <option value="Economy">Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-center">
                    <button className="form-button" type="submit">
                      Search flights
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Round Trip Form */}
            <form action="/round-trip" method="post">
              {openTab === 2 && (
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="from-round">From:</label>
                      <select id="from-round" name="from" className="form-input small-input" required defaultValue="">
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="COK">Cochin International Airport (COK)</option>
                        <option value="CCJ">Calicut International Airport (CCJ)</option>
                        <option value="TRV">Trivandrum International Airport (TRV)</option>
                        <option value="CNN">Kannur International Airport (CNN)</option>
                        <option value="MAA">Chennai International Airport (MAA)</option>
                        <option value="BOM">
                          Chhatrapati Shivaji Maharaj International Airport (BOM)
                        </option>
                        <option value="BLR">Kempegowda International Airport (BLR)</option>
                        <option value="SHJ">Sharjah International Airport (SHJ)</option>
                        <option value="DXB">Dubai International Airport (DXB)</option>
                        <option value="AUH">Abu Dhabi International Airport (AUH)</option>
                        <option value="DOH">Hamad International Airport (DOH)</option>
                        <option value="BAH">Bahrain International Airport (BAH)</option>
                        <option value="LHR">London Heathrow Airport (LHR)</option>
                        <option value="JFK">John F. Kennedy International Airport (JFK)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="to-round">To:</label>
                      <select id="to-round" name="to" className="form-input small-input" required defaultValue="">
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="COK">Cochin International Airport (COK)</option>
                        <option value="CCJ">Calicut International Airport (CCJ)</option>
                        <option value="TRV">Trivandrum International Airport (TRV)</option>
                        <option value="CNN">Kannur International Airport (CNN)</option>
                        <option value="MAA">Chennai International Airport (MAA)</option>
                        <option value="BOM">
                          Chhatrapati Shivaji Maharaj International Airport (BOM)
                        </option>
                        <option value="BLR">Kempegowda International Airport (BLR)</option>
                        <option value="SHJ">Sharjah International Airport (SHJ)</option>
                        <option value="DXB">Dubai International Airport (DXB)</option>
                        <option value="AUH">Abu Dhabi International Airport (AUH)</option>
                        <option value="DOH">Hamad International Airport (DOH)</option>
                        <option value="BAH">Bahrain International Airport (BAH)</option>
                        <option value="LHR">London Heathrow Airport (LHR)</option>
                        <option value="JFK">John F. Kennedy International Airport (JFK)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="departure-round">Departure:</label>
                      <input
                        type="date"
                        id="departure-round"
                        className="form-input small-input"
                        placeholder="Select a date"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="return">Return:</label>
                      <input
                        type="date"
                        id="return"
                        className="form-input small-input"
                        placeholder="Select a date"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passenger-round">Passengers/Class:</label>
                      <select
                        id="passenger-round"
                        name="passenger"
                        className="form-input"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select class
                        </option>
                        <option value="Economy">Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-center">
                    <button className="form-button" type="submit">
                      Search flights
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Flight Status Form */}
            <form action="/flight_status" method="post">
              {openTab === 3 && (
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="from-status">From:</label>
                      <select id="from-status" name="from" className="form-input" defaultValue="">
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="COK">Cochin International Airport (COK)</option>
                        <option value="CCJ">Calicut International Airport (CCJ)</option>
                        <option value="TRV">Trivandrum International Airport (TRV)</option>
                        <option value="CNN">Kannur International Airport (CNN)</option>
                        <option value="MAA">Chennai International Airport (MAA)</option>
                        <option value="BOM">Chhatrapati Shivaji Maharaj International Airport (BOM)</option>
                        <option value="BLR">Kempegowda International Airport (BLR)</option>
                        <option value="SHJ">Sharjah International Airport (SHJ)</option>
                        <option value="DXB">Dubai International Airport (DXB)</option>
                        <option value="AUH">Abu Dhabi International Airport (AUH)</option>
                        <option value="DOH">Hamad International Airport (DOH)</option>
                        <option value="BAH">Bahrain International Airport (BAH)</option>
                        <option value="LHR">London Heathrow Airport (LHR)</option>
                        <option value="JFK">John F. Kennedy International Airport (JFK)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="to-status">To:</label>
                      <select id="to-status" name="to" className="form-input" defaultValue="">
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="COK">Cochin International Airport (COK)</option>
                        <option value="CCJ">Calicut International Airport (CCJ)</option>
                        <option value="TRV">Trivandrum International Airport (TRV)</option>
                        <option value="CNN">Kannur International Airport (CNN)</option>
                        <option value="MAA">Chennai International Airport (MAA)</option>
                        <option value="BOM">Chhatrapati Shivaji Maharaj International Airport (BOM)</option>
                        <option value="BLR">Kempegowda International Airport (BLR)</option>
                        <option value="SHJ">Sharjah International Airport (SHJ)</option>
                        <option value="DXB">Dubai International Airport (DXB)</option>
                        <option value="AUH">Abu Dhabi International Airport (AUH)</option>
                        <option value="DOH">Hamad International Airport (DOH)</option>
                        <option value="BAH">Bahrain International Airport (BAH)</option>
                        <option value="LHR">London Heathrow Airport (LHR)</option>
                        <option value="JFK">John F. Kennedy International Airport (JFK)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date-status">Date:</label>
                      <input
                        type="date"
                        name="date"
                        id="date-status"
                        className="form-input"
                        placeholder="Select a date"
                      />
                    </div>
                  </div>
                  <div className="form-center">
                    <button className="form-button" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
