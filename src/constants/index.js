export const projects = [
  {
    id: 1,
    thumbnail: '/vplay_thumbnail.jpg',
    title: 'VPLAY',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2025.01 - 2025.03',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' },
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay.git',
    deployUrl: 'https://vplay-production-8d51.up.railway.app/',
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: 'Spring Security 기반 인증/인가 시스템 구현',
        details: [ 'JWT(JSON Web Token)와 Bcrypt 암호화를 적용한 회원가입/로그인 API 개발', '관리자(Admin)와 일반사용자(User) 권한을 분리한 역할 기반 접근 제어(RBAC) 적용' ]
      },
      {
        subtitle: 'RESTful API 설계 및 개발',
        details: [ '제작의뢰문의, 프로젝트 조회 등 핵심 비즈니스 로직 API 구현', 'React 프론트엔드와의 원활한 데이터 통신을 위한 API 명세 작성' ]
      },
      {
        subtitle: 'UI/UX 기획 및 Figma를 활용한 디자인',
        details: [ '사용자 관점의 플로우를 고려한 와이어프레임 및 프로토타입 제작', '개발 효율성 증대를 위한 컴포넌트 기반 디자인 시스템 설계 참여' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, Thymeleaf, jQuery, Summernote, Bootstrap, WaveSurfer.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Infra/Etc',
        tools: 'Cloudflare R2, REST API, Ajax, Kakao/Google OAuth 2.0, JavaMail Sender, Git / GitHub'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'RESTful API 기반의 실시간 제작의뢰 문의 기능',
        description: '사용자들이 크리에이터에게 영상/음악 등의 제작을 의뢰하고 실시간으로 소통할 수 있는 문의 기능을 개발했습니다.',
        process: [
          'REST API 설계: 자원의 상태라는 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 설계했습니다. (예: POST /api/inquiries, GET /api/inquiries/{id}) HTTP Method(GET, POST, PUT, DELETE)를 명확히 사용하여 직관적이고 확장이 용이한 API를 구축했습니다.',
          'Ajax 비동기 통신: 문의를 작성하거나 답변을 달 때, 페이지 전체가 새로고침되지 않고 해당 부분만 동적으로 변경되도록 Ajax 통신을 적용했습니다. 이를 통해 사용자는 끊김 없는 사용자 경험(UX)을 누릴 수 있고, 서버는 불필요한 렌더링 자원을 아낄 수 있었습니다.',
          '데이터 처리: 사용자가 문의를 등록하면, MyBatis를 통해 해당 데이터를 DB에 저장하고, 생성된 문의 ID를 즉시 프론트엔드로 반환하여 사용자가 방금 작성한 글을 바로 확인할 수 있도록 구현했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '클라우드 플랫폼으로 서버 이전 및 배포 오류 해결',
        problem: '학원에서 제공한 Oracle DB는 학원 수료 후 4개월 뒤에 종료될 예정이었습니다. 프로젝트를 계속 운영하기 위해 개인 서버로 DB를 이전하고, Render 플랫폼에 배포하는 과정에서 Database Connection Error가 발생했습니다.',
        solution: [
          '로그 분석: 가장 먼저 Render의 배포 로그를 확인하여, 원인이 Connection Timeout임을 특정했습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: Render 공식 문서를 참고하여, 새로 구축한 DB 서버의 IP를 방화벽 허용 목록에 추가했습니다. 그다음, 로컬의 application.properties에 있던 DB 접속 정보를 Render의 환경 변수 설정에 정확히 입력하여 문제를 해결했습니다.',
        ],
        learned: 'DB 이전부터 배포까지 직접 경험하며, 로컬과 실제 서버 환경의 가장 큰 차이점인 네트워크와 환경 변수 관리의 중요성을 몸으로 깨달았습니다. 이제는 어떤 환경에서든 로그를 기반으로 체계적인 문제 해결을 할 수 있는 자신감을 얻었습니다.'
      }
    ],
    requirementsUrl: 'https://docs.google.com/spreadsheets/d/10CiUG18fGrM2qKxKslMeXjslcGnF8abdkhVaAl-C9Gc/edit?usp=sharing' ,
    erdUrl: '/vplay-erd.png',
    presentationUrl: 'https://gamma.app/docs/-xijy1tv2cayy1z1', 
  },
  {
    id: 2,
    thumbnail: '/harmony_thumbnail.jpg',
    title: '하모니',
    description: '직접 후원 대상 시스템, 명확한 목표 금액 설정과 기한 설정을 통한 기부 플랫폼입니다.',
    period: '2025.01 - 2025.02',
    headcount: '5인 (풀스택 개발)',
    gradient: { from: '#214632', to: '#26B173' },
    tags: ['팀', '사이드'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/harmonyProj.git',
    deployUrl: 'harmonyproj-production.up.railway.app',
    myRole: [
      {
        subtitle: '아이디/비밀번호 찾기 기능 구현',
        details: [ '비동기 통신(Ajax)과 이메일(JavaMailSender) 인증을 활용하여 UX를 개선한 계정 찾기 기능 구현', '보안을 고려한 인증 코드 기반의 안전한 비밀번호 재설정 로직 설계' ]
      },
      {
        subtitle: '기부 게시판 상세 페이지 조회 기능 구현',
        details: [ 'Spring MVC 패턴(Controller-Service-Repository)에 따라 게시판 상세 조회 기능 개발', 'DTO를 활용하여 계층 간 데이터를 전달하고, Thymeleaf로 서버에서 동적 페이지 렌더링' ]
      },
      {
        subtitle: '메인 페이지 기능 개발',
        details: [ '동적 콘텐츠 조회 및 렌더링: 최신 기부 게시글, 인기 프로젝트 목록 등 주요 데이터를 서버에서 조회하여 메인 페이지에 동적으로 표시하는 기능 구현' ]
      },
      {
        subtitle: '프로젝트 기획 및 전체 사이트 디자인 총괄',
        details: [ '서비스 목표에 따른 기능 명세 및 요구사항 정의 등 프로젝트 기획 총괄', '핵심 기능에 대한 데이터 모델링 및 관계 설정을 통한 ERD(데이터베이스) 설계' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Java, Spring Boot, Spring MVC, MyBatis'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript, Thymeleaf, jQuery, Bootstrap'
      },
      {
        category: 'Database',
        tools: 'Oracle'
      },
      {
        category: 'Infra/Etc',
        tools: 'Apache Tomcat (Embedded):, REST API, Ajax, JavaMail Sender, Git / GitHub'
      }
    ],
    keyFeatures: [
      {
        subtitle: '이메일 인증을 통한 비동기식 계정 찾기 기능',
        description: '사용자가 아이디를 잊었거나 비밀번호 재설정을 요청할 때, 가입 이메일로 인증 코드를 발송하여 안전하고 편리하게 계정 정보를 찾을 수 있는 기능을 구현했습니다.',
        process: [
          '비동기 통신 (Ajax): 인증번호를 요청하고 확인하는 전 과정에 Ajax를 적용하여, 페이지 전체의 새로고침 없이 필요한 부분만 업데이트되도록 구현했습니다. 이를 통해 사용자의 흐름이 끊기지 않는 매끄러운 UX(사용자 경험)를 제공했습니다.',
          '메일 전송 처리: Spring Boot의 JavaMailSender 인터페이스를 활용해 인증 메일 발송 기능을 구현했습니다. 서버에서 생성된 일회용 인증 코드를 메일로 전송함으로써, 외부 이메일 서비스와 안정적으로 연동했습니다.',
          '보안 강화: 단순 임시 비밀번호 발급이 아닌, 인증 코드를 통해 사용자가 직접 새 비밀번호를 설정하는 방식으로 구현하여 민감한 정보의 노출 위험을 최소화하고 보안성을 높였습니다.',
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '정적 리소스 경로 문제 해결',
        problem: '게시글 작성 시 업로드한 이미지가 서버의 지정된 폴더에는 정상적으로 저장되었지만, 웹 페이지에서는 이미지가 보이지 않는 "엑스박스" 오류가 발생했습니다.',
        solution: [
          '원인 분석: 개발자 도구로 확인 결과, 이미지 태그(<img>)의 src 속성값이 브라우저가 직접 접근할 수 없는 서버의 로컬 파일 시스템 경로(예: file:///C:/upload/...)로 설정되어 있었습니다. 웹 브라우저는 보안 정책상 로컬 파일 시스템에 직접 접근할 수 없기 때문에 이미지를 불러오지 못하는 것이 근본적인 원인이었습니다.',
          '원인 추적: 로컬 환경과 달리, 클라우드 플랫폼의 네트워크 방화벽이 외부 DB로의 접속을 차단하고 있거나, 환경 변수 설정이 잘못되었을 가능성을 중심으로 문제를 추적했습니다.',
          '단계적 해결: 이 문제를 해결하기 위해 Spring Boot의 WebMvcConfigurer를 사용하여 외부 리소스에 접근할 수 있도록 정적 리소스 핸들러(Resource Handler)를 추가했습니다. 특정 URL 경로(예: /images/**)로 요청이 들어오면, 실제 서버의 파일이 저장된 로컬 폴더(예: C:/upload/)에 매핑되도록 설정했습니다. 이로써 웹에서는 URL 경로를 통해 이미지에 접근하고, 서버는 해당 경로와 연결된 실제 파일을 응답으로 보내주어 이미지가 정상적으로 노출되도록 문제를 해결할 수 있었습니다.',
        ],
        learned: '이번 경험을 통해 웹 브라우저의 동작 원리와 보안 정책에 대해 깊이 이해할 수 있었습니다. 특히 브라우저가 접근할 수 있는 **논리적인 웹 경로(URL)**와 서버에 파일이 저장되는 물리적인 파일 경로는 명확히 다르다는 것을 깨달았고, Spring Boot의 정적 리소스 핸들러가 이 둘을 어떻게 연결해주는지 실무적으로 체득했습니다. 또한, 문제가 발생했을 때 개발자 도구를 활용해 원인을 분석하는 디버깅 능력의 중요성을 다시 한번 느낄 수 있었습니다.'
      }
    ],
    requirementsUrl: 'https://docs.google.com/spreadsheets/d/1KgVs-xaFTL7uYtwpHxOfwTr_oV-fE8HaqtfHZnO0dik/edit?usp=sharing' ,
    erdUrl: '/givehub-red.png', 
    presentationUrl: 'https://gamma.app/docs/-xijy1tv2cayy1z1', 
  },
  {
    id: 3,
    thumbnail: '/dealon_thumbnail.jpg',
    title: '딜온',
    description: '일반 중고 거래와 실시간 경매 기능을 통합하여, 다양한 거래 방식을 하나의 플랫폼에서 지원하는 유저 중심의 커머스 시스템을 구현중입니다.',
    period: '2025.04 - 진행중',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#673AB7', to: '#365CF5' },
    tags: ['팀', '사이드', '진행중'],
    category: 'Team',
    githubUrl: 'https://github.com/castleBell0921/dealon.git',
    deployUrl: 'https://vplay-ebcf.onrender.com',////////////////////////////////////////////////////////미완
    myRole: [
      {
        subtitle: 'ERD 설계 및 Oracle DB 구축',
        details: [ '서비스의 핵심 기능(회원, 제작의뢰, 프로젝트)에 대한 데이터 모델링 및 관계 설정', '데이터 무결성과 정규화를 고려한 데이터베이스 설계' ]
      },
      {
        subtitle: '최근 본 상품 기능 구현',
        details: [ '쿠키(Cookie)를 활용한 데이터 관리: 사용자가 특정 상품의 상세 페이지를 조회할 때, 해당 상품의 ID를 클라이언트의 쿠키(Cookie)에 저장하는 방식으로 기능 구현' ]
      },
      {
        subtitle: 'UI/UX 기획 및 Figma를 활용한 디자인',
        details: [ '사용자 관점의 플로우를 고려한 와이어프레임 및 프로토타입 제작', '개발 효율성 증대를 위한 컴포넌트 기반 디자인 시스템 설계 참여' ]
      },
    ],
    techStack: [
      {
        category: 'Backend',
        tools: 'Node.js, Express.js'
      },
      {
        category: 'Frontend',
        tools: 'React, JavaScript, HTML5, CSS3, Vite'
      },
      {
        category: 'Database',
        tools: 'Oracle'
      },
      {
        category: 'Infra/Etc',
        tools: 'REST API, Google/Kakao OAuth 2.0, Git / GitHub, GitHub Actions, CoolSMS'
      }
    ],
    keyFeatures: [
      {
        subtitle: '쿠키(Cookie)를 활용한 최근 본 상품 기능',
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
        subtitle: `한정된 쿠키(Cookie) 용량과 데이터 관리 문제 해결`,
        problem: `'최근 본 상 품' 기능을 쿠키를 이용해 구현하던 중, **쿠키의 용량 제한(약 4KB)**이라는 현실적인 문제에 부딪혔습니다. 사용자가 수십, 수백 개의 상품을 계속해서 볼 경우, 상품 ID가 무한정으로 쿠키에 쌓이게 됩니다. 이는 결국 쿠키의 최대 용량을 초과하여 데이터가 유실되거나, 매번 서버 요청 시마다 불필요하게 커진 쿠키 정보가 전송되어 네트워크 성능을 저하시키는 문제를 야기했습니다.`, 
        solution: [
          `원인 분석: 문제의 핵심은 '최근 본 상품' 목록을 제한 없이 저장하려 했던 점이었습니다. 모든 상품을 저장하는 것은 비효율적이며, 사용자에게도 너무 많은 목록은 의미가 없다고 판단했습니다.`,
          `데이터 관리 전략 수립: 가장 '최근에 본' 상품이라는 기능의 본질에 집중했습니다. 사용자가 가장 의미 있게 참고할 만한 목록의 개수를 20개로 제한하기로 결정했습니다.`,
          `큐(Queue) 자료구조 로직 적용:`,
          `사용자가 상품을 조회하면, 해당 상품 ID가 기존 목록에 있는지 먼저 확인합니다.`,
          `만약 이미 존재하는 ID라면, 기존 위치에서 삭제하고 목록의 가장 맨 앞으로 이동시켜 **'가장 최근에 본 상품'**임을 업데이트했습니다.`,
          `목록이 20개로 꽉 찬 상태에서 새로운 상품을 보면, 목록의 가장 뒤에 있는(가장 오래된) 상품 ID를 하나 제거하고, 새로운 상품 ID를 맨 앞에 추가하는 선입선출(FIFO) 방식의 로직을 클라이언트 측 스크립트에 구현하여 문제를 해결했습니다.`,
        ],
        learned: `이번 경험을 통해 브라우저 저장소(쿠키, 로컬 스토리지 등)의 명확한 특성과 한계를 몸소 깨달았습니다. 단순히 기능을 구현하는 것을 넘어, 데이터의 양과 흐름을 예측하고, 한정된 자원 안에서 **최적의 사용자 경험(UX)**을 제공하기 위한 데이터 구조 설계의 중요성을 깊이 이해하게 되었습니다. 이제는 어떤 기능을 만들든 발생 가능한 **엣지 케이스(Edge Case)**를 먼저 고민하고, 확장성과 성능을 고려하는 개발 습관을 갖게 되었습니다.` 
      }
    ],
    requirementsUrl: 'https://docs.google.com/spreadsheets/d/1c4-7bCbl1G_mUL8coZmN_slhOcWzjiPjA7iY-IWDqWw/edit?usp=sharing' ,
    erdUrl: '/dealon-erd.png', 
  },
  {
    id: 4,
    thumbnail: '/portfolio_thumbnail.jpg',
    title: '포트폴리오_2025',
    description: '리액트를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오 사이트입니다.',
    period: '2025.06 - 2025.07',
    headcount: '1인 개발',
    gradient: { from: '#827D8B', to: '#C6C1D5' },
    tags: ['솔로', '사이드'],
    category: 'Solo',
    githubUrl: 'https://github.com/castleBell0921/dealon.git',
    deployUrl: 'https://vplay-ebcf.onrender.com',////////////////////////////////////////////////////////미완
    myRole: [
      {
        subtitle: 'React 기반 동적 UI/UX 개발',
        details: [ 'useState, useEffect 등 React Hook을 활용하여 프로젝트 필터링, 모달을 통한 상세 정보 표시 등 동적인 사용자 경험을 구현', '컴포넌트(Header, ProjectCard, Section 등) 기반으로 코드를 모듈화하여 재사용성과 유지보수성을 높임' ]
      },
      {
        subtitle: 'Vite 기반 프론트엔드 빌드 시스템 구축',
        details: [ 'Vite의 빠른 개발 서버와 빌드 기능을 활용하여 개발 환경을 구축하고, 효율적인 번들링을 설정했어요.']
      },
      {
        subtitle: 'Tailwind CSS를 활용한 스타일링 및 디자인 시스템 설계',
        details: [ 'tailwind.config.js 파일에 브랜드 색상, 폰트, 그림자 효과 등 커스텀 디자인 토큰을 정의하여 일관된 디자인 시스템을 구축', 'PostCSS와 Autoprefixer를 함께 사용하여 CSS의 브라우저 호환성 확보' ]
      },
    ],
    techStack: [
      {
        category: 'Frontend',
        tools: 'React, JavaScript(ES6+), Vite'
      },
      {
        category: 'Markup & Styling',
        tools: 'HTML5, CSS3, Tailwind CSS'
      },
    ],
    keyFeatures: [
      {
        subtitle: '필터링 기능이 포함된 동적 프로젝트 섹션',
        description: "사용자가 'All', 'Team', 'Single' 등 카테고리 버튼을 클릭하면, 해당 프로젝트만 부드러운 애니메이션과 함께 표시되는 기능을 개발",
        process: [
          'REST API 설계: 설계 단계부터 RESTful 원칙에 따라, 문의(inquiry), 답변(answer) 등을 명사 형태의 URI로 명확하게 설계했습니다.',
          'useState Hook으로 현재 활성화된 필터 상태를 관리하고, useEffect Hook을 사용하여 필터가 변경될 때마다 projects 배열을 필터링하고 상태를 업데이트하는 방식을 사용했습니다.',
          '이를 통해 선언적으로 UI를 관리하고 불필요한 렌더링을 방지했습니다.'
        ]
         },
    ],
    problemSolving: [
      {
        subtitle: '첫 React 프로젝트, 홀로 완성하기',
        problem: ['백엔드 개발 경험은 있었지만, React를 사용해 동적인 웹 애플리케이션을 처음부터 끝까지 혼자 구축하는 것은 완전히 새로운 도전이었습니다.','컴포넌트 기반 사고, 상태 관리(State Management), JSX 문법 등 생소한 개념들 때문에 초기 개발 단계에서 많은 어려움을 겪었습니다.',],
        solution: [
          '개념 정복을 위한 의식적인 노력: 막연하게 코드를 짜기보다, React 공식 문서를 정독하며 **컴포넌트의 생명주기(Lifecycle)**와 **Hooks(useState, useEffect 등)**의 개념부터 확실히 다졌습니다.',
          '특히, 프로젝트 필터링 기능과 같이 상태에 따라 UI가 변해야 하는 부분을 구현하며 상태(State)와 속성(Props)의 흐름을 집중적으로 학습했습니다.',
        ],
        learned: `이 프로젝트는 제게 React와 현대 프론트엔드 개발에 대한 깊은 이해를 선물했습니다. 이제는 단순히 기능을 구현하는 것을 넘어, 사용자 경험을 고려한 동적인 UI를 설계하고 구축할 수 있는 자신감을 얻었습니다. 또한, 낯선 기술에 대한 두려움 없이 주도적으로 학습하고 문제를 해결하는 저만의 성장 사이클을 만들 수 있었습니다.`
      }
    ],
    requirementsUrl: 'https://docs.google.com/spreadsheets/d/10CiUG18fGrM2qKxKslMeXjslcGnF8abdkhVaAl-C9Gc/edit?usp=sharing' ,
    erdUrl: '/vplay-erd.png', 
  },
  {
    id: 5,
    thumbnail: '/naturelica_thumbnail.jpg',
    title: '네이쳐리카',
    description: '워드프레스 기반으로 제작한 웹사이트입니다.',
    period: '2023.11 - 2023.12',
    headcount: '2인 (기획, 개발)',
    gradient: { from: '#364518', to: '#848F3E' },
    tags: ['팀', '워드프레스'],
    category: 'Team',
    deployUrl: 'https://naturelica.co.kr/',
    myRole: [
      {
        subtitle: '프로젝트 구축 및 클라이언트 커뮤니케이션',
        details: [ '기획자가 기획대로 요구사항들을 분석하여 최종 결과물 전달까지 프로젝트의 전 과정을 책임지고 관리', '정기적인 소통을 통해 클라이언트의 피드백을 수렴하고, 디자인 및 기능 개발 과정에 반영' ]
      },
      {
        subtitle: 'UI/UX 기획 및 웹사이트 디자인',
        details: [ "'네이처리카' 브랜드의 친환경적이고 신선한 이미지를 살리기 위해 그린과 화이트 톤을 메인 컬러로 사용하여 디자인 컨셉을 수립", '사용자가 상품을 쉽게 탐색하고 구매할 수 있도록 직관적인 정보 구조와 사용자 동선을 설계' ]
      },
      {
        subtitle: 'WordPress 기반 웹사이트 단독 구축',
        details: [ 'WordPress 테마와 플러그인을 커스터마이징하여 디자인 시안에 맞는 웹사이트를 구현', 'PC, 태블릿, 모바일 등 다양한 디바이스에서 최적화된 화면을 보여주는 반응형 웹 디자인을 적용' ]
      },
    ],
    techStack: [
      {
        category: 'CMS',
        tools: 'WordPress'
      },
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript'
      },
      {
        category: 'Backend',
        tools: 'PHP'
      },
      {
        category: 'Database',
        tools: 'MySQL'
      }
    ],
    keyFeatures: [
      {
        subtitle: '반응형 웹 디자인 적용',
        description: '사용자가 접속하는 기기(PC, 태플릿, 모바일)의 화면 크기에 맞춰 웹사이트의 레이아웃과 폰트 크기, 이미지 등이 자동으로 최적화되도록 구현했습니다.',
        process: [
          'CSS 미디어 쿼리를 사용하여 각 해상도 분기점(Breakpoint)에 맞는 스타일을 지정함으로써, 모든 사용자에게 일관되고 쾌적한 사용 경험을 제공하도록 했습니다.',
        ]
         },
        {
      subtitle: '웹 호스팅 설정 및 사이트 배포 총괄',
      description: '카페24(Cafe24) 웹호스팅 환경을 직접 구성하고, 개발이 완료된 워드프레스 사이트를 라이브 서버에 이전 및 배포했습니다.',
      process: [
        'naturelica.co.kr 도메인 연결과 SSL 보안 인증서 적용을 통해, 사용자가 안전하게 접속할 수 있는 안정적인 서비스 환경을 구축했습니다.',
      ]
        },
    ],
    problemSolving: [
      {
        subtitle: '요구사항 변경에 따른 유연한 커뮤니케이션 및 대응',
        problem: '초기 디자인 시안에 대한 합의를 마치고 개발이 상당 부분 진행된 상태에서, 클라이언트 측에서 핵심적인 레이아웃과 컬러 컨셉의 수정을 갑작스럽게 요청하는 상황이 발생했습니다.',
        solution: [
          '요구사항 명확화 및 영향도 분석: 먼저 추가 미팅을 요청하여 변경을 원하는 이유와 구체적인 목표를 다시 한번 명확하게 이해했습니다. 그리고 요청사항을 반영했을 때의 추가 작업 범위, 예상 소요 시간, 기존 기능과의 충돌 가능성 등을 꼼꼼하게 분석하여 클라이언트에게 투명하게 공유했습니다.',
          '대안 제시를 통한 합의점 도출: 전체를 재개발하는 대신, 기존 구조를 최대한 유지하면서 클라이언트의 새로운 니즈를 만족시킬 수 있는 절충안을 몇 가지 제시했습니다. 예를 들어, 레이아웃 변경은 최소화하되 컬러와 폰트, 주요 이미지 교체만으로도 원하는 분위기를 낼 수 있다는 점을 시각 자료와 함께 설득력 있게 전달했습니다.',
          '변경 사항 문서화: 최종 합의된 내용은 이메일과 프로젝트 관리 툴에 명확하게 기록하여, 추후 동일한 이슈로 인한 혼선을 방지하고 작업의 근거를 남겼습니다.',
        ],
        learned: '클라이언트와의 프로젝트에서 가장 중요한 것은 지속적인 소통과 신뢰 구축임을 깨달았습니다. 기술적인 능력만큼이나, 변경사항을 유연하게 받아들이고 프로젝트의 전체 목표에 맞춰 최적의 해결책을 찾아 제시하는 문제 해결 능력의 중요성을 몸으로 배울 수 있었습니다.'
      }
    ],
  },
  {
    id: 6,
    thumbnail: '/portfolio_old_thumbnail.jpg',
    title: '포트폴리오_2023',
    description: 'HTML, CSS,  jQuery를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오 사이트입니다.',
    period: '2023.05 - 2023.06',
    headcount: '1인 개발',
    gradient: { from: '#83797E', to: '#D2BFBD' },
    tags: ['솔로', '사이드'],
    category: 'Solo',
    githubUrl: 'https://github.com/forqls/portfolio_2023.git',
    deployUrl: 'https://vplay-ebcf.onrender.com',///////////////////////////////////삽입하기
    myRole: [
      {
        subtitle: 'UI/UX 기반의 웹 구조 설계 및 구현',
        details: [ "fullPage.js 라이브러리의 특성을 활용하여, 'INTRO', 'ABOUT', 'WEB REDESIGN' 등 7개의 섹션으로 구성된 싱글 페이지 애플리케이션(SPA)의 전체적인 구조를 설계하고 HTML로 마크업했습니다.", '사용자 정보(프로필, 학력, 기술 스택)와 프로젝트(웹 리디자인, 그래픽) 데이터를 효과적으로 보여주기 위한 화면 구조를 기획하고 구현했습니다.' ]
      },
      {
        subtitle: 'jQuery를 활용한 동적 웹 인터랙션 개발',
        details: [ '네비게이션 메뉴의 마우스 오버 시 서브메뉴가 나타나는 드롭다운 기능을 구현했습니다.', "'GRAPHIC DESIGN' 섹션에서 각 디자인 항목을 클릭했을 때, 해당 이미지에 대한 상세 정보를 보여주는 모달(Modal) 창 기능을 개발했습니다." ]
      },
      {
        subtitle: 'CSS3 애니메이션을 통한 시각적 경험 향상',
        details: [ '@keyframes를 활용하여 INTRO 섹션의 텍스트, 로고, 배경 요소들이 순차적으로 등장하는 동적인 인트로 화면을 구현했습니다.', "사용자의 조작(Hover 등)에 따라 버튼과 그래픽 요소들이 시각적으로 반응하도록 인터랙티브한 스타일을 적용했습니다." ]
      },
    ],
    techStack: [
      {
        category: 'Frontend',
        tools: 'HTML5, CSS3, JavaScript'
      },
      {
        category: 'Libraries',
        tools: 'jQuery, fullPage.js'
      },
      {
        category: 'Database',
        tools: 'Oracle (개발), PostgreSQL (배포)'
      },
      {
        category: 'Etc',
        tools: 'Dynamic UI, CSS Animation, Interactive Web'
      }
    ],
    keyFeatures: [
      {
        subtitle: 'jQuery와 CSS를 활용한 동적 모달(Modal) 뷰 기능',
        description: "'GRAPHIC DESIGN' 섹션에서 사용자가 특정 그래픽 디자인 버튼을 클릭하면, 화면 전환 없이 해당 작품의 전체 이미지를 담은 모달 창이 부드럽게 나타나는 기능을 구현했습니다.",
        process: [
          'jQuery 이벤트 핸들링: 각 그래픽 작품 버튼(.bnt_open_*)에 click 이벤트를 바인딩하여 사용자의 클릭 동작을 감지했습니다.',
          'DOM 조작 및 CSS 제어: 이벤트 발생 시, 숨겨져 있던 모달창(.modal_bg_*, .nav_*)의 display 속성을 block으로 변경하여 화면에 표시했습니다. 동시에 body에 not_scroll 클래스를 추가하여 모달이 활성화된 동안 배경 페이지의 스크롤을 막아 사용자 경험(UX)의 일관성을 유지했습니다.',
          '상태 저장: 모달이 열리기 전의 스크롤 위치(posY)를 변수에 저장했다가, 모달이 닫힐 때 해당 위치로 복원시켜 사용자가 보던 위치를 벗어나지 않도록 처리했습니다.'
        ]
      }
    ],
  },
];