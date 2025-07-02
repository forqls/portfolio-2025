/** @type {import('tailwindcss').Config} */
export default {
  // 바로 이 content 부분이 어떤 파일에서 Tailwind 클래스를 찾을지 알려주는 핵심 설정!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, 
      padding: '2rem', 
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1620px', 
      },
    },
    extend: {
      boxShadow: {
        'glass-card': '0 0 55px rgba(74, 38, 188, 0.25)',
        'glass-soft': '0 0 18px rgba(100, 100, 120, 0.10)',  
      },
      colors: {
        'brand-dark': '#0B0B0B',
        'brand-purple': '#CEC4EF',
        'brand-pink': '#E4B8BF',
        'nav-bg': 'rgba(249, 249, 249, 0.5)', 
        'grad-purple-start': '#8F56CC',
        'grad-purple-end': '#5D4EC4',
        'skills-bg': 'rgba(242, 247, 253, 0.8)', // F2F7FD 색상의 60% 투명도
        'tool-bg': 'rgba(255, 255, 255, 0.8)',   // 흰색의 60% 투명도
        'profile-bg': '#F1F1FD',      // 기존 프로필 카드 배경색
        'tag-bg': '#E9E9F9',         // 기존 해시태그 배경색
        'profile-image-bg': 'rgba(234, 239, 245, 0.1)', // #EAEFF5 투명도 10%
        'profile-border': 'rgba(217, 220, 238, 0.5)',
        'overlay-bg': 'rgba(187, 191, 199, 0.6)',
      },
      backdropBlur: {
        '40px': '40px', // 40px 블러 효과
      },
      fontFamily: {
      'sans': ['Noto Sans KR', 'sans-serif'], 
      'dynapuff': ['DynaPuff', 'sans-serif'], 
    },
    },
  },
  plugins: [],
}