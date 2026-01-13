import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand / Message */}
        <div className="footer-section brand">
          <h2>Your Organization</h2>
          <p>
            Building better communities through compassion, collaboration,
            and commitment.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p><FaPhoneAlt /> +91-9645390249</p>
          <p><FaEnvelope /> info@masorg.com</p>
          <p><FaWhatsapp /> WhatsApp Support</p>
        </div>

        {/* Social */}
        <div className="footer-section social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="footer-section cta">
          <h4>Get Involved</h4>
          <button className="donate-btn">Donate Now</button>
          <button className="volunteer-btn">Become a Volunteer</button>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Your Organization. Designed with care.
      </div>
    </footer>
  );
}

export default Footer;
