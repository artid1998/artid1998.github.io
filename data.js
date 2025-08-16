// 이미지 경로 설정
const IMAGE_CONFIG = {
  basePath: 'img/',
  slidesPath: 'img/slides/',
  maxImages: 10,
  formats: ['jpg', 'jpeg', 'png', 'webp'],
  // 각 프로젝트 폴더의 표준 구조
  // 폴더명/0.jpg, 1.jpg, ... (메인 이미지들)
  // 폴더명/thumbnails/0.jpg, 1.jpg, ... (썸네일 이미지들)
  // 폴더명/thumbnails/thumb.jpg (대표 썸네일)
  getMainImagePath: (title, index) => `img/slides/${title}/${index}.jpg`,
  getThumbnailImagePath: (title, index) => `img/slides/${title}/thumbnails/${index}.jpg`,
  getProjectThumbnailPath: (title) => `slides/${title}/thumbnails/thumb.jpg`
};

// 포트폴리오 데이터
const portfolioData = [
  {
    category: "사무실",
    title: "광교세무법인 평택 중앙지점",
    desc: "평택에 위치한 세무법인 사무실 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("광교세무법인 평택 중앙지점")
  },
  {
    category: "상가",
    title: "건대 무인카페 밍글",
    desc: "건대에 위치한 무인카페 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("건대 무인카페 밍글")
  },
  /*
  {
    category: "상가",
    title: "베이커리 카페 달꿈",
    desc: "베이커리 카페의 따뜻한 분위기를 살린 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("베이커리 카페 달꿈")
  },
  */
  {
    category: "상가",
    title: "송월타월 대리점 부분공사",
    desc: "송월타월 대리점의 부분 리모델링 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("송월타월 대리점 부분공사")
  },
  {
    category: "상가",
    title: "에클라바치",
    desc: "에클라바치 매장 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("에클라바치")
  },
  {
    category: "상가",
    title: "카페 프롬 2004",
    desc: "카페 프롬 2004 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("카페 프롬 2004")
  },
  {
    category: "주택",
    title: "조원주공 2단지 24평형 인테리어",
    desc: "조원주공 2단지 24평형 아파트 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("조원주공 2단지 24평형 인테리어")
  },
  {
    category: "주택",
    title: "수원시 파장동 단독주택 인테리어",
    desc: "수원시 파장동 단독주택의 전체 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("수원시 파장동 단독주택 인테리어")
  },
  {
    category: "사무실",
    title: "엘리 프로덕션",
    desc: "엘리 프로덕션 사무실 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("엘리 프로덕션")
  },
  {
    category: "주택",
    title: "주택 캐노피공사",
    desc: "주택 캐노피 설치 공사입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("주택 캐노피공사")
  },
  {
    category: "사무실",
    title: "크몽 벤틀스페이스",
    desc: "크몽 벤틀스페이스 사무실 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("크몽 벤틀스페이스")
  }
];

// 카테고리 데이터
const categories = ['모두보기', '상가', '사무실', '주택'];

// 애니메이션 설정
const ANIMATION_CONFIG = {
  fadeDelay: 0.1,
  fadeInDuration: 300,
  hoverScale: 1.05,
  thumbnailTransition: 300
};
