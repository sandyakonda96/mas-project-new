import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          <strong>Email:</strong> info@masorg.com
        </p>
        <p>
          <strong>Phone:</strong> +91-9645390249
        </p>
        <p>
          <strong>Address:</strong> 123 MAS Street, Hyderabad, Telangana, India
        </p>

        {/* Optional simple contact form */}
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
