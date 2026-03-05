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
    desc: "기존 프랜차이즈 사무실을 전면 철거 없이 재구성한 프로젝트입니다.\n기존 인테리어 요소를 최대한 살리면서도\n완전히 다른 정체성을 가진 공간으로 재탄생시켰습니다.",
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
    desc: "기존 창고 공간을 직원 휴게 및 고객 응대 공간으로 전환한 프로젝트입니다.\n동선과 구획을 새롭게 계획하여 제품이 자연스럽게 전달되는 배치를 구성하고,\n보관하는 공간에서 보여주는 공간으로의 전환이 핵심이었습니다.",
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
    desc: "어린이집을 카페로 리모델링한 프로젝트입니다.\n기존 벽을 철거하고 H빔으로 하중을 해결해 넓은 카운터 공간을 확보하였으며,\n벽돌쌓기 홀 구분, 투명 에폭시 바닥, 루바 마감으로 특색 있는 공간을 완성하였습니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("카페 프롬 2004")
  },
  {
    category: "주택",
    title: "조원주공 2단지 24평형 인테리어",
    desc: "신혼부부를 위한 아파트 리모델링 프로젝트입니다.\n거실 및 작은방 확장으로 공간 활용도를 높이고,\n슬라이딩 붙박이장을 적용하여 실용적이고 깔끔한 생활 공간을 완성하였습니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("조원주공 2단지 24평형 인테리어")
  },
  {
    category: "주택",
    title: "수원시 파장동 단독주택 인테리어",
    desc: "건축 후 30년이 지난 단독주택 2층 건물 리모델링 공사입니다.\n기존 어린이집을 주거시설로 전환하였으며,\n옥상 철계단 공사 및 장마철 누수 방지를 위한 우레탄 방수 공사도 함께 진행하였습니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("수원시 파장동 단독주택 인테리어")
  },
  {
    category: "사무실",
    title: "엘리 프로덕션",
    desc: "4층 건물 전층을 사용하는 창작 사무실입니다.\n천고가 낮은 공간의 한계를 극복하기 위해 오픈형 천장 구조를 선택,\n구조체를 드러내어 실제 높이 이상의 개방감을 연출하였습니다.",
    image: IMAGE_CONFIG.getProjectThumbnailPath("엘리 프로덕션")
  },
  {
    category: "주택",
    title: "주택 캐노피공사",
    desc: "단독주택 전면 처마를 확장하여 캐노피를 설치한 공사입니다.\n폴딩도어·강화도어·방화도어를 설치하고 아스팔트 싱글과 갈바 절곡으로 태풍에 대비하였으며,\n빗물 유도 홈통까지 갖춰 실용성과 내구성을 함께 확보하였습니다.",
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
    desc: "함석 기와로 고즈넉한 분위기와 경제성을 동시에 잡은 매장 인테리어입니다.\n손님 동선과 시야를 고려한 창가 테이블, 칸막이 벽과 수납 가구로 공간을 효율적으로 구성하였으며,\n주방 후드·덕트·호이스트 설치까지 조리 환경도 꼼꼼히 완성하였습니다.",
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