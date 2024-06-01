import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Hire = () => {
  const { t } = useTranslation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  type Option = {
    en: string;
    ko: string;
  };

  const optionsA: Option[] = t(`hire.options-a`, { returnObjects: true }) as Option[];
  const optionsB: Option[] = t(`hire.options-b`, { returnObjects: true }) as Option[];

  const toggleClass = (ref: HTMLInputElement) => {
    if (ref.value !== '') {
      ref.classList.add('has-value');
    } else {
      ref.classList.remove('has-value');
    }
  };

  // submit 이벤트
  const handleSubmit = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const options: string[] = Array.from(
      document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked'),
    ).map((input) => input.value);

    if (name && email && options.length > 0) {
      console.log(name, email, options);

      // 메일 보내기
    } else {
      alert('Please fill in the form.');
    }
  };

  useEffect(() => {
    nameRef.current?.addEventListener('blur', () => {
      toggleClass(nameRef.current as HTMLInputElement);
    });

    emailRef.current?.addEventListener('blur', () => {
      toggleClass(emailRef.current as HTMLInputElement);
    });

    submitRef.current?.addEventListener('click', handleSubmit);
  }, []);

  return (
    <div className="hire">
      <h2>{t(`hire.title`)}</h2>
      <form action="" className="work-request">
        <div className="options">
          <span className="options-a">
            {optionsA.map((option, index) => (
              <React.Fragment key={index}>
                <input type="checkbox" id={`opt-${index + 1}`} value={option.ko} />
                <label htmlFor={`opt-${index + 1}`}>
                  <i className="ri-check-line"></i>
                  <span className="text-en">{option.en}</span>
                  <span className="text-kr">{option.ko}</span>
                </label>
              </React.Fragment>
            ))}
          </span>
          <span className="options-b">
            {optionsB.map((option, index) => (
              <React.Fragment key={index}>
                <input type="checkbox" id={`opt-${index + 4}`} value={option.ko} />
                <label htmlFor={`opt-${index + 4}`}>
                  <i className="ri-check-line"></i>
                  <span className="text-en">{option.en}</span>
                  <span className="text-kr">{option.ko}</span>
                </label>
              </React.Fragment>
            ))}
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
        <button type="button" className="submit" ref={submitRef}>
          {t(`hire.button`)}
        </button>
      </form>
    </div>
  );
};

export default Hire;
