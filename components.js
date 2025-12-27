// components.js - 공통 컴포넌트 파일

// 헤더 컴포넌트
const HeaderComponent = `
<header>
  <div class="main-container header-container">
    <div class="logo">
      <a href="index.html">
        <img src="img/logo.jpg" alt="로고">
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="contact.html">회사소개</a></li>
        <li><a href="portfolio.html">공사이력</a></li>
        <li><a href="inquiry.html">공사문의</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

// 푸터 컴포넌트
const FooterComponent = `
<footer>
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-contact">
        <h3>공사문의는 언제든지 전화주세요</h3>
        <div class="phone">031-242-0455 / 010-2356-9987</div>
      </div>
      
      <div class="footer-social">
        <h3>소셜 미디어</h3>
        <div class="footer-social-icons">
          <a href="https://blog.naver.com/artid98" target="_blank" title="블로그">
            <img src="img/icon/blog.png" alt="블로그">
          </a>
          <a href="https://www.instagram.com/art_id_98/" target="_blank" title="인스타그램">
            <img src="img/icon/instar.png" alt="인스타그램">
          </a>
          <a href="https://naver.me/G0DT6m87" target="_blank" title="지도">
            <img src="img/icon/map.png" alt="지도">
          </a>
        </div>
      </div>
      
      <div class="footer-info-text">
        <p>TEL : 031-242-0455</p>
        <p>경기 수원시 장안구 송정로138번길 13 백산빌딩 6층 601호</p>
      </div>
    </div>
    
    <div class="footer-copyright">
      <p>COPYRIGHT &copy; 1998 아트아이디. ALL RIGHTS RESERVED.</p>
    </div>
  </div>
</footer>
`;

// 공통 CSS 스타일
const CommonStyles = `
<style>
  /* 전역 박스 사이징 */
  * { box-sizing: border-box; }

  /* 헤더 스타일 */
  header {
    background-color: #ffffff;
    padding: 20px 0;
  }

  .main-container {
    max-width: 1200px !important;
    margin: 10px auto !important;
    padding: 0 40px !important;
  }

  .header-container {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-wrap: wrap !important;
  }

  .logo img {
    height: 54px;
  }

  nav ul {
    list-style: none !important;
    display: flex !important;
    gap: 60px !important;
    margin: 0 !important;
    padding: 0 !important;
    flex-wrap: wrap !important;
  }

  nav ul li a {
    display: inline-block !important;
    text-decoration: none !important;
    color: #010080 !important;
    font-weight: bold !important;
    font-size: 1.4rem !important;
    transition: transform 0.3s ease !important;
    min-width: 80px !important;
    text-align: center !important;
  }

  nav ul li a:hover {
    transform: scale(1.2);
  }

  /* 푸터 스타일 */
  footer {
    background-color: #1a237e;
    margin-top: 80px;
    padding: 30px 0 20px 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    color: white;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .footer-contact {
    flex: 1;
  }

  .footer-contact h3 {
    margin: 0 0 10px 0;
    font-size: 0.95rem;
    font-weight: normal;
    color: #cccccc;
  }

  .footer-contact .phone {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }

  .footer-info-text {
    flex: 1;
    text-align: right;
  }

  .footer-info-text p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #cccccc;
  }

  .footer-social {
    flex: 1;
    text-align: center;
  }

  .footer-social h3 {
    margin: 0 0 10px 0;
    font-size: 0.95rem;
    font-weight: normal;
    color: #cccccc;
  }

  .footer-social-icons {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .footer-social a {
    display: inline-block;
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }

  .footer-social a img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
  }

  .footer-social a:hover {
    opacity: 0.7;
  }

  .footer-copyright {
    text-align: center;
    padding-top: 15px;
  }

  .footer-copyright p {
    margin: 0;
    font-size: 0.85rem;
    color: #cccccc;
  }

  /* 반응형 스타일 */
  @media (max-width: 1220px) {
    .header-container {
      flex-direction: column !important;
      align-items: center !important;
      gap: 20px !important;
    }

    nav {
      width: 100% !important;
      text-align: center !important;
    }

    nav ul {
      justify-content: center !important;
      gap: 30px !important;
    }
  }

  @media (max-width: 768px) {
    .main-container {
      padding: 0 20px !important;
    }

    .footer-container {
      padding: 0 20px !important;
    }

    nav ul {
      flex-direction: row !important;
      justify-content: center !important;
      gap: 20px !important;
      font-size: 0.9rem !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    nav ul li a {
      font-size: 1.2rem !important;
    }

    .footer-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .footer-contact,
    .footer-info-text,
    .footer-social {
      text-align: center;
    }

    .footer-social-icons {
      justify-content: center;
    }
  }
</style>
`;

// 컴포넌트 로딩 함수
function loadComponents() {
  // 공통 스타일 먼저 로딩 (최고 우선순위)
  const stylePlaceholder = document.getElementById('common-styles');
  if (stylePlaceholder) {
    stylePlaceholder.innerHTML = CommonStyles;
  }

  // 헤더 로딩
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = HeaderComponent;
  }

  // 푸터 로딩
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FooterComponent;
  }

  // CSS 강제 적용
  setTimeout(() => {
    const mainContainers = document.querySelectorAll('.main-container');
    mainContainers.forEach(container => {
      container.style.setProperty('padding', '0 40px', 'important');
      container.style.setProperty('max-width', '1200px', 'important');
      container.style.setProperty('margin', '10px auto', 'important');
    });
  }, 50);
}

// 페이지 로드 시 컴포넌트 로딩
document.addEventListener('DOMContentLoaded', loadComponents);
