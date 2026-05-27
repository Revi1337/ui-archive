export const pageLayoutSections = [
  {
    "id": "hero",
    "group": "Page Layout Sections",
    "title": "Hero Section",
    "description": "웹 페이지 최상단에서 첫인상을 결정하는 영역",
    "prompt": "Hero section with a vibrant mesh gradient background, bold centered Outfit typography, glassmorphism card CTA, and floating 3D micro-animations.",
    "anatomy": [
      {
        "label": "Hero Section Main Frame",
        "role": "Hero Section 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
      },
      {
        "label": "Interactive Zone",
        "role": "사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다."
      },
      {
        "label": "Data Renderer",
        "role": "자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다."
      },
      {
        "label": "Layout constraints",
        "role": "부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다."
      },
      {
        "label": "Visual Polish",
        "role": "미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다."
      }
    ]
  },
  {
    "id": "features",
    "group": "Page Layout Sections",
    "title": "Features Section",
    "description": "서비스/제품의 특징과 강점을 직관적으로 보여주는 카드 영역",
    "prompt": "3-column feature grid with neo-brutalist cards, solid color backgrounds, bold offset shadows, and large geometric icons.",
    "anatomy": [
      {
        "label": "Features Section Main Frame",
        "role": "Features Section 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
      },
      {
        "label": "Interactive Zone",
        "role": "사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다."
      },
      {
        "label": "Data Renderer",
        "role": "자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다."
      },
      {
        "label": "Layout constraints",
        "role": "부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다."
      },
      {
        "label": "Visual Polish",
        "role": "미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다."
      }
    ]
  },
  {
    "id": "split-benefit",
    "group": "Page Layout Sections",
    "title": "Split Benefit Section",
    "description": "비주얼과 설명이 교차되어 시선을 붙잡는 구조",
    "prompt": "Split layout benefit section with a large media frame on the left, typography and bullet list on the right. Alternating pattern for subsequent rows.",
    "anatomy": [
      {
        "label": "Split Benefit Section Main Frame",
        "role": "Split Benefit Section 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
      },
      {
        "label": "Interactive Zone",
        "role": "사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다."
      },
      {
        "label": "Data Renderer",
        "role": "자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다."
      },
      {
        "label": "Layout constraints",
        "role": "부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다."
      },
      {
        "label": "Visual Polish",
        "role": "미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다."
      }
    ]
  },
  {
    "id": "bento-grid",
    "group": "Page Layout Sections",
    "title": "Bento Grid Section",
    "description": "현대적이고 트렌디한 다중 크기 비대칭 그리드 레이아웃",
    "prompt": "Modern asymmetric bento box grid layout with 5 cards of varying spans. Glassmorphism cards with subtle inner glow and feature accents.",
    "anatomy": [
      {
        "label": "Bento Grid",
        "role": "CSS Grid를 기반으로 크기가 서로 다른 카드들을 비대칭으로 배치하는 전체 컨테이너입니다."
      },
      {
        "label": "Grid Span",
        "role": "여러 열이나 행에 걸쳐 넓게 자리를 차지하는 주요 콘텐츠 카드입니다. 시선을 가장 먼저 끌어당깁니다."
      },
      {
        "label": "Asymmetric Card",
        "role": "단일 셀을 차지하는 보조 카드로, 통계·미리보기·짧은 정보를 담아 메인 카드와 시각적 균형을 이룹니다."
      },
      {
        "label": "Feature Accent",
        "role": "카드 내부의 색상 포인트 요소로, 시각적 개성을 부여하고 카드 간 구분을 돕습니다."
      }
    ]
  },
  {
    "id": "pricing",
    "group": "Page Layout Sections",
    "title": "Pricing Table",
    "description": "가격 정책 및 패키지 혜택을 대조하는 영역",
    "prompt": "Pricing table with 3 tiers. Center tier is slightly larger with a \"Most Popular\" glowing badge, glowing border, and a toggle switch for Monthly/Annual billing.",
    "anatomy": [
      {
        "label": "Pricing Table Main Frame",
        "role": "Pricing Table 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
      },
      {
        "label": "Interactive Zone",
        "role": "사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다."
      },
      {
        "label": "Data Renderer",
        "role": "자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다."
      },
      {
        "label": "Layout constraints",
        "role": "부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다."
      },
      {
        "label": "Visual Polish",
        "role": "미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다."
      }
    ]
  },
  {
    "id": "testimonials",
    "group": "Page Layout Sections",
    "title": "Testimonials Section",
    "description": "실사용자 후기와 평점을 모아 신뢰를 높이는 영역",
    "prompt": "Testimonials carousel with user avatars, glowing star ratings, short quoted reviews, and company logo badges. Dark mode cards with border highlights.",
    "anatomy": [
      {
        "label": "Testimonials Section Main Frame",
        "role": "Testimonials Section 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
      },
      {
        "label": "Interactive Zone",
        "role": "사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다."
      },
      {
        "label": "Data Renderer",
        "role": "자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다."
      },
      {
        "label": "Layout constraints",
        "role": "부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다."
      },
      {
        "label": "Visual Polish",
        "role": "미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다."
      }
    ]
  },
  {
    "id": "accordion-faq",
    "group": "Page Layout Sections",
    "title": "Accordion FAQ Section",
    "description": "질문과 답변을 접고 펴는 레이아웃",
    "prompt": "FAQ section using a clean accordion layout. Question triggers have chevron icons that rotate on active state. Smooth height transition for answers.",
    "anatomy": [
      {
        "label": "Accordion FAQ Section Main Frame",
        "role": "Accordion FAQ Section 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
      },
      {
        "label": "Interactive Zone",
        "role": "사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다."
      },
      {
        "label": "Data Renderer",
        "role": "자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다."
      },
      {
        "label": "Layout constraints",
        "role": "부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다."
      },
      {
        "label": "Visual Polish",
        "role": "미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다."
      }
    ]
  },
  {
    "id": "logo-cloud",
    "group": "Page Layout Sections",
    "title": "Logo Cloud (Trusted By) Section",
    "description": "고객사나 파트너 로고를 나열하여 신뢰도를 높이는 영역",
    "prompt": "A horizontal scrolling logo cloud showing company logos in grayscale. Used for building trust and social proof.",
    "anatomy": [
      {
        "label": "Logo Track",
        "role": "무한 스크롤 등 애니메이션을 적용하여 로고들을 부드럽게 흐르게 하는 트랙 뼈대입니다."
      },
      {
        "label": "Grayscale Logo",
        "role": "시선 분산을 막고 통일감을 주기 위해 채도를 낮춘 파트너 및 고객사의 로고 이미지입니다."
      }
    ]
  },
  {
    "id": "cta-section",
    "group": "Page Layout Sections",
    "title": "CTA (Call to Action) Section",
    "description": "사용자의 최종 액션(가입, 구매 등)을 유도하는 하단 배너 영역",
    "prompt": "A large call to action section with a punchy headline, glowing background gradient, and a primary action button.",
    "anatomy": [
      {
        "label": "Punchy Headline",
        "role": "사용자의 마지막 결정을 촉구하는 간결하고 강력한 메인 타이틀입니다."
      },
      {
        "label": "Primary Action Button",
        "role": "회원가입, 구매 등 핵심 목표로 직접 연결되는 가장 눈에 띄는 버튼입니다."
      },
      {
        "label": "Background Pattern/Glow",
        "role": "CTA 영역으로 시선을 모아주는 시각적인 백그라운드 효과입니다."
      }
    ]
  },
  {
    "id": "stats-metrics",
    "group": "Page Layout Sections",
    "title": "Stats / Metrics Section",
    "description": "회사의 성과나 핵심 지표를 거대한 타이포그래피로 시각화하는 영역",
    "prompt": "A statistics section with large glowing numbers, simple labels, and subtle dividers separating the metrics.",
    "anatomy": [
      {
        "label": "Metric Value",
        "role": "100만+, 99.9% 등 가장 자랑하고 싶은 핵심 수치를 거대하게 강조한 요소입니다."
      },
      {
        "label": "Metric Label",
        "role": "해당 수치가 무엇을 의미하는지(예: 누적 사용자 수) 간략하게 설명하는 텍스트입니다."
      },
      {
        "label": "Divider",
        "role": "각 지표 간의 시각적인 경계를 만들어주는 구분선입니다."
      }
    ]
  },
  {
    "id": "how-it-works",
    "group": "Page Layout Sections",
    "title": "How it Works Section",
    "description": "서비스의 동작 원리나 이용 절차를 순서대로 설명하는 영역",
    "prompt": "A step-by-step 'How it works' section with 3 numbered vertical steps. Each step has a connecting line, an icon, a title, and a short description.",
    "anatomy": [
      {
        "label": "Step Number/Icon",
        "role": "절차의 순서를 명확히 알려주기 위해 숫자나 직관적인 아이콘을 강조한 원형 뱃지입니다."
      },
      {
        "label": "Connecting Line",
        "role": "각 단계가 단절되지 않고 시간적, 논리적으로 이어짐을 시각적으로 보여주는 연결선입니다."
      },
      {
        "label": "Step Description",
        "role": "해당 단계에서 사용자가 해야 할 일이나 서비스가 처리하는 작업을 설명하는 텍스트입니다."
      }
    ]
  },
  {
    "id": "latest-articles",
    "group": "Page Layout Sections",
    "title": "Latest Articles Section",
    "description": "최근 업데이트 소식이나 블로그 글을 보여주는 그리드",
    "prompt": "A blog article grid with 3 columns. Each card has a thumbnail image placeholder, date meta text, article title, short excerpt, and a 'read more' link.",
    "anatomy": [
      {
        "label": "Article Thumbnail",
        "role": "시선을 끌고 글의 주제를 암시하는 메인 커버 이미지 영역입니다."
      },
      {
        "label": "Meta Data",
        "role": "작성일자, 카테고리, 작성자 등 글에 대한 부가적인 속성 정보입니다."
      },
      {
        "label": "Read More Link",
        "role": "요약된 본문을 읽은 후, 전체 기사를 보기 위해 클릭을 유도하는 텍스트 버튼입니다."
      }
    ]
  },
  {
    "id": "contact-us",
    "group": "Page Layout Sections",
    "title": "Contact Us Section",
    "description": "회사 연락처 정보와 고객 문의 폼을 나란히 배치한 영역",
    "prompt": "A Contact Us section with a split layout. Left side contains company address, email, and phone with icons. Right side contains a 'Send Message' form with input fields.",
    "anatomy": [
      {
        "label": "Contact Info Block",
        "role": "주소, 전화번호, 이메일 등 회사의 공식적인 연락 수단을 텍스트와 아이콘으로 보여줍니다."
      },
      {
        "label": "Inquiry Form",
        "role": "사용자가 직접 이름, 이메일, 문의 내용을 적어 즉시 발송할 수 있는 입력 양식 영역입니다."
      },
      {
        "label": "Map Embed (Optional)",
        "role": "실제 오프라인 사무실이나 매장 위치를 직관적으로 알려주는 지도 영역입니다."
      }
    ]
  },
  {
    "id": "team-section",
    "group": "Page Layout Sections",
    "title": "Team Section",
    "description": "회사 구성원들을 소개하는 프로필 영역",
    "prompt": "A modern team section displaying member profiles as cards. Cards have a 3D tilt hover effect and display social links upon hover.",
    "anatomy": [
      {
        "label": "Profile Card",
        "role": "팀원의 사진, 이름, 직책을 표시하는 메인 컨테이너입니다."
      },
      {
        "label": "Social Overlay",
        "role": "마우스를 올렸을 때 나타나는 링크(LinkedIn, Twitter 등) 영역입니다."
      }
    ]
  },
  {
    "id": "awards-certifications",
    "group": "Page Layout Sections",
    "title": "Awards & Certifications",
    "description": "기업이 받은 상이나 인증 마크를 나열하는 영역",
    "prompt": "An awards and certifications section displaying badges with metallic textures. Badges flow horizontally using a marquee animation.",
    "anatomy": [
      {
        "label": "Badge Marquee",
        "role": "여러 개의 뱃지가 끊김 없이 가로로 흐르도록 만드는 래퍼입니다."
      },
      {
        "label": "Metallic Badge",
        "role": "금속 재질의 질감과 빛 반사 효과가 적용된 수상 내역 심볼입니다."
      }
    ]
  },
  {
    "id": "case-study-portfolio",
    "group": "Page Layout Sections",
    "title": "Case Study / Portfolio",
    "description": "프로젝트 성과나 포트폴리오를 비대칭으로 돋보이게 보여주는 영역",
    "prompt": "An asymmetrical case study section where large thumbnail images and key metric cards overlap.",
    "anatomy": [
      {
        "label": "Large Thumbnail",
        "role": "포트폴리오의 시각적 완성도를 뽐내는 큰 사이즈의 프리뷰 이미지입니다."
      },
      {
        "label": "Metrics Overlap",
        "role": "썸네일 위에 겹쳐 배치되어, 프로젝트의 핵심 성과 수치를 강조합니다."
      }
    ]
  },
  {
    "id": "timeline-roadmap",
    "group": "Page Layout Sections",
    "title": "Timeline / Roadmap",
    "description": "연혁이나 향후 제품 개발 로드맵을 선형으로 표시하는 영역",
    "prompt": "A vertical timeline roadmap where milestone nodes glow and contents fade in as the user scrolls down.",
    "anatomy": [
      {
        "label": "Progress Line",
        "role": "전체 타임라인의 기준이 되는 중앙 또는 측면의 세로선입니다."
      },
      {
        "label": "Milestone Node",
        "role": "특정 시점이나 목표 달성을 나타내는 지표 점(Dot)입니다."
      }
    ]
  },
  {
    "id": "comparison-table",
    "group": "Page Layout Sections",
    "title": "Comparison Table",
    "description": "경쟁사 또는 요금제 간의 기능을 구체적으로 비교하는 표",
    "prompt": "A feature comparison table with a sticky header. The column representing the company's own product is highlighted with a neon border and subtle background.",
    "anatomy": [
      {
        "label": "Sticky Header",
        "role": "스크롤 시 화면 상단에 고정되어 비교 대상을 항상 인지하게 해줍니다."
      },
      {
        "label": "Highlighted Column",
        "role": "자사 제품을 돋보이게 하기 위해 시각적으로 강조된 열입니다."
      }
    ]
  },
  {
    "id": "roi-calculator",
    "group": "Page Layout Sections",
    "title": "ROI Calculator",
    "description": "유저가 직접 값을 조절하여 예상 수익/절감액을 확인하는 계산기",
    "prompt": "An interactive ROI calculator with a dynamic range slider. Changing the slider updates the estimated savings and revenue numbers in real time.",
    "anatomy": [
      {
        "label": "Range Slider",
        "role": "유저가 직접 규모나 기간을 조작할 수 있는 슬라이더 컨트롤입니다."
      },
      {
        "label": "Real-time Metrics",
        "role": "슬라이더 값에 반응하여 실시간으로 계산된 결과를 보여주는 영역입니다."
      }
    ]
  },
  {
    "id": "newsletter-section",
    "group": "Page Layout Sections",
    "title": "Newsletter Section",
    "description": "이메일 구독이나 리드(Lead) 생성을 위한 폼 영역",
    "prompt": "A newsletter subscription section featuring an aurora gradient background and a glassmorphism email input form.",
    "anatomy": [
      {
        "label": "Aurora Background",
        "role": "유저의 시선을 사로잡는 화려한 색상의 애니메이션 배경입니다."
      },
      {
        "label": "Glass Input Form",
        "role": "배경과 조화를 이루는 투명한 질감의 이메일 입력 폼입니다."
      }
    ]
  },
  {
    "id": "announcement-bar",
    "group": "Page Layout Sections",
    "title": "Announcement Bar",
    "description": "신제품 출시나 중요 공지를 띄우는 최상단 바",
    "prompt": "A compact announcement bar positioned at the top of the page, featuring scrolling text and a dismiss button.",
    "anatomy": [
      {
        "label": "Ticker Text",
        "role": "공지 내용이 한정된 좁은 공간에서 가로로 흐르는 텍스트입니다."
      },
      {
        "label": "Dismiss Button",
        "role": "유저가 공지를 다 읽고 바를 닫을 수 있도록 하는 버튼입니다."
      }
    ]
  },
  {
    "id": "mega-footer",
    "group": "Page Layout Sections",
    "title": "Mega Footer",
    "description": "대규모 사이트에 적합한 복합적인 푸터 네비게이션",
    "prompt": "A mega footer with a multi-column layout for links, newsletter signup, social icons, and a giant watermark logo in the background.",
    "anatomy": [
      {
        "label": "Link Columns",
        "role": "사이트의 다양한 서브 페이지로 이동할 수 있는 메뉴 리스트 그룹입니다."
      },
      {
        "label": "Watermark Logo",
        "role": "브랜드 아이덴티티를 강조하기 위해 배경에 은은하게 깔리는 거대 로고입니다."
      }
    ]
  },
  {
    "id": "error-empty-states",
    "group": "Page Layout Sections",
    "title": "Error / Empty States",
    "description": "데이터가 없거나 에러가 발생했을 때 보여지는 친근한 화면",
    "prompt": "An empty state UI featuring a friendly illustration, a clear description message, and a prominent call-to-action button to guide the user's next steps.",
    "anatomy": [
      {
        "label": "Illustration",
        "role": "빈 화면의 부정적 경험을 긍정적으로 바꿔주는 시각적 이미지입니다."
      },
      {
        "label": "Primary CTA",
        "role": "사용자가 당황하지 않고 다음 행동(예: 새로 만들기)을 하도록 유도하는 버튼입니다."
      }
    ]
  }
];
