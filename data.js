// 포트폴리오 데이터
const portfolioData = [
  {
    category: "주택",
    title: "파장동 주택공사", 
    desc: "파장동에 위치한 주택 리모델링 프로젝트입니다.",
    image: "shop1.jpg"
  },
  {
    category: "상가",
    title: "논현 주얼리샵",
    desc: "서울 논현에 위치한 프리미엄 주얼리샵 인테리어입니다.",
    image: "shop2.jpg"
  },
  {
    category: "사무실",
    title: "광교세무법인 평택 중앙지점",
    desc: "평택에 위치한 세무법인 사무실 인테리어 작업입니다.",
    image: "gwanggyo_thumb.jpg"
  }
];

// 카테고리 데이터
const categories = ['모두보기', '상가', '사무실', '주택'];

// 이미지 경로 설정
const IMAGE_CONFIG = {
  basePath: 'img/',
  slidesPath: 'img/slides/',
  maxImages: 10,
  formats: ['jpg', 'jpeg', 'png', 'webp']
};

// 애니메이션 설정
const ANIMATION_CONFIG = {
  fadeDelay: 0.1,
  fadeInDuration: 300,
  hoverScale: 1.05,
  thumbnailTransition: 300
};
