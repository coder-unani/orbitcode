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
              <a href="#0" className="facebook disabled">
                facebook
              </a>
            </li>
            <li>
              <a href="#0" className="twitter disabled">
                twitter
              </a>
            </li>
            <li>
              <a href="http://pf.kakao.com/_xkHxlxcG/chat" target="_blank" rel="noreferrer" className="kakao">
                kakao
              </a>
            </li>
            <li>
              <a href="mailto:info@orbitcode.kr" className="email">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
