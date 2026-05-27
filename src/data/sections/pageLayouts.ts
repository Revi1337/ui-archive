import type { UIItem } from "../../types";

export const pageLayouts: UIItem[] = [
  {
    "id": "basic-layout",
    "group": "Page Layouts",
    "title": "Basic Layout",
    "description": "웹을 구성하는 가장 원초적인 전체 UI 프레임 구조 (Header, Footer, Nav, Section)",
    "prompt": "Standard web application frame with a fixed top header, left navigation sidebar, main content section, and bottom footer in a clean aesthetic.",
    "anatomy": [
      {
        "label": "Basic Layout Main Frame",
        "role": "Basic Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "two-column",
    "group": "Page Layouts",
    "title": "Two-column Layout",
    "description": "화면을 좌/우 두 개의 주요 단으로 나누는 레이아웃",
    "prompt": "Full page two-column layout with a 30% width sidebar on the left and 70% content area on the right. Glassmorphism styling.",
    "anatomy": [
      {
        "label": "Two-column Layout Main Frame",
        "role": "Two-column Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "split-screen",
    "group": "Page Layouts",
    "title": "Split Screen Layout",
    "description": "화면을 정확히 5:5로 분할하는 레이아웃",
    "prompt": "50/50 split screen layout. Left side features a vibrant visual graphic, right side features typography and a login/signup form.",
    "anatomy": [
      {
        "label": "Split Screen Layout Main Frame",
        "role": "Split Screen Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "asymmetrical",
    "group": "Page Layouts",
    "title": "Asymmetrical Layout",
    "description": "좌우 대칭을 깨뜨려 동적이고 트렌디한 느낌을 주는 레이아웃",
    "prompt": "Asymmetrical layout with overlapping glassmorphism shapes and off-center typography to create tension and artistic flair.",
    "anatomy": [
      {
        "label": "Asymmetrical Layout Main Frame",
        "role": "Asymmetrical Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "f-shape",
    "group": "Page Layouts",
    "title": "The F-shape Layout",
    "description": "사용자의 시선이 F자 형태로 이동하는 것을 고려한 레이아웃",
    "prompt": "F-pattern layout optimized for reading. Top navigation bar, left-aligned headings, and dense text/list content reading left-to-right.",
    "anatomy": [
      {
        "label": "The F-shape Layout Main Frame",
        "role": "The F-shape Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "z-shape",
    "group": "Page Layouts",
    "title": "The Z-shape Layout",
    "description": "시선이 지그재그(Z)로 이동하도록 설계된 랜딩 페이지 구조",
    "prompt": "Z-pattern landing page. Logo top left, CTA top right, hero image diagonal, ending with another CTA bottom right.",
    "anatomy": [
      {
        "label": "The Z-shape Layout Main Frame",
        "role": "The Z-shape Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "card-block",
    "group": "Page Layouts",
    "title": "Card or Block Layout",
    "description": "정보를 모듈화된 카드 형태로 균일하게 배치하는 그리드",
    "prompt": "Card block layout. Symmetrical 4-column grid of equal sized product cards with images, titles, and price tags.",
    "anatomy": [
      {
        "label": "Card or Block Layout Container",
        "role": "그림자 효과와 테두리 곡률을 통해 배경과 물리적으로 분리된 느낌을 주는 카드 틀입니다."
      },
      {
        "label": "Media Cover",
        "role": "카드의 상단을 채워 시각적인 매력도를 높이는 대표 이미지나 비디오 영역입니다."
      },
      {
        "label": "Primary Content",
        "role": "제목, 부제목 등 카드에서 가장 중요한 정보가 굵은 글씨로 배치되는 섹션입니다."
      },
      {
        "label": "Supporting Text",
        "role": "핵심 정보 외에 추가적인 설명이나 메타데이터가 작고 옅은 색으로 적히는 공간입니다."
      },
      {
        "label": "Card Actions",
        "role": "좋아요, 공유하기, 더보기 등 카드와 관련된 상호작용 버튼들이 모여있는 하단 바입니다."
      }
    ]
  },
  {
    "id": "featured-media",
    "group": "Page Layouts",
    "title": "Featured Media Layout",
    "description": "초대형 이미지나 비디오를 배경으로 꽉 채운 몰입형 레이아웃",
    "prompt": "Full-bleed featured image layout. Cinematic dark background image with center-aligned white overlay text and glass buttons.",
    "anatomy": [
      {
        "label": "Featured Media Layout Main Frame",
        "role": "Featured Media Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "masonry",
    "group": "Page Layouts",
    "title": "Masonry Layout",
    "description": "세로 길이가 제각각인 요소를 빈틈없이 벽돌처럼 쌓는 레이아웃",
    "prompt": "Masonry grid layout like Pinterest. Varying height image cards tightly packed in 3 columns without uniform rows.",
    "anatomy": [
      {
        "label": "Masonry Layout Main Frame",
        "role": "Masonry Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "magazine",
    "group": "Page Layouts",
    "title": "Magazine Layout",
    "description": "다양한 크기의 그리드를 섞어 복합적인 뉴스를 전달하는 구조",
    "prompt": "Magazine style layout with a large featured article, multiple small sidebar articles, and a grid of medium articles below.",
    "anatomy": [
      {
        "label": "Magazine Layout Main Frame",
        "role": "Magazine Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "fixed-nav",
    "group": "Page Layouts",
    "title": "Layout with Fixed Nav",
    "description": "스크롤과 무관하게 네비게이션이 화면의 특정 위치(상단/좌측)에 고정된 형태",
    "prompt": "Dashboard layout with a fixed left sidebar and a scrollable main content area to the right.",
    "anatomy": [
      {
        "label": "Layout with Fixed Nav Main Frame",
        "role": "Layout with Fixed Nav 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "hidden-nav",
    "group": "Page Layouts",
    "title": "Layout with Hidden Nav",
    "description": "햄버거 버튼 등을 통해 평소엔 메뉴를 숨겨 화면 공간을 극대화하는 레이아웃",
    "prompt": "Minimalist layout where navigation is hidden behind a hamburger menu icon. Expands into a full-screen glassmorphism overlay.",
    "anatomy": [
      {
        "label": "Layout with Hidden Nav Main Frame",
        "role": "Layout with Hidden Nav 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "interactive",
    "group": "Page Layouts",
    "title": "Interactive Layout",
    "description": "마우스 움직임이나 스크롤에 따라 요소가 3D로 움직이거나 변형되는 최신 레이아웃",
    "prompt": "Highly interactive layout with elements that follow the cursor, parallax scroll effects, and dynamic 3D tilting cards.",
    "anatomy": [
      {
        "label": "Interactive Layout Main Frame",
        "role": "Interactive Layout 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "page-sticky",
    "group": "Page Layouts",
    "title": "Page Sticky",
    "description": "스크롤과 관계없이 화면 특정 위치(예: 우측 하단 등)에 요소를 고정시키는 컨테이너",
    "prompt": "A preview of the Page Sticky component showing a floating action button fixed to the bottom right corner.",
    "anatomy": [
      {
        "label": "Page Sticky Main Frame",
        "role": "Page Sticky 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "page-scroller",
    "group": "Page Layouts",
    "title": "Page Scroller",
    "description": "스크롤이 내려갔을 때 클릭하면 최상단으로 부드럽게 올려주는 \"Top\" 버튼 컴포넌트",
    "prompt": "A preview of the Page Scroller component showing a scroll-to-top button appearing after scrolling down.",
    "anatomy": [
      {
        "label": "Page Scroller Main Frame",
        "role": "Page Scroller 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "dashboard-layout",
    "group": "Page Layouts",
    "title": "Dashboard Layout",
    "description": "어드민 패널 및 SaaS 앱에서 가장 많이 쓰이는 좌측 LNB + 상단 헤더 + 중앙 콘텐츠 형태의 레이아웃",
    "prompt": "A preview of a modern dashboard layout featuring a left sidebar navigation, top header bar, and a main content area with glassmorphism aesthetic.",
    "anatomy": [
      {
        "label": "Left Sidebar (LNB)",
        "role": "주요 메뉴 이동을 담당하는 좌측 고정 네비게이션입니다."
      },
      {
        "label": "Top Header",
        "role": "검색, 알림, 사용자 프로필 등을 포함하는 상단 고정 영역입니다."
      },
      {
        "label": "Main Content Area",
        "role": "선택된 메뉴의 실제 콘텐츠가 렌더링되는 중앙 핵심 영역입니다."
      }
    ]
  },
  {
    "id": "docs-layout",
    "group": "Page Layouts",
    "title": "Documentation Layout",
    "description": "개발자 문서, 가이드북에서 쓰이는 좌측 목차 + 중앙 본문 + 우측 페이지 내 탐색(TOC) 레이아웃",
    "prompt": "A preview of a documentation layout featuring a left sidebar for index, central main content, and right sidebar for table of contents (TOC).",
    "anatomy": [
      {
        "label": "Index Sidebar",
        "role": "전체 문서의 계층 구조를 보여주는 좌측 사이드바입니다."
      },
      {
        "label": "Document Body",
        "role": "실제 문서 내용이 길게 나열되는 넓은 중앙 영역입니다."
      },
      {
        "label": "TOC Sidebar",
        "role": "현재 보고 있는 문서의 헤딩 단위 목차를 보여주는 우측 사이드바입니다."
      }
    ]
  },
  {
    "id": "wizard-layout",
    "group": "Page Layouts",
    "title": "Multi-step Wizard Layout",
    "description": "복잡한 폼이나 설문을 단계별로 나눠서 진행할 수 있도록 돕는 순차적 레이아웃",
    "prompt": "A preview of a multi-step wizard layout featuring a top progress indicator, a central form step, and bottom navigation buttons.",
    "anatomy": [
      {
        "label": "Progress Indicator",
        "role": "현재 사용자가 몇 번째 단계를 진행 중인지 보여주는 상단 바입니다."
      },
      {
        "label": "Step Content",
        "role": "해당 단계에서 입력하거나 확인해야 할 요소들이 담기는 영역입니다."
      },
      {
        "label": "Action Buttons",
        "role": "이전/다음 혹은 완료 버튼이 위치한 하단 영역입니다."
      }
    ]
  },
  {
    "id": "feed-layout",
    "group": "Page Layouts",
    "title": "Feed Layout",
    "description": "소셜 미디어나 커뮤니티처럼 중앙에 세로로 끝없이 스크롤되는 콘텐츠를 담는 레이아웃",
    "prompt": "A preview of a social feed layout with a main scrolling column in the center and sticky sidebars for profile and suggestions.",
    "anatomy": [
      {
        "label": "Main Feed Column",
        "role": "새로운 게시물들이 끊임없이 나열되는 중앙 스크롤 영역입니다."
      },
      {
        "label": "Sticky Sidebars",
        "role": "프로필 요약이나 추천 친구 등을 보여주며 화면에 고정된 양측 영역입니다."
      }
    ]
  },
  {
    "id": "bottom-nav-layout",
    "group": "Page Layouts",
    "title": "Bottom Nav Layout",
    "description": "모바일 웹이나 PWA 앱에서 주로 사용하는 화면 하단 고정 탭 형태의 레이아웃",
    "prompt": "A preview of a mobile-first layout featuring a scrollable main area and a sticky bottom navigation bar with icons.",
    "anatomy": [
      {
        "label": "Scrollable View",
        "role": "모바일 화면 비율에 맞춰 세로로 스크롤 가능한 메인 화면입니다."
      },
      {
        "label": "Bottom Nav Bar",
        "role": "화면 최하단에 항상 고정되어 주요 탭을 이동할 수 있게 해주는 네비게이션 바입니다."
      }
    ]
  }
];
