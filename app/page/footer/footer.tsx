import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand">
            <p className="footer-name">MGN</p>
            <p className="footer-tagline">Designed & Built with React</p>
            <p className="footer-copy">
              © 2026 Mary Grace Nazareno. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
