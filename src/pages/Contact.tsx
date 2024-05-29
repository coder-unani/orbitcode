import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-lockup">
        <div className="modal">
          <div className="information">
            <p>경기도 고양시 일산서구 일현로</p>
            <a href="mailto:info@orbitcode.kr">info@orbitcode.kr</a>
          </div>
          <ul className="options">
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">twitter</a>
            </li>
            <li>
              <a href="mailto:info@orbitcode.kr">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
