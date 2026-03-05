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
  // jpg와 png 확장자를 모두 지원하는 함수
  getMainImagePath: (title, index, ext = 'jpg') => `img/slides/${title}/${index}.${ext}`,
  getThumbnailImagePath: (title, index, ext = 'jpg') => `img/slides/${title}/thumbnails/${index}.${ext}`,
  // 이미지 확장자 찾기 (jpg 또는 png)
  findImageExtension: async (basePath) => {
    const extensions = ['jpg', 'png'];
    for (const ext of extensions) {
      try {
        const response = await fetch(basePath.replace(/\.[^.]+$/, `.${ext}`), { method: 'HEAD' });
        if (response.ok) return ext;
      } catch (e) {}
    }
    return 'jpg'; // 기본값
  },
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
  {
    category: "사무실",
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
    category: "상가",
    title: "벤틀스페이스 홍대점",
    desc: "크몽 벤틀스페이스 미용실 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("벤틀스페이스 홍대점")
   },
  {
    category: "상가",
    title: "만세감자탕 매봉역",
    desc: "매봉역 만세감자탕 매장 인테리어 작업입니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("만세감자탕 매봉역")
    },
    {
    category: "상가",
    title: "벤틀스페이스 이수점",
    desc: "이수 벤틀스페이스 미용실 인테리어 작업입니다.",
        image: IMAGE_CONFIG.getProjectThumbnailPath("벤틀스페이스 이수점")
    },
  {
    category: "사무실",
    title: "용인 고급멘션단지",
    desc: "용인시 고급맨션단지 공용부 창고 리모델링 프로젝트입니다.\n지하 주차장 인근 유휴 창고 공간을 거주자 편의 시설로 전환하였으며,\n개인 작업 및 인터넷 사용 공간과 그룹 이용이 가능한\n복합 커뮤니티 공간으로 조성하였습니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("용인 고급멘션단지")
  },
  {
    category: "사무실",
    title: "한국메인라인",
    desc: "사무실 리모델링입니다.\nOA 플로어가 없는 조건에서도 케이블 정리 및 배선 계획을 체계화하여 깔끔한 환경을 유지할 수 있도록 고려하였습니다.\n업무로 인한 피로를 완화할 수 있도록,\n자연 소재와 그린 요소를 활용해 편안하고 부드러운 분위기를 연출했습니다.\n천정 조명은 기존 시설물을 그대로 사용한 것으로 천정 매입등 추가하였습니다.\n바닥재(수입자재)는 사용자가 제공하였습니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("한국메인라인")
  }
];

// 카테고리 데이터
const categories = ['모두보기', '상가', '사무실', '주택', '기타'];

// 애니메이션 설정
const ANIMATION_CONFIG = {
  fadeDelay: 0.1,
  fadeInDuration: 300,
  hoverScale: 1.05,
  thumbnailTransition: 300
};