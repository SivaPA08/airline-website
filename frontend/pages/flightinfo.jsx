import React from "react";

export default function FlightInfo() {
    return (
        <div>
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
        </div>
    )
}