const contentNav = [
  {
    index: 0,
    name: { ko: "홈", en: "Home" },
    path: "/",
  },
  {
    index: 1,
    name: { ko: "웍스", en: "Works" },
    path: "/profile",
  },
  {
    index: 2,
    name: { ko: "어바웃", en: "About" },
    path: "/posts",
  },
  {
    index: 3,
    name: { ko: "컨텍트", en: "Contact" },
    path: "/posts",
  },
  {
    index: 4,
    name: { ko: "고용해주세요", en: "Hire us" },
    path: "/posts",
  },
];

const contentHome = {
  main_title: {
    ko: "리액트 다국어 지원 예제",
    en: "Welcome to the React i18n example",
  },
};

const contentMain = {
  header: {
    title: {
      ko: "오르빗코드",
      en: "ORBITCODE",
    },
    description: {
      ko: "Orbitcode는 제공할 것이 너무 많아서 방향을 지정하도록 요청해야 합니다. 사진을 찍거나 더 큰 화면을 찾기 위한 장치입니다. 실망하지 않을 것입니다.",
      en: "Orbitcode has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.",
    },
    button: {
      text: {
        ko: "고용해주세요",
        en: "Hire Us",
      },
    },
    logo: "",
  },
  banner: {
    main: {
      image: "",
      title: {
        ko: "고객 만족을 최우선으로 하는 비즈니스 솔루션",
        en: "Business solutions that prioritize customer satisfaction",
      },
      button: {
        text: {
          ko: "고용해주세요",
          en: "Hire Us",
        },
      },
    },
  },
  sectionMain: [
    {
      title: { ko: "컨설팅 서비스", en: "Consulting Services" },
      link: "#0",
      description: {
        ko: "전문 컨설턴트들이 고객의 비즈니스 성장을 돕기 위해 맞춤형 전략을 제시합니다. 시장 분석, 경쟁력 평가 및 비즈니스 계획 수립을 통해 최적의 결과를 도출합니다.",
        en: "Professional consultants provide customized strategies to help customers grow their businesses. Market analysis, competitiveness assessment, and business planning are used to achieve optimal outcomes.",
      },
    },
    {
      title: { ko: "IT 솔루션", en: "IT Solutions" },
      link: "#0",
      description: {
        ko: "최신 기술을 활용한 IT 솔루션을 제공합니다. 시스템 통합, 소프트웨어 개발, 데이터 관리 등 다양한 서비스를 통해 효율성을 극대화합니다.",
        en: "Provides IT solutions utilizing the latest technologies, maximizing efficiency through a variety of services such as system integration, software development, and data management.",
      },
    },
    {
      title: { ko: "마케팅 서비스", en: "Marketing Services" },
      link: "#0",
      description: {
        ko: "창의적이고 효과적인 마케팅 전략을 통해 브랜드 가치를 높입니다. 디지털 마케팅, 소셜 미디어 관리, 광고 캠페인 등을 포함한 종합 마케팅 서비스를 제공합니다.",
        en: "Increase brand value through creative and effective marketing strategies. It provides comprehensive marketing services including digital marketing, social media management, and advertising campaigns.",
      },
    },
  ],
  sectionWork: [],
};

export { contentNav, contentMain, contentHome };
