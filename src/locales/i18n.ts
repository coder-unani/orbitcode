import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'locales/en/translation.json';
import ko from 'locales/ko/translation.json';

// 번역 파일을 불러와서 i18n 초기화
const resources: Resource = {
  en: { translation: { ...en } }, // 비구조화 할당으로 간소화
  ko: { translation: { ...ko } },
};

// i18n 초기화
i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
  fallbackLng: 'ko', // 번역 파일에서 찾을 수 없는 경우 기본 언어
  interpolation: {
    escapeValue: false, // 동적인 데이터 값 할당 설정
  },
});

export default i18n;
