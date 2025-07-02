// client/src/section/ProjectSection.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ProjectCard from '../components/ProjectCard.jsx';

// 프로젝트 데이터 예시
// const projects = [
//   { id: 1, thumbnail: '/vplay_thumbnail.jpg', title: 'VPLAY', description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.', tags: ['팀', '메인'], category: 'Team' },
//   { id: 2, thumbnail: '/harmony_thumbnail.jpg', title: '하모니', description: '직장 후원 대상 시스템, 명세한 목표 금액 설정과 기부 성향을 통한 기부 플랫폼입니다.', tags: ['팀', '사이드'], category: 'Team' },
//   { id: 3, thumbnail: '/dealon_thumbnail.jpg', title: '딜온', description: '일반 중고 거래와 경매 기능을 통합하여, 다양한 거래 방식을 플랫폼에서 지원하는 중고 거래 시스템입니다.', tags: ['팀', '메인', '진행중'], category: 'Team' },
//   { id: 4, thumbnail: '/portfolio_thumbnail.jpg', title: '포트폴리오_2025', description: '리액트를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오 사이트입니다.', tags: ['솔로', '사이드'], category: 'Single' },
//   { id: 5, thumbnail: '/naturelica_thumbnail.jpg', title: '네이처리카', description: '워드프레스 기반으로 제작한 웹사이트입니다.', tags: ['솔로', '사이드', '워드프레스'], category: 'Single' },
//   { id: 6, thumbnail: '/portfolio_old_thumbnail.jpg', title: '포트폴리오_2023', description: 'HTML, CSS, jQuery를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오입니다.', tags: ['솔로', '사이드'], category: 'Single' },
// ];

const CloseIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);



// src/section/ProjectSection.jsx
const projects = [
  {
    id: 1,
    thumbnail: '/vplay_thumbnail.jpg',
    title: 'VPLAY',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: 설계 단계부터 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'CORS(Cross-Origin Resource Sharing) 정책을 설정하여, 다른 도메인에서 실행되는 프론트엔드 애플리케이션이 백엔드 API에 안전하게 접근할 수 있도록 허용했습니다.',
          '데이터 처리: 사용자가 문의를 등록하면, MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환하여 사용자가 방금 작성한 글을 바로 확인할 수 있도록 구현했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 약정된 4개월 후에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있다는 자신감을 얻었습니다.'
      }
      // ... (다른 문제 해결 경험이 있다면 여기에 추가) ...
    ],
    notionUrl: '#'
  },
  // --- 다른 프로젝트들도 이 구조에 맞춰서 데이터를 꼭 채워줘야 해! ---
  {
    id: 2,
    thumbnail: '/harmony_thumbnail.jpg',
    title: '하모니',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: 설계 단계부터 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'CORS(Cross-Origin Resource Sharing) 정책을 설정하여, 다른 도메인에서 실행되는 프론트엔드 애플리케이션이 백엔드 API에 안전하게 접근할 수 있도록 허용했습니다.',
          '데이터 처리: 사용자가 문의를 등록하면, MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환하여 사용자가 방금 작성한 글을 바로 확인할 수 있도록 구현했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 약정된 4개월 후에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있다는 자신감을 얻었습니다.'
      }
      // ... (다른 문제 해결 경험이 있다면 여기에 추가) ...
    ],
    notionUrl: '#'
  },
  {
    id: 3,
    thumbnail: '/dealon_thumbnail.jpg',
    title: '딜온',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: 설계 단계부터 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'CORS(Cross-Origin Resource Sharing) 정책을 설정하여, 다른 도메인에서 실행되는 프론트엔드 애플리케이션이 백엔드 API에 안전하게 접근할 수 있도록 허용했습니다.',
          '데이터 처리: 사용자가 문의를 등록하면, MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환하여 사용자가 방금 작성한 글을 바로 확인할 수 있도록 구현했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 약정된 4개월 후에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있다는 자신감을 얻었습니다.'
      }
      // ... (다른 문제 해결 경험이 있다면 여기에 추가) ...
    ],
    notionUrl: '#'
  },
  {
    id: 4,
    thumbnail: '/portfolio_thumbnail.jpg',
    title: '포트폴리오_2025',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: 설계 단계부터 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'CORS(Cross-Origin Resource Sharing) 정책을 설정하여, 다른 도메인에서 실행되는 프론트엔드 애플리케이션이 백엔드 API에 안전하게 접근할 수 있도록 허용했습니다.',
          '데이터 처리: 사용자가 문의를 등록하면, MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환하여 사용자가 방금 작성한 글을 바로 확인할 수 있도록 구현했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 약정된 4개월 후에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있다는 자신감을 얻었습니다.'
      }
      // ... (다른 문제 해결 경험이 있다면 여기에 추가) ...
    ],
    notionUrl: '#'
  },
  {
    id: 5,
    thumbnail: '/naturelica_thumbnail.jpg',
    title: '네이쳐리카',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: 설계 단계부터 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'CORS(Cross-Origin Resource Sharing) 정책을 설정하여, 다른 도메인에서 실행되는 프론트엔드 애플리케이션이 백엔드 API에 안전하게 접근할 수 있도록 허용했습니다.',
          '데이터 처리: 사용자가 문의를 등록하면, MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환하여 사용자가 방금 작성한 글을 바로 확인할 수 있도록 구현했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 약정된 4개월 후에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있다는 자신감을 얻었습니다.'
      }
      // ... (다른 문제 해결 경험이 있다면 여기에 추가) ...
    ],
    notionUrl: '#'
  },
  {
    id: 6,
    thumbnail: '/portfolio_old_thumbnail.jpg',
    title: '포트폴리오_2023',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'Ajax 비동기 통신: 페이지 전체가 새로고침되지 않고 해당 부분만 동적으로 변경되도록 Ajax 통신을 적용했습니다.',
          '데이터 처리: MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환했습니다.'
        ]
      }
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 약정된 4개월 후에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있다는 자신감을 얻었습니다.'
      }
      // ... (다른 문제 해결 경험이 있다면 여기에 추가) ...
    ],
    notionUrl: '#'
  },
];


  useEffect(() => {
    // 필터링 애니메이션 로직
    const allProjects = projects.filter(p => activeFilter === 'All' || p.category === activeFilter);
    setFilteredProjects(allProjects);
  }, [activeFilter]);
  
  useEffect(() => {
    // selectedProject에 데이터가 있으면(모달이 열리면) true
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // body의 스크롤을 막습니다.
    } else {
      document.body.style.overflow = 'unset'; // body의 스크롤을 다시 허용합니다.
    }

    // 컴포넌트가 사라질 때 원래대로 돌려놓는 정리(cleanup) 함수
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filters = ['All', 'Team', 'Single'];

  return (
    <section className="relative z-10 min-h-screen bg-transparent px-8 py-24 sm:px-16 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-brand-dark mb-4">Project</h2>
        
       <div className="inline-flex items-center gap-2 bg-[#F9F9F9]/50 p-[0.6rem] rounded-full mb-8 backdrop-blur-[40px]">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              // 2. 개별 버튼: 패딩(py-2.5 px-[15px]), 폰트, 기본 투명 배경 등
              // 3. activeFilter 상태에 따라 동적으로 스타일 변경
              className={`px-[15px] pt-[0.325rem] pb-[0.425rem] rounded-full font-medium text-brand-dark transition-colors duration-300 ${
                activeFilter === filter 
                ? 'bg-gradient-to-r from-brand-pink to-brand-purple shadow-sm' 
                : 'bg-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            // ▼▼▼▼▼ 각 카드에 index를 전달합니다. ▼▼▼▼▼
            <ProjectCard 
              key={project.id} 
              project={project} 
              onCardClick={() => setSelectedProject(project)} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 보기 모달 */}
         <Modal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        contentLabel="프로젝트 상세"
        // ▼▼▼ overlayClassName, style prop 모두 없는지 확인! ▼▼▼
        closeTimeoutMS={200} // 애니메이션 시간과 맞춰주기
        className="contents" // 모달 내용물은 우리가 직접 꾸밀 것이므로 그대로 둠
      >
        <div className="relative w-[80vw] h-auto flex items-start">
          <div className="w-full max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-y-auto invisible-scrollbar">
            {selectedProject && ( // selectedProject가 있을 때만 렌더링
              <div className="">
                
                {/* 상단 이미지 및 제목 */}
               <div
                  className="w-full text-center text-white pt-20 px-12 pb-12"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${selectedProject.gradient?.from || '#4A5568'}, ${selectedProject.gradient?.to || '#2D3748'})`
                  }}
                >
                  <div className="inline-block w-full max-w-lg h-auto rounded-lg shadow-lg mb-11">
                    <img alt={`${selectedProject.title} 썸네일`} className="w-full h-full object-cover rounded-md" src={selectedProject.thumbnail} />
                  </div>
                  <h2 className="text-[1.625rem] font-bold mb-6 text-white">{selectedProject.title}</h2>
                  <p className="text-base text-white mb-6">{selectedProject.description}</p> {/* text-white로 변경 */}
                  <p className="text-sm font-medium text-white mb-6"> {/* text-white로 변경 */}
                    <span>{selectedProject.period}</span>
                    <span className="ml-2.5">[{selectedProject.headcount}]</span>
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>


                {/* 하단 상세 내용 */}
                <div className="space-y-12 text-left p-12 md:p-16 lg:p-20">
                  <div>
                    <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 border-gray-200 pb-2">주요 역할 (My Role)</h3>
                    {selectedProject.myRole?.map((role, index) => (
                      <div key={index} className="mb-5">
                       <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-[5px] inline-block">
                          {role.subtitle}
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-base text-brand-dark pl-2.5">
                          {role.details?.map((detail, detailIndex) => ( // 안전장치 ?. 추가!
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">기술 스택 (Tech Stack)</h3>
                    
                    {/* 새로운 데이터 구조를 map으로 순회하며 렌더링 */}
                    {selectedProject.techStack?.map((stack, index) => (
                      <div key={index} className="mb-5"> {/* 카테고리+툴을 감싸는 div */}
                        
                        {/* 카테고리(소제목) <h4> */}
                      <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-[5px] inline-block">
                          {stack.category}
                        </h4>

                        {/* 사용 툴 <p> - 리스트 스타일 없이 텍스트만 표시 */}
                        <p className="text-base text-brand-dark pl-2.5">
                          {stack.tools}
                        </p>

                      </div>
                    ))}
                  </div>

                   <div>
                    <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">핵심 기능</h3>
                    {selectedProject.keyFeatures?.map((feature, index) => (
                      <div key={index} className="mb-5">
                        <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-4 inline-block">{feature.subtitle}</h4>
                        <p className="text-base text-brand-dark pl-2.5 mb-3">구현 내용: {feature.description}</p>
                        <p className="text-base text-brand-dark pl-2.5 mb-3">기술적 의사결정 및 과정:</p>
                        <ul className="list-disc list-inside space-y-1 text-base text-brand-dark pl-2.5">
                          {feature.process?.map((item, itemIndex) => ( <li key={itemIndex}>{item}</li> ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">문제 해결 경험</h3>
                    
                    {selectedProject.problemSolving?.map((item, index) => (
                      <div key={index} className="mb-5"> {/* 경험 그룹을 감싸는 div */}
                        
                        {/* 경험 소제목 <h4> */}
                        <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-4 inline-block">
                          {item.subtitle}
                        </h4>

                        {/* 문제 상황 <p> */}
                        <p className="text-base text-brand-dark pl-2.5 mb-3">
                          <strong className="font-semibold">문제 상황:</strong> {item.problem}
                        </p>

                        {/* 해결 과정 <ol> */}
                        <div>
                          <p className="text-base text-brand-dark pl-2.5 mb-2 font-semibold">해결 과정:</p>
                          <ol className="list-lower-alpha list-inside space-y-1 text-base text-brand-dark pl-2.5 mb-3">
                            {item.solution?.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ol>
                        </div>

                        {/* 배운 점 <p> */}
                        <p className="text-base text-brand-dark pl-2.5">
                          <strong className="font-semibold">배운 점:</strong> {item.learned}
                        </p>

                      </div>
                    ))}
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-gray-800 mb-4 border-gray-200 pb-2">더 자세한 개발 과정이 궁금하다면?</h3>
                     <div className="flex gap-4">
                       <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository ↗</a>
                       <a href={selectedProject.notionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">기획/설계 문서 보기 (Notion) ↗</a>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute top-6 -right-16 flex flex-col items-center gap-4">
            <button onClick={() => setSelectedProject(null)} className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-800 transition-colors">
              <CloseIcon />
            </button>
            <a href={selectedProject?.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-800 transition-colors">
              <GithubIcon />
            </a>
            <a href={selectedProject?.deployUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-800 transition-colors">
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ProjectSection;