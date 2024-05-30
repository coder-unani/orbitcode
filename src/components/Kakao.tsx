import React, { useEffect, useRef } from 'react';

const Kakao = () => {
  const kakaoRef = useRef<HTMLAnchorElement>(null);

  const chatChannel = () => {
    if ((window as any).Kakao && (window as any).Kakao.Channel) {
      (window as any).Kakao.Channel.chat({
        channelPublicId: '_ZeUTxl',
      });
    } else {
      console.error('Kakao SDK is not loaded');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
    script.integrity = 'sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4';
    script.crossOrigin = 'anonymous';
    script.async = true;
    script.onload = () => {
      const key = 'feed37d0de688950f0b9b495dc137e8f';
      (window as any).Kakao.init(key);
    };
    document.body.appendChild(script);

    kakaoRef.current?.addEventListener('click', (e: Event) => {
      e.preventDefault();
      chatChannel();
    });
    // return () => {
    //   kakaoRef.current?.removeEventListener('click', handleClick);
    // };
  }, []);

  return (
    <div className="modal-kakao">
      {/* <a id="chat-channel-button" href="#" ref={kakaoRef}> */}
      <a id="chat-channel-button" href="http://pf.kakao.com/_xkHxlxcG/chat" target="_blank" rel="noreferrer">
        <img src="assets/kakaotalk-consult.png" alt="카카오톡 채널 채팅하기 버튼" />
      </a>
    </div>
  );
};

export default Kakao;
