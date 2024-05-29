import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-content">
      <p>© {year}. Orbitcode Co. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
