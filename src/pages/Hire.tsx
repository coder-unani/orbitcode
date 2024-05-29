import React from 'react';

const Hire = () => {
  return (
    <div className="hire">
      <h2>You want us to do</h2>
      <form action="" className="work-request">
        <div className="options">
          <span className="options-a">
            <input type="checkbox" id="opt-1" value="homepage" />
            <label htmlFor="opt-1">
              <i className="ri-check-line"></i>
              Homepage
            </label>
            <input type="checkbox" id="opt-2" value="shoppingmall" />
            <label htmlFor="opt-2">
              <i className="ri-check-line"></i>
              Shopping Mall
            </label>
            <input type="checkbox" id="opt-3" value="blog" />
            <label htmlFor="opt-3">
              <i className="ri-check-line"></i>
              Blog
            </label>
          </span>
          <span className="options-b">
            <input type="checkbox" id="opt-4" value="webdesign" />
            <label htmlFor="opt-4">
              <i className="ri-check-line"></i>
              Web Design
            </label>
            <input type="checkbox" id="opt-5" value="ui/ux" />
            <label htmlFor="opt-5">
              <i className="ri-check-line"></i>
              UI / UX
            </label>
            <input type="checkbox" id="opt-6" value="marketing" />
            <label htmlFor="opt-6">
              <i className="ri-check-line"></i>
              Marketing
            </label>
          </span>
        </div>
        <div className="information">
          <div className="name">
            <input type="text" id="name" spellCheck="false" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="email">
            <input type="email" id="email" spellCheck="false" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <input type="submit" value="SEND REQUEST" />
      </form>
    </div>
  );
};

export default Hire;
