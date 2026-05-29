import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/911234567890"
    className="floating-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp />
  </a>
);

export default FloatingWhatsApp;
