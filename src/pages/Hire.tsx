import React, { useEffect, useRef } from 'react';

const Hire = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const toggleClass = (ref: HTMLInputElement) => {
    if (ref.value !== '') {
      ref.classList.add('has-value');
    } else {
      ref.classList.remove('has-value');
    }
  };

  useEffect(() => {
    nameRef.current?.addEventListener('blur', () => {
      toggleClass(nameRef.current as HTMLInputElement);
    });

    emailRef.current?.addEventListener('blur', () => {
      toggleClass(emailRef.current as HTMLInputElement);
    });
  }, []);

  return (
    <div className="hire">
      <h2>You want us to do</h2>
      <form action="" className="work-request">
        <div className="options">
          <span className="options-a">
            <input type="checkbox" id="opt-1" value="homepage" />
            <label htmlFor="opt-1">
              <i className="ri-check-line"></i>
              <span className="text-en">Homepage</span>
              <span className="text-kr">홈페이지</span>
            </label>
            <input type="checkbox" id="opt-2" value="shoppingmall" />
            <label htmlFor="opt-2">
              <i className="ri-check-line"></i>
              <span className="text-en">Shopping Mall</span>
              <span className="text-kr">쇼핑몰</span>
            </label>
            <input type="checkbox" id="opt-3" value="blog" />
            <label htmlFor="opt-3">
              <i className="ri-check-line"></i>
              <span className="text-en">Blog</span>
              <span className="text-kr">블로그</span>
            </label>
          </span>
          <span className="options-b">
            <input type="checkbox" id="opt-4" value="webdesign" />
            <label htmlFor="opt-4">
              <i className="ri-check-line"></i>
              <span className="text-en">Web Design</span>
              <span className="text-kr">웹 디자인</span>
            </label>
            <input type="checkbox" id="opt-5" value="marketing" />
            <label htmlFor="opt-5">
              <i className="ri-check-line"></i>
              <span className="text-en">Marketing</span>
              <span className="text-kr">마케팅</span>
            </label>
            <label htmlFor="opt-6">
              <i className="ri-check-line"></i>
              <span className="text-en">Maintenance</span>
              <span className="text-kr">유지보수</span>
            </label>
          </span>
        </div>
        <div className="information">
          <div className="name">
            <input type="text" id="name" spellCheck="false" ref={nameRef} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="email">
            <input type="email" id="email" spellCheck="false" ref={emailRef} />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button type="button" className="submit">
          임무 요청하기 🚀
        </button>
      </form>
    </div>
  );
};

export default Hire;
