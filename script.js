const i18n = {
  ko: {
    brand: "서울외국어대학원대학교 양자컴퓨팅난제연구소",
    menuVision: "비전", menuFocus: "연구분야", menuNews: "소식", menuPeople: "구성원", menuResource: "자료실", menuContact: "문의",
    heroTitle: "실용적 난제에 도전하고, NISQ에서 FTQC로 전환되는 시대에서 <span class='accent'>양자 도약</span>을 이끕니다",
    heroSubtitle: "우리는 과학·공학·데이터의 경계를 넘나드는 연구를 통하여 <br class='br-md' />사회에 실질적인 임팩트를 만드는 것을 목표로 합니다.",
    ctaVision: "연구소 비전 보기", ctaContact: "협력 제안",
    visionTitle: "비전",
    visionText: "“우리는 <strong>근본 원리 탐구</strong>와 <strong>현실 문제 해결</strong>을 동시에 추구하며, 재현 가능한 방법과 개방형 협업으로 학문과 산업의 <strong>프런티어</strong>를 확장한다.”",
    visionP1: "과학적 엄밀성과 실용적 가치의 동시 달성",
    visionP2: "데이터·알고리즘·시스템 관점의 통합",
    visionP3: "개방형 소통과 윤리적 책임",
    focusTitle: "핵심 연구분야",
    focus1Title: "양자·고성능 계산", focus1Body: "양자 알고리즘, 변분 최적화, 대규모 시뮬레이션—기초와 응용을 잇는 계산 프레임워크.",
    focus2Title: "데이터·AI 시스템", focus2Body: "신뢰 가능한 생성형 AI, 연구 및 교육 지원 초지능 자율 에이전트, 설명 가능한 모델과 운영 자동화.",
    focus3Title: "금융·리스크 과학", focus3Body: "포트폴리오 최적화, 파생상품 가격 산정, 차익 거래 기회 포착, 신용 등급 산정 고도화, 이상 거래 감지 연구.",
    focus4Title: "산학 공동 연구", focus4Body: "현장의 난제를 정의하고 솔루션을 공동 설계·실증하는 리빙랩 방식의 협력.",
    newsTitle: "소식", newsEmpty: "아직 등록된 소식이 없습니다. 곧 업데이트됩니다.",
    peopleTitle: "구성원", peopleEmpty: "구성원 정보가 준비 중입니다.",
	resourceTitle: "자료실", resourceEmpty: "자료실 정보가 준비 중입니다.",
    contactTitle: "문의", contactInfo: "공동연구 및 산학협력 문의: <a href='mailto:bgkim@sufs.ac.kr'>bgkim@sufs.ac.kr</a>",
    formName: "성함", formEmail: "이메일", formMessage: "내용", formSend: "보내기",
    rights: "All rights reserved."
  },
  en: {
    brand: "SUFS Institute for Quantum Computing Frontier Challenges",
    menuVision: "Vision", menuFocus: "Focus", menuNews: "News", menuPeople: "People", menuResource: "Resource", menuContact: "Contact",
    heroTitle: "We challenge practical grand problems and drive the <span class='accent'>Quantum Leap</span> in the transitioning era from NISQ to FTQC.",
    heroSubtitle: "We aim to create real impact for society <br class='br-md' />through research spanning science, engineering, and data.",
    ctaVision: "See Our Vision", ctaContact: "Collaborate",
    visionTitle: "Vision",
    visionText: "“We pursue both <strong>fundamental principles</strong> and <strong>real-world solutions</strong>, extending the <strong>frontier</strong> of academia and industry through reproducible methods and open collaboration.”",
    visionP1: "Scientific rigor with practical value",
    visionP2: "Integration of data, algorithms, and systems",
    visionP3: "Open communication and ethical responsibility",
    focusTitle: "Focus Areas",
    focus1Title: "Quantum & High-Performance Computing", focus1Body: "Quantum algorithms, variational optimization, large-scale simulation — bridging theory and application.",
    focus2Title: "Data & AI Systems", focus2Body: "Trustworthy generative AI, autonomous super intelligent agents supporting research and education, explainable models, and operational automation.",
    focus3Title: "Financial & Risk Science", focus3Body: "Portfolio optimization, pricing financial derivatives, capturing arbitrage opportunities, advancing credit rates calculation, monitoring abnormal transactions.",
    focus4Title: "Industry Collaboration", focus4Body: "Defining real-world challenges and co-designing solutions through a living lab approach.",
    newsTitle: "News", newsEmpty: "No news published yet. Updates coming soon.",
    peopleTitle: "People", peopleEmpty: "People information is in preparation.",
	resourceTitle: "Resource", resourceEmpty: "Resource information is in preparation.",
    contactTitle: "Contact", contactInfo: "For collaboration inquiries: <a href='mailto:bgkim@sufs.ac.kr'>bgkim@sufs.ac.kr</a>",
    formName: "Name", formEmail: "Email", formMessage: "Message", formSend: "Send",
    rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

(function initTheme(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const current = saved || (prefersLight ? 'light' : 'dark');
  if (current === 'light') root.setAttribute('data-theme', 'light');
})();

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  applyLang(currentLang);

  const langBtn = document.getElementById('langToggle');
  langBtn?.addEventListener('click', () => {
    applyLang(currentLang === 'ko' ? 'en' : 'ko');
  });

  const toggle = document.getElementById('themeToggle');
  toggle?.addEventListener('click', () => {
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    document.documentElement.setAttribute('data-theme', light ? '' : 'light');
    localStorage.setItem('theme', light ? 'dark' : 'light');
  });

  // Mobile nav
  const btn = document.querySelector('.nav-toggle');
  const list = document.getElementById('navMenu');
  btn?.addEventListener('click', () => {
    const open = list?.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href')?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        list?.classList.remove('open');
      }
    });
  });

  // Demo form handler
  const form = document.querySelector('.contact-form');
  const note = document.getElementById('formNote');
  form?.addEventListener('submit', () => {
    if (!note) return;
    note.textContent = currentLang === 'ko' ? '감사합니다! 담당자가 확인 후 회신 드립니다 (데모).' : 'Thank you! We will respond shortly (demo).';
    setTimeout(() => note.textContent = '', 4000);
  });
});
