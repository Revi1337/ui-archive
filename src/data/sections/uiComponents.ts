import type { UIItem } from "../../types";

export const uiComponents: UIItem[] = [
  {
    "id": "gnb",
    "group": "UI Components & Form Controls",
    "title": "Navigation Header (GNB)",
    "description": "최상단 네비게이션 바",
    "prompt": "Sticky global navigation bar (GNB) with a backdrop blur filter. Left-aligned logo, centered nav links, and right-aligned auth utilities.",
    "anatomy": [
      {
        "label": "Navigation Header (GNB) Main Frame",
        "role": "Navigation Header (GNB) 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "forms",
    "group": "UI Components & Form Controls",
    "title": "Form Fields & Inputs",
    "description": "사용자 인터랙션의 핵심 폼 영역",
    "prompt": "Modern form field group featuring floating labels, validation error messages with red text, a sleek toggle switch, and a segmented control.",
    "anatomy": [
      {
        "label": "Form Fields & Inputs Main Frame",
        "role": "Form Fields & Inputs 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "footer",
    "group": "UI Components & Form Controls",
    "title": "Footer",
    "description": "사이트맵과 저작권 표시 하단 영역",
    "prompt": "Comprehensive clean footer with a 4-column sitemap, social media icon group, newsletter subscription form, and bottom copyright terms line.",
    "anatomy": [
      {
        "label": "Footer Main Frame",
        "role": "Footer 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "search-bar",
    "group": "UI Components & Form Controls",
    "title": "Search Bar",
    "description": "검색을 위한 텍스트 입력 필드",
    "prompt": "A preview of the Search Bar component showing various states and styles.",
    "anatomy": [
      {
        "label": "Search Bar Main Frame",
        "role": "Search Bar 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "data-table",
    "group": "UI Components & Form Controls",
    "title": "Data Table",
    "description": "데이터를 체계적으로 보여주는 표",
    "prompt": "A preview of the Data Table component showing various states and styles.",
    "anatomy": [
      {
        "label": "Table Header",
        "role": "각 열의 데이터 유형을 명시하고, 클릭 시 오름차순/내림차순 정렬 기능을 제공합니다."
      },
      {
        "label": "Data Row",
        "role": "개별 데이터 레코드가 담기는 가로줄로, 마우스를 올리면 배경색이 변해 가독성을 높입니다."
      },
      {
        "label": "Sticky Column",
        "role": "가로로 길게 스크롤할 때 기준이 되는 첫 번째 열을 좌측에 단단히 고정시킵니다."
      },
      {
        "label": "Pagination Controls",
        "role": "수많은 데이터를 한 번에 보여주지 않고 여러 페이지로 나누어 탐색할 수 있게 합니다."
      }
    ]
  },
  {
    "id": "accordion",
    "group": "UI Components & Form Controls",
    "title": "Accordion",
    "description": "접고 펼칠 수 있는 아코디언 패널",
    "prompt": "A preview of the Accordion component showing various states and styles.",
    "anatomy": [
      {
        "label": "Accordion Main Frame",
        "role": "Accordion 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "star-rating",
    "group": "UI Components & Form Controls",
    "title": "Star Rating",
    "description": "리뷰 및 별점 표시 요소",
    "prompt": "A preview of the Star Rating component showing various states and styles.",
    "anatomy": [
      {
        "label": "Star Rating Main Frame",
        "role": "Star Rating 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "toggle-switch",
    "group": "UI Components & Form Controls",
    "title": "Toggle & Switch",
    "description": "켜짐/꺼짐 상태를 전환하는 스위치",
    "prompt": "A preview of the Toggle & Switch component showing various states and styles.",
    "anatomy": [
      {
        "label": "Hit Area",
        "role": "시각적인 컨트롤 요소보다 실제 클릭 가능한 영역을 더 넓게 잡아 터치를 돕는 투명 박스입니다."
      },
      {
        "label": "State Indicator",
        "role": "체크, 도트, 스위치 손잡이 등 현재의 On/Off 상태를 직접적으로 나타내는 그래픽 요소입니다."
      },
      {
        "label": "Selection Track",
        "role": "토글 스위치의 경우 손잡이가 이동할 수 있는 배경 레일 역할을 합니다."
      },
      {
        "label": "Interactive Label",
        "role": "컨트롤 요소 옆에 위치하며, 글자를 클릭해도 체크박스가 토글되도록 연결된 텍스트입니다."
      }
    ]
  },
  {
    "id": "divider",
    "group": "UI Components & Form Controls",
    "title": "Divider",
    "description": "콘텐츠 사이를 시각적으로 나누는 구분선",
    "prompt": "A preview of the Divider component showing various states and styles.",
    "anatomy": [
      {
        "label": "Divider Main Frame",
        "role": "Divider 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "icon-wrapper",
    "group": "UI Components & Form Controls",
    "title": "Icon Wrapper",
    "description": "규격화된 아이콘 컨테이너",
    "prompt": "A preview of the Icon Wrapper component showing various states and styles.",
    "anatomy": [
      {
        "label": "Icon Wrapper Main Frame",
        "role": "Icon Wrapper 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "social-proof",
    "group": "UI Components & Form Controls",
    "title": "Social Proof",
    "description": "신뢰도를 높이는 인증 마크 및 로고",
    "prompt": "A preview of the Social Proof component showing various states and styles.",
    "anatomy": [
      {
        "label": "Social Proof Main Frame",
        "role": "Social Proof 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "modal",
    "group": "UI Components & Form Controls",
    "title": "Modal Dialog",
    "description": "집중이 필요한 작업을 위한 오버레이 팝업",
    "prompt": "A preview of the Modal Dialog component showing various states and styles.",
    "anatomy": [
      {
        "label": "Dimmed Backdrop",
        "role": "배경 화면을 어둡게 처리하여 사용자의 시선을 팝업 중앙으로 완벽히 집중시킵니다."
      },
      {
        "label": "Modal Dialog Surface",
        "role": "실제 콘텐츠가 담기는 하얀색 또는 짙은 색상의 모달 본체 패널입니다."
      },
      {
        "label": "Dialog Header",
        "role": "팝업의 목적을 알리는 제목과 닫기(X) 버튼이 위치한 상단 영역입니다."
      },
      {
        "label": "Scrollable Body",
        "role": "내용이 길어질 경우 팝업 전체가 아닌 내부만 스크롤되게 막아주는 본문 구역입니다."
      },
      {
        "label": "Action Footer",
        "role": "최종적으로 취소, 확인 등 결정을 내리는 버튼들이 우측으로 정렬된 하단 바입니다."
      }
    ]
  },
  {
    "id": "dropdown",
    "group": "UI Components & Form Controls",
    "title": "Dropdown Select",
    "description": "클릭 시 펼쳐지는 선택 옵션 메뉴",
    "prompt": "A preview of the Dropdown Select component showing various states and styles.",
    "anatomy": [
      {
        "label": "Dropdown Select Trigger",
        "role": "클릭 시 하위 메뉴를 띄워주는 기준점이 되는 버튼 혹은 인풋 영역입니다."
      },
      {
        "label": "Options Popover",
        "role": "메인 화면 위에 떠서 여러 가지 선택지를 나열해주는 오버레이 패널입니다."
      },
      {
        "label": "Selectable Item",
        "role": "마우스 호버 시 배경색이 변하며 선택 가능함을 시각적으로 알려주는 개별 항목입니다."
      },
      {
        "label": "Active Indicator",
        "role": "현재 선택되어 있는 옵션 옆에 나타나는 체크마크(✓) 기호입니다."
      },
      {
        "label": "Scroll Mask",
        "role": "옵션 개수가 많을 때 내부적으로만 스크롤되도록 영역을 제한하는 마스킹 레이어입니다."
      }
    ]
  },
  {
    "id": "checkbox-radio",
    "group": "UI Components & Form Controls",
    "title": "Checkbox & Radio",
    "description": "단일 및 다중 선택을 위한 폼 컨트롤",
    "prompt": "A preview of the Checkbox & Radio component showing various states and styles.",
    "anatomy": [
      {
        "label": "Hit Area",
        "role": "시각적인 컨트롤 요소보다 실제 클릭 가능한 영역을 더 넓게 잡아 터치를 돕는 투명 박스입니다."
      },
      {
        "label": "State Indicator",
        "role": "체크, 도트, 스위치 손잡이 등 현재의 On/Off 상태를 직접적으로 나타내는 그래픽 요소입니다."
      },
      {
        "label": "Selection Track",
        "role": "토글 스위치의 경우 손잡이가 이동할 수 있는 배경 레일 역할을 합니다."
      },
      {
        "label": "Interactive Label",
        "role": "컨트롤 요소 옆에 위치하며, 글자를 클릭해도 체크박스가 토글되도록 연결된 텍스트입니다."
      }
    ]
  },
  {
    "id": "breadcrumb",
    "group": "UI Components & Form Controls",
    "title": "Breadcrumb",
    "description": "계층적 이동 경로를 보여주는 네비게이션",
    "prompt": "A preview of the Breadcrumb component showing various states and styles.",
    "anatomy": [
      {
        "label": "Breadcrumb Navigation Bar",
        "role": "여러 개의 섹션 이동 버튼들을 한 줄로 가지런히 정렬해주는 컨테이너입니다."
      },
      {
        "label": "Active Item",
        "role": "현재 사용자가 위치한 탭이나 단계를 강조된 색상과 굵은 글씨로 구별해줍니다."
      },
      {
        "label": "Inactive Item",
        "role": "아직 도달하지 않았거나 선택되지 않은 항목들을 옅은 색상으로 표시합니다."
      },
      {
        "label": "Active Indicator Line",
        "role": "현재 선택된 탭 바로 아래에 위치하여 부드럽게 이동하는 하단 강조선입니다."
      }
    ]
  },
  {
    "id": "progress-bar",
    "group": "UI Components & Form Controls",
    "title": "Progress Bar",
    "description": "작업 완료 상태를 보여주는 진행 바",
    "prompt": "A preview of the Progress Bar component showing various states and styles.",
    "anatomy": [
      {
        "label": "Progress Bar Track",
        "role": "로딩이 진행될 전체 영역이나 스켈레톤의 기본 뼈대를 그리는 베이스 배경입니다."
      },
      {
        "label": "Animated Indicator",
        "role": "로딩 중임을 알리기 위해 지속적으로 회전하거나 깜빡이는 동적 하이라이트 레이어입니다."
      },
      {
        "label": "Value Label",
        "role": "정확한 로딩 퍼센트나 남은 시간 등을 텍스트로 표시하는 보조 정보란입니다."
      }
    ]
  },
  {
    "id": "toast",
    "group": "UI Components & Form Controls",
    "title": "Toast Notification",
    "description": "잠시 나타났다 사라지는 상태 알림 토스트",
    "prompt": "A preview of the Toast Notification component showing various states and styles.",
    "anatomy": [
      {
        "label": "Message Surface",
        "role": "성공(초록), 경고(노랑), 에러(빨강) 등 메시지의 성격에 따라 배경색이 변하는 패널입니다."
      },
      {
        "label": "Status Icon",
        "role": "텍스트를 읽지 않아도 직관적으로 상황을 파악할 수 있게 돕는 좌측 아이콘입니다."
      },
      {
        "label": "Action Button",
        "role": "문제를 해결하거나 변경사항을 되돌릴(Undo) 수 있는 상호작용 요소입니다."
      },
      {
        "label": "Dismiss Trigger",
        "role": "일정 시간이 지나기 전에 사용자가 수동으로 알림을 끌 수 있는 닫기 아이콘입니다."
      }
    ]
  },
  {
    "id": "ajax-bar",
    "group": "UI Components & Form Controls",
    "title": "Ajax Bar",
    "description": "Ajax 요청 시 상단에 표시되는 얇은 진행 로딩 바",
    "prompt": "A preview of the Ajax Bar component showing various states and styles.",
    "anatomy": [
      {
        "label": "Ajax Bar Main Frame",
        "role": "Ajax Bar 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "avatar",
    "group": "UI Components & Form Controls",
    "title": "Avatar",
    "description": "프로필 이미지, 아이콘, 텍스트를 담는 동그란 아바타",
    "prompt": "A preview of the Avatar component showing various states and styles.",
    "anatomy": [
      {
        "label": "Avatar Boundary",
        "role": "원형 또는 둥근 사각형 등 요소를 작고 밀도 있게 감싸는 외곽 형태입니다."
      },
      {
        "label": "Core Content",
        "role": "사용자의 프로필 이미지, 이니셜, 혹은 짧은 태그 텍스트가 실제로 보여지는 영역입니다."
      },
      {
        "label": "Status Dot",
        "role": "온라인 여부나 새로운 알림 존재 여부를 나타내는 우측 상단의 작은 배지입니다."
      },
      {
        "label": "Dismiss Action",
        "role": "태그나 칩을 목록에서 지울 수 있게 해주는 우측 끝의 자그마한 X 버튼입니다."
      }
    ]
  },
  {
    "id": "badge",
    "group": "UI Components & Form Controls",
    "title": "Badge",
    "description": "숫자나 짧은 라벨을 보여주는 강조 배지",
    "prompt": "A preview of the Badge component showing various states and styles.",
    "anatomy": [
      {
        "label": "Badge Boundary",
        "role": "원형 또는 둥근 사각형 등 요소를 작고 밀도 있게 감싸는 외곽 형태입니다."
      },
      {
        "label": "Core Content",
        "role": "사용자의 프로필 이미지, 이니셜, 혹은 짧은 태그 텍스트가 실제로 보여지는 영역입니다."
      },
      {
        "label": "Status Dot",
        "role": "온라인 여부나 새로운 알림 존재 여부를 나타내는 우측 상단의 작은 배지입니다."
      },
      {
        "label": "Dismiss Action",
        "role": "태그나 칩을 목록에서 지울 수 있게 해주는 우측 끝의 자그마한 X 버튼입니다."
      }
    ]
  },
  {
    "id": "banner",
    "group": "UI Components & Form Controls",
    "title": "Banner",
    "description": "중요한 알림 및 메시지와 액션 버튼을 제공하는 배너",
    "prompt": "A preview of the Banner component showing various states and styles.",
    "anatomy": [
      {
        "label": "Message Surface",
        "role": "성공(초록), 경고(노랑), 에러(빨강) 등 메시지의 성격에 따라 배경색이 변하는 패널입니다."
      },
      {
        "label": "Status Icon",
        "role": "텍스트를 읽지 않아도 직관적으로 상황을 파악할 수 있게 돕는 좌측 아이콘입니다."
      },
      {
        "label": "Action Button",
        "role": "문제를 해결하거나 변경사항을 되돌릴(Undo) 수 있는 상호작용 요소입니다."
      },
      {
        "label": "Dismiss Trigger",
        "role": "일정 시간이 지나기 전에 사용자가 수동으로 알림을 끌 수 있는 닫기 아이콘입니다."
      }
    ]
  },
  {
    "id": "bar",
    "group": "UI Components & Form Controls",
    "title": "Bar",
    "description": "운영체제 창 스타일의 소형 상단 바",
    "prompt": "A preview of the Bar component showing various states and styles.",
    "anatomy": [
      {
        "label": "Bar Main Frame",
        "role": "Bar 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "breadcrumbs",
    "group": "UI Components & Form Controls",
    "title": "Breadcrumbs",
    "description": "사이트 내 현재 위치 경로 표시 네비게이션",
    "prompt": "A preview of the Breadcrumbs component showing various states and styles.",
    "anatomy": [
      {
        "label": "Breadcrumbs Navigation Bar",
        "role": "여러 개의 섹션 이동 버튼들을 한 줄로 가지런히 정렬해주는 컨테이너입니다."
      },
      {
        "label": "Active Item",
        "role": "현재 사용자가 위치한 탭이나 단계를 강조된 색상과 굵은 글씨로 구별해줍니다."
      },
      {
        "label": "Inactive Item",
        "role": "아직 도달하지 않았거나 선택되지 않은 항목들을 옅은 색상으로 표시합니다."
      },
      {
        "label": "Active Indicator Line",
        "role": "현재 선택된 탭 바로 아래에 위치하여 부드럽게 이동하는 하단 강조선입니다."
      }
    ]
  },
  {
    "id": "button",
    "group": "UI Components & Form Controls",
    "title": "Button",
    "description": "클릭 이벤트를 처리하는 다기능 버튼",
    "prompt": "A preview of the Button component showing various states and styles.",
    "anatomy": [
      {
        "label": "Button Surface",
        "role": "클릭 가능한 영역의 뼈대이자, 마우스 호버 시 밝기가 변하는 메인 바디입니다."
      },
      {
        "label": "Ripple Effect",
        "role": "클릭하는 순간 터치 지점에서부터 둥글게 퍼져나가는 잉크 파동 애니메이션입니다."
      },
      {
        "label": "Leading Icon",
        "role": "텍스트 라벨 좌측에 위치하여 버튼의 목적을 직관적으로 보조하는 아이콘입니다."
      },
      {
        "label": "Action Label",
        "role": "버튼이 수행할 핵심 동작을 명확하게 텍스트로 전달하는 타이포그래피 영역입니다."
      }
    ]
  },
  {
    "id": "button-group",
    "group": "UI Components & Form Controls",
    "title": "Button Group",
    "description": "여러 버튼을 둥글게 하나로 묶어주는 버튼 그룹",
    "prompt": "A preview of the Button Group component showing various states and styles.",
    "anatomy": [
      {
        "label": "Button Group Surface",
        "role": "클릭 가능한 영역의 뼈대이자, 마우스 호버 시 밝기가 변하는 메인 바디입니다."
      },
      {
        "label": "Ripple Effect",
        "role": "클릭하는 순간 터치 지점에서부터 둥글게 퍼져나가는 잉크 파동 애니메이션입니다."
      },
      {
        "label": "Leading Icon",
        "role": "텍스트 라벨 좌측에 위치하여 버튼의 목적을 직관적으로 보조하는 아이콘입니다."
      },
      {
        "label": "Action Label",
        "role": "버튼이 수행할 핵심 동작을 명확하게 텍스트로 전달하는 타이포그래피 영역입니다."
      }
    ]
  },
  {
    "id": "button-dropdown",
    "group": "UI Components & Form Controls",
    "title": "Button Dropdown",
    "description": "클릭 시 하위 메뉴 리스트가 펼쳐지는 드롭다운 버튼",
    "prompt": "A preview of the Button Dropdown component showing various states and styles.",
    "anatomy": [
      {
        "label": "Button Dropdown Trigger",
        "role": "클릭 시 하위 메뉴를 띄워주는 기준점이 되는 버튼 혹은 인풋 영역입니다."
      },
      {
        "label": "Options Popover",
        "role": "메인 화면 위에 떠서 여러 가지 선택지를 나열해주는 오버레이 패널입니다."
      },
      {
        "label": "Selectable Item",
        "role": "마우스 호버 시 배경색이 변하며 선택 가능함을 시각적으로 알려주는 개별 항목입니다."
      },
      {
        "label": "Active Indicator",
        "role": "현재 선택되어 있는 옵션 옆에 나타나는 체크마크(✓) 기호입니다."
      },
      {
        "label": "Scroll Mask",
        "role": "옵션 개수가 많을 때 내부적으로만 스크롤되도록 영역을 제한하는 마스킹 레이어입니다."
      }
    ]
  },
  {
    "id": "card",
    "group": "UI Components & Form Controls",
    "title": "Card",
    "description": "이미지, 텍스트, 액션을 보기 좋게 그룹화하는 카드 컨테이너",
    "prompt": "A preview of the Card component showing various states and styles.",
    "anatomy": [
      {
        "label": "Card Container",
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
    "id": "carousel",
    "group": "UI Components & Form Controls",
    "title": "Carousel",
    "description": "이미지나 카드 콘텐츠를 슬라이드로 전환하며 보여주는 캐러셀",
    "prompt": "A preview of the Carousel component showing various states and styles.",
    "anatomy": [
      {
        "label": "Viewport Frame",
        "role": "현재 활성화된 하나의 콘텐츠만 보여주고 나머지는 숨기는 창문 역할을 합니다."
      },
      {
        "label": "Slide Content",
        "role": "이미지나 비디오 등 캐러셀 안에서 부드럽게 좌우로 전환되는 실제 내용물입니다."
      },
      {
        "label": "Navigation Arrows",
        "role": "이전 혹은 다음 슬라이드로 넘어갈 수 있게 좌/우측 가장자리에 뜨는 버튼입니다."
      },
      {
        "label": "Pagination Dots",
        "role": "전체 슬라이드 개수와 현재 보고 있는 슬라이드의 순서를 점 형태로 안내합니다."
      }
    ]
  },
  {
    "id": "chat-message",
    "group": "UI Components & Form Controls",
    "title": "Chat Message",
    "description": "메신저 대화 말풍선 UI",
    "prompt": "A preview of the Chat Message component showing various states and styles.",
    "anatomy": [
      {
        "label": "Chat Message Main Frame",
        "role": "Chat Message 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "chip",
    "group": "UI Components & Form Controls",
    "title": "Chip",
    "description": "선택, 삭제가 가능한 소형 태그 칩",
    "prompt": "A preview of the Chip component showing various states and styles.",
    "anatomy": [
      {
        "label": "Chip Boundary",
        "role": "원형 또는 둥근 사각형 등 요소를 작고 밀도 있게 감싸는 외곽 형태입니다."
      },
      {
        "label": "Core Content",
        "role": "사용자의 프로필 이미지, 이니셜, 혹은 짧은 태그 텍스트가 실제로 보여지는 영역입니다."
      },
      {
        "label": "Status Dot",
        "role": "온라인 여부나 새로운 알림 존재 여부를 나타내는 우측 상단의 작은 배지입니다."
      },
      {
        "label": "Dismiss Action",
        "role": "태그나 칩을 목록에서 지울 수 있게 해주는 우측 끝의 자그마한 X 버튼입니다."
      }
    ]
  },
  {
    "id": "circular-progress",
    "group": "UI Components & Form Controls",
    "title": "Circular Progress",
    "description": "원형으로 빙글빙글 도는 진행 상태 바",
    "prompt": "A preview of the Circular Progress component showing various states and styles.",
    "anatomy": [
      {
        "label": "Circular Progress Track",
        "role": "로딩이 진행될 전체 영역이나 스켈레톤의 기본 뼈대를 그리는 베이스 배경입니다."
      },
      {
        "label": "Animated Indicator",
        "role": "로딩 중임을 알리기 위해 지속적으로 회전하거나 깜빡이는 동적 하이라이트 레이어입니다."
      },
      {
        "label": "Value Label",
        "role": "정확한 로딩 퍼센트나 남은 시간 등을 텍스트로 표시하는 보조 정보란입니다."
      }
    ]
  },
  {
    "id": "dialog",
    "group": "UI Components & Form Controls",
    "title": "Dialog",
    "description": "사용자 확인이나 추가 입력을 받기 위한 모달 팝업 창",
    "prompt": "A preview of the Dialog component showing various states and styles.",
    "anatomy": [
      {
        "label": "Dimmed Backdrop",
        "role": "배경 화면을 어둡게 처리하여 사용자의 시선을 팝업 중앙으로 완벽히 집중시킵니다."
      },
      {
        "label": "Dialog Surface",
        "role": "실제 콘텐츠가 담기는 하얀색 또는 짙은 색상의 모달 본체 패널입니다."
      },
      {
        "label": "Dialog Header",
        "role": "팝업의 목적을 알리는 제목과 닫기(X) 버튼이 위치한 상단 영역입니다."
      },
      {
        "label": "Scrollable Body",
        "role": "내용이 길어질 경우 팝업 전체가 아닌 내부만 스크롤되게 막아주는 본문 구역입니다."
      },
      {
        "label": "Action Footer",
        "role": "최종적으로 취소, 확인 등 결정을 내리는 버튼들이 우측으로 정렬된 하단 바입니다."
      }
    ]
  },
  {
    "id": "editor",
    "group": "UI Components & Form Controls",
    "title": "Editor - WYSIWYG",
    "description": "글자 스타일 조절이 가능한 자체 텍스트 에디터",
    "prompt": "A preview of the Editor - WYSIWYG component showing various states and styles.",
    "anatomy": [
      {
        "label": "Editor - WYSIWYG Field Wrapper",
        "role": "사용자의 텍스트 입력 영역 전체를 감싸는 포커스 가능 컨테이너입니다."
      },
      {
        "label": "Floating Label",
        "role": "입력창 안쪽에 위치하다가 포커스 시 위로 부드럽게 줄어들며 이동하는 라벨입니다."
      },
      {
        "label": "Value Area",
        "role": "실제 데이터가 기입되고 화면에 그려지는 텍스트 렌더링 뷰포트입니다."
      },
      {
        "label": "Validation Message",
        "role": "입력 조건 미달 시 하단에 붉은색 글씨로 나타나는 에러/경고 안내 문구입니다."
      },
      {
        "label": "Clear / Reveal Icon",
        "role": "텍스트를 일괄 삭제하거나, 비밀번호의 경우 마스킹을 해제하는 보조 아이콘 버튼입니다."
      }
    ]
  },
  {
    "id": "expansion-item",
    "group": "UI Components & Form Controls",
    "title": "Expansion Item",
    "description": "클릭 시 세부 내용을 아래로 펼쳐주는 아코디언 컴포넌트",
    "prompt": "A preview of the Expansion Item component showing various states and styles.",
    "anatomy": [
      {
        "label": "Expansion Item Main Frame",
        "role": "Expansion Item 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "fab",
    "group": "UI Components & Form Controls",
    "title": "Floating Action Button (FAB)",
    "description": "화면에 둥둥 떠서 주요 액션을 펼쳐주는 플로팅 버튼",
    "prompt": "A preview of the Floating Action Button (FAB) component showing various states and styles.",
    "anatomy": [
      {
        "label": "Floating Action Button (FAB) Surface",
        "role": "클릭 가능한 영역의 뼈대이자, 마우스 호버 시 밝기가 변하는 메인 바디입니다."
      },
      {
        "label": "Ripple Effect",
        "role": "클릭하는 순간 터치 지점에서부터 둥글게 퍼져나가는 잉크 파동 애니메이션입니다."
      },
      {
        "label": "Leading Icon",
        "role": "텍스트 라벨 좌측에 위치하여 버튼의 목적을 직관적으로 보조하는 아이콘입니다."
      },
      {
        "label": "Action Label",
        "role": "버튼이 수행할 핵심 동작을 명확하게 텍스트로 전달하는 타이포그래피 영역입니다."
      }
    ]
  },
  {
    "id": "icon",
    "group": "UI Components & Form Controls",
    "title": "Icon",
    "description": "웹 아이콘 폰트를 손쉽게 삽입하는 컴포넌트",
    "prompt": "A preview of the Icon component showing various states and styles.",
    "anatomy": [
      {
        "label": "Icon Main Frame",
        "role": "Icon 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "img",
    "group": "UI Components & Form Controls",
    "title": "Img",
    "description": "반응형 비율 유지, 로딩 플레이스홀더를 지원하는 이미지 컴포넌트",
    "prompt": "A preview of the Img component showing various states and styles.",
    "anatomy": [
      {
        "label": "Img Main Frame",
        "role": "Img 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "infinite-scroll",
    "group": "UI Components & Form Controls",
    "title": "Infinite Scroll",
    "description": "스크롤 시 데이터를 계속해서 추가로 불러오는 무한 스크롤",
    "prompt": "A preview of the Infinite Scroll component showing various states and styles.",
    "anatomy": [
      {
        "label": "Infinite Scroll Main Frame",
        "role": "Infinite Scroll 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "inner-loading",
    "group": "UI Components & Form Controls",
    "title": "Inner Loading",
    "description": "특정 컴포넌트 영역 내부에만 띄우는 부분 로딩 스피너",
    "prompt": "A preview of the Inner Loading component showing various states and styles.",
    "anatomy": [
      {
        "label": "Inner Loading Main Frame",
        "role": "Inner Loading 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "intersection",
    "group": "UI Components & Form Controls",
    "title": "Intersection",
    "description": "뷰포트 진입 여부에 따라 화면에 그리거나 애니메이션을 주는 컴포넌트",
    "prompt": "A preview of the Intersection component showing various states and styles.",
    "anatomy": [
      {
        "label": "Intersection Main Frame",
        "role": "Intersection 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "linear-progress",
    "group": "UI Components & Form Controls",
    "title": "Linear Progress",
    "description": "막대기 형태의 선형 진행 상태 바",
    "prompt": "A preview of the Linear Progress component showing various states and styles.",
    "anatomy": [
      {
        "label": "Linear Progress Track",
        "role": "로딩이 진행될 전체 영역이나 스켈레톤의 기본 뼈대를 그리는 베이스 배경입니다."
      },
      {
        "label": "Animated Indicator",
        "role": "로딩 중임을 알리기 위해 지속적으로 회전하거나 깜빡이는 동적 하이라이트 레이어입니다."
      },
      {
        "label": "Value Label",
        "role": "정확한 로딩 퍼센트나 남은 시간 등을 텍스트로 표시하는 보조 정보란입니다."
      }
    ]
  },
  {
    "id": "list",
    "group": "UI Components & Form Controls",
    "title": "List & List Items",
    "description": "수직 목록 및 메뉴 리스트 구성 컴포넌트",
    "prompt": "A preview of the List & List Items component showing various states and styles.",
    "anatomy": [
      {
        "label": "List & List Items Main Frame",
        "role": "List & List Items 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "markup-table",
    "group": "UI Components & Form Controls",
    "title": "Markup Table",
    "description": "디자인이 가미된 기본 HTML 테이블 래퍼",
    "prompt": "A preview of the Markup Table component showing various states and styles.",
    "anatomy": [
      {
        "label": "Table Header",
        "role": "각 열의 데이터 유형을 명시하고, 클릭 시 오름차순/내림차순 정렬 기능을 제공합니다."
      },
      {
        "label": "Data Row",
        "role": "개별 데이터 레코드가 담기는 가로줄로, 마우스를 올리면 배경색이 변해 가독성을 높입니다."
      },
      {
        "label": "Sticky Column",
        "role": "가로로 길게 스크롤할 때 기준이 되는 첫 번째 열을 좌측에 단단히 고정시킵니다."
      },
      {
        "label": "Pagination Controls",
        "role": "수많은 데이터를 한 번에 보여주지 않고 여러 페이지로 나누어 탐색할 수 있게 합니다."
      }
    ]
  },
  {
    "id": "menu",
    "group": "UI Components & Form Controls",
    "title": "Menu",
    "description": "클릭 시 해당 위치에 띄우는 드롭다운 메뉴/콘텍스트 메뉴",
    "prompt": "A preview of the Menu component showing various states and styles.",
    "anatomy": [
      {
        "label": "Menu Trigger",
        "role": "클릭 시 하위 메뉴를 띄워주는 기준점이 되는 버튼 혹은 인풋 영역입니다."
      },
      {
        "label": "Options Popover",
        "role": "메인 화면 위에 떠서 여러 가지 선택지를 나열해주는 오버레이 패널입니다."
      },
      {
        "label": "Selectable Item",
        "role": "마우스 호버 시 배경색이 변하며 선택 가능함을 시각적으로 알려주는 개별 항목입니다."
      },
      {
        "label": "Active Indicator",
        "role": "현재 선택되어 있는 옵션 옆에 나타나는 체크마크(✓) 기호입니다."
      },
      {
        "label": "Scroll Mask",
        "role": "옵션 개수가 많을 때 내부적으로만 스크롤되도록 영역을 제한하는 마스킹 레이어입니다."
      }
    ]
  },
  {
    "id": "no-ssr",
    "group": "UI Components & Form Controls",
    "title": "No SSR",
    "description": "SSR(서버사이드 렌더링) 시점에는 렌더링을 건너뛰도록 하는 컨테이너",
    "prompt": "A preview of the No SSR component showing various states and styles.",
    "anatomy": [
      {
        "label": "No SSR Main Frame",
        "role": "No SSR 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "resize-observer",
    "group": "UI Components & Form Controls",
    "title": "Resize Observer",
    "description": "감싸고 있는 요소의 크기 변화를 감지하는 투명 감지기",
    "prompt": "A preview of the Resize Observer component showing various states and styles.",
    "anatomy": [
      {
        "label": "Resize Observer Main Frame",
        "role": "Resize Observer 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "scroll-observer",
    "group": "UI Components & Form Controls",
    "title": "Scroll Observer",
    "description": "스크롤 위치 변화를 감지해 이벤트를 주는 감지기",
    "prompt": "A preview of the Scroll Observer component showing various states and styles.",
    "anatomy": [
      {
        "label": "Scroll Observer Main Frame",
        "role": "Scroll Observer 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "pagination",
    "group": "UI Components & Form Controls",
    "title": "Pagination",
    "description": "페이지 번호를 선택하여 넘기는 네비게이션",
    "prompt": "A preview of the Pagination component showing various states and styles.",
    "anatomy": [
      {
        "label": "Pagination Main Frame",
        "role": "Pagination 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "parallax",
    "group": "UI Components & Form Controls",
    "title": "Parallax",
    "description": "스크롤 시 입체감을 주는 배경 패럴랙스 효과",
    "prompt": "A preview of the Parallax component showing various states and styles.",
    "anatomy": [
      {
        "label": "Parallax Main Frame",
        "role": "Parallax 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "popup-edit",
    "group": "UI Components & Form Controls",
    "title": "Popup Edit",
    "description": "클릭 시 즉석에서 입력 필드로 변환해 데이터를 수정하는 팝업",
    "prompt": "A preview of the Popup Edit component showing various states and styles.",
    "anatomy": [
      {
        "label": "Dimmed Backdrop",
        "role": "배경 화면을 어둡게 처리하여 사용자의 시선을 팝업 중앙으로 완벽히 집중시킵니다."
      },
      {
        "label": "Popup Edit Surface",
        "role": "실제 콘텐츠가 담기는 하얀색 또는 짙은 색상의 모달 본체 패널입니다."
      },
      {
        "label": "Dialog Header",
        "role": "팝업의 목적을 알리는 제목과 닫기(X) 버튼이 위치한 상단 영역입니다."
      },
      {
        "label": "Scrollable Body",
        "role": "내용이 길어질 경우 팝업 전체가 아닌 내부만 스크롤되게 막아주는 본문 구역입니다."
      },
      {
        "label": "Action Footer",
        "role": "최종적으로 취소, 확인 등 결정을 내리는 버튼들이 우측으로 정렬된 하단 바입니다."
      }
    ]
  },
  {
    "id": "popup-proxy",
    "group": "UI Components & Form Controls",
    "title": "Popup Proxy",
    "description": "모바일에선 다이얼로그, 데스크톱에선 메뉴로 보여주는 스마트 팝업",
    "prompt": "A preview of the Popup Proxy component showing various states and styles.",
    "anatomy": [
      {
        "label": "Dimmed Backdrop",
        "role": "배경 화면을 어둡게 처리하여 사용자의 시선을 팝업 중앙으로 완벽히 집중시킵니다."
      },
      {
        "label": "Popup Proxy Surface",
        "role": "실제 콘텐츠가 담기는 하얀색 또는 짙은 색상의 모달 본체 패널입니다."
      },
      {
        "label": "Dialog Header",
        "role": "팝업의 목적을 알리는 제목과 닫기(X) 버튼이 위치한 상단 영역입니다."
      },
      {
        "label": "Scrollable Body",
        "role": "내용이 길어질 경우 팝업 전체가 아닌 내부만 스크롤되게 막아주는 본문 구역입니다."
      },
      {
        "label": "Action Footer",
        "role": "최종적으로 취소, 확인 등 결정을 내리는 버튼들이 우측으로 정렬된 하단 바입니다."
      }
    ]
  },
  {
    "id": "pull-to-refresh",
    "group": "UI Components & Form Controls",
    "title": "Pull to Refresh",
    "description": "화면을 아래로 당겨 데이터를 새로고침하는 당김 제스처 컴포넌트",
    "prompt": "A preview of the Pull to Refresh component showing various states and styles.",
    "anatomy": [
      {
        "label": "Pull to Refresh Main Frame",
        "role": "Pull to Refresh 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "responsive",
    "group": "UI Components & Form Controls",
    "title": "Responsive",
    "description": "16:9, 4:3 등 특정 화면 비율을 고정하여 반응하는 컨테이너",
    "prompt": "A preview of the Responsive component showing various states and styles.",
    "anatomy": [
      {
        "label": "Responsive Main Frame",
        "role": "Responsive 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "scroll-area",
    "group": "UI Components & Form Controls",
    "title": "Scroll Area",
    "description": "스크롤바 디자인을 입힌 스크롤 전용 영역",
    "prompt": "A preview of the Scroll Area component showing various states and styles.",
    "anatomy": [
      {
        "label": "Scroll Area Main Frame",
        "role": "Scroll Area 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "separator",
    "group": "UI Components & Form Controls",
    "title": "Separator",
    "description": "구성 요소들을 구분하는 얇은 구분선",
    "prompt": "A preview of the Separator component showing various states and styles.",
    "anatomy": [
      {
        "label": "Separator Main Frame",
        "role": "Separator 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "skeleton",
    "group": "UI Components & Form Controls",
    "title": "Skeleton",
    "description": "데이터 로딩 중임을 시각적으로 보여주는 스켈레톤 UI",
    "prompt": "A preview of the Skeleton component showing various states and styles.",
    "anatomy": [
      {
        "label": "Skeleton Track",
        "role": "로딩이 진행될 전체 영역이나 스켈레톤의 기본 뼈대를 그리는 베이스 배경입니다."
      },
      {
        "label": "Animated Indicator",
        "role": "로딩 중임을 알리기 위해 지속적으로 회전하거나 깜빡이는 동적 하이라이트 레이어입니다."
      },
      {
        "label": "Value Label",
        "role": "정확한 로딩 퍼센트나 남은 시간 등을 텍스트로 표시하는 보조 정보란입니다."
      }
    ]
  },
  {
    "id": "slide-item",
    "group": "UI Components & Form Controls",
    "title": "Slide Item",
    "description": "왼쪽이나 오른쪽으로 스와이프(드래그)하여 액션을 취하는 리스트 아이템",
    "prompt": "A preview of the Slide Item component showing various states and styles.",
    "anatomy": [
      {
        "label": "Viewport Frame",
        "role": "현재 활성화된 하나의 콘텐츠만 보여주고 나머지는 숨기는 창문 역할을 합니다."
      },
      {
        "label": "Slide Content",
        "role": "이미지나 비디오 등 캐러셀 안에서 부드럽게 좌우로 전환되는 실제 내용물입니다."
      },
      {
        "label": "Navigation Arrows",
        "role": "이전 혹은 다음 슬라이드로 넘어갈 수 있게 좌/우측 가장자리에 뜨는 버튼입니다."
      },
      {
        "label": "Pagination Dots",
        "role": "전체 슬라이드 개수와 현재 보고 있는 슬라이드의 순서를 점 형태로 안내합니다."
      }
    ]
  },
  {
    "id": "slide-transition",
    "group": "UI Components & Form Controls",
    "title": "Slide Transition",
    "description": "요소를 부드럽게 위아래로 미끄러지듯 노출/숨김 처리하는 트랜지션",
    "prompt": "A preview of the Slide Transition component showing various states and styles.",
    "anatomy": [
      {
        "label": "Viewport Frame",
        "role": "현재 활성화된 하나의 콘텐츠만 보여주고 나머지는 숨기는 창문 역할을 합니다."
      },
      {
        "label": "Slide Content",
        "role": "이미지나 비디오 등 캐러셀 안에서 부드럽게 좌우로 전환되는 실제 내용물입니다."
      },
      {
        "label": "Navigation Arrows",
        "role": "이전 혹은 다음 슬라이드로 넘어갈 수 있게 좌/우측 가장자리에 뜨는 버튼입니다."
      },
      {
        "label": "Pagination Dots",
        "role": "전체 슬라이드 개수와 현재 보고 있는 슬라이드의 순서를 점 형태로 안내합니다."
      }
    ]
  },
  {
    "id": "space",
    "group": "UI Components & Form Controls",
    "title": "Space",
    "description": "Flex 구조에서 남는 공간을 자동으로 채워주는 여백 요소",
    "prompt": "A preview of the Space component showing various states and styles.",
    "anatomy": [
      {
        "label": "Space Main Frame",
        "role": "Space 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "spinners",
    "group": "UI Components & Form Controls",
    "title": "Spinners",
    "description": "다양한 형태의 대기용 로딩 스피너",
    "prompt": "A preview of the Spinners component showing various states and styles.",
    "anatomy": [
      {
        "label": "Spinners Track",
        "role": "로딩이 진행될 전체 영역이나 스켈레톤의 기본 뼈대를 그리는 베이스 배경입니다."
      },
      {
        "label": "Animated Indicator",
        "role": "로딩 중임을 알리기 위해 지속적으로 회전하거나 깜빡이는 동적 하이라이트 레이어입니다."
      },
      {
        "label": "Value Label",
        "role": "정확한 로딩 퍼센트나 남은 시간 등을 텍스트로 표시하는 보조 정보란입니다."
      }
    ]
  },
  {
    "id": "splitter",
    "group": "UI Components & Form Controls",
    "title": "Splitter",
    "description": "경계선을 조작해 두 영역의 가로/세로 비율을 조절하는 분할창",
    "prompt": "A preview of the Splitter component showing various states and styles.",
    "anatomy": [
      {
        "label": "Splitter Main Frame",
        "role": "Splitter 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "stepper",
    "group": "UI Components & Form Controls",
    "title": "Stepper",
    "description": "여러 단계(Step)의 흐름으로 이루어진 폼이나 안내 컴포넌트",
    "prompt": "A preview of the Stepper component showing various states and styles.",
    "anatomy": [
      {
        "label": "Stepper Navigation Bar",
        "role": "여러 개의 섹션 이동 버튼들을 한 줄로 가지런히 정렬해주는 컨테이너입니다."
      },
      {
        "label": "Active Item",
        "role": "현재 사용자가 위치한 탭이나 단계를 강조된 색상과 굵은 글씨로 구별해줍니다."
      },
      {
        "label": "Inactive Item",
        "role": "아직 도달하지 않았거나 선택되지 않은 항목들을 옅은 색상으로 표시합니다."
      },
      {
        "label": "Active Indicator Line",
        "role": "현재 선택된 탭 바로 아래에 위치하여 부드럽게 이동하는 하단 강조선입니다."
      }
    ]
  },
  {
    "id": "table",
    "group": "UI Components & Form Controls",
    "title": "Table",
    "description": "정렬, 필터, 검색, 페이징 기능이 탑재된 데이터 테이블",
    "prompt": "A preview of the Table component showing various states and styles.",
    "anatomy": [
      {
        "label": "Table Header",
        "role": "각 열의 데이터 유형을 명시하고, 클릭 시 오름차순/내림차순 정렬 기능을 제공합니다."
      },
      {
        "label": "Data Row",
        "role": "개별 데이터 레코드가 담기는 가로줄로, 마우스를 올리면 배경색이 변해 가독성을 높입니다."
      },
      {
        "label": "Sticky Column",
        "role": "가로로 길게 스크롤할 때 기준이 되는 첫 번째 열을 좌측에 단단히 고정시킵니다."
      },
      {
        "label": "Pagination Controls",
        "role": "수많은 데이터를 한 번에 보여주지 않고 여러 페이지로 나누어 탐색할 수 있게 합니다."
      }
    ]
  },
  {
    "id": "tabs",
    "group": "UI Components & Form Controls",
    "title": "Tabs & Tab Panels",
    "description": "상단 탭 버튼과 탭에 매칭되는 상세 화면 컨테이너",
    "prompt": "A preview of the Tabs & Tab Panels component showing various states and styles.",
    "anatomy": [
      {
        "label": "Tabs & Tab Panels Navigation Bar",
        "role": "여러 개의 섹션 이동 버튼들을 한 줄로 가지런히 정렬해주는 컨테이너입니다."
      },
      {
        "label": "Active Item",
        "role": "현재 사용자가 위치한 탭이나 단계를 강조된 색상과 굵은 글씨로 구별해줍니다."
      },
      {
        "label": "Inactive Item",
        "role": "아직 도달하지 않았거나 선택되지 않은 항목들을 옅은 색상으로 표시합니다."
      },
      {
        "label": "Active Indicator Line",
        "role": "현재 선택된 탭 바로 아래에 위치하여 부드럽게 이동하는 하단 강조선입니다."
      }
    ]
  },
  {
    "id": "timeline",
    "group": "UI Components & Form Controls",
    "title": "Timeline",
    "description": "연대기/기록을 수직선 상에 배치하는 타임라인",
    "prompt": "A preview of the Timeline component showing various states and styles.",
    "anatomy": [
      {
        "label": "Vertical Connector",
        "role": "각각의 이벤트나 노드들을 시간순/계층순으로 연결해주는 세로선입니다."
      },
      {
        "label": "Node Bullet",
        "role": "이벤트가 발생한 지점이나 트리의 분기점을 나타내는 둥근 점 혹은 아이콘입니다."
      },
      {
        "label": "Timestamp / Meta",
        "role": "해당 노드의 시간 정보나 상태값을 작게 표시하는 부가 데이터 영역입니다."
      },
      {
        "label": "Content Body",
        "role": "이벤트의 상세 내용이 카드나 텍스트 형태로 길게 작성되는 메인 블록입니다."
      }
    ]
  },
  {
    "id": "toolbar",
    "group": "UI Components & Form Controls",
    "title": "Toolbar",
    "description": "제목, 로고, 메뉴 버튼 등을 나열하는 상단 헤더 툴바",
    "prompt": "A preview of the Toolbar component showing various states and styles.",
    "anatomy": [
      {
        "label": "Toolbar Main Frame",
        "role": "Toolbar 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "tooltip",
    "group": "UI Components & Form Controls",
    "title": "Tooltip",
    "description": "마우스 호버 시 추가 설명 텍스트를 제공하는 말풍선 툴팁",
    "prompt": "A preview of the Tooltip component showing various states and styles.",
    "anatomy": [
      {
        "label": "Tooltip Main Frame",
        "role": "Tooltip 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "tree",
    "group": "UI Components & Form Controls",
    "title": "Tree",
    "description": "계층 관계(폴더/서브폴더)를 시각화하는 트리 구조 컴포넌트",
    "prompt": "A preview of the Tree component showing various states and styles.",
    "anatomy": [
      {
        "label": "Vertical Connector",
        "role": "각각의 이벤트나 노드들을 시간순/계층순으로 연결해주는 세로선입니다."
      },
      {
        "label": "Node Bullet",
        "role": "이벤트가 발생한 지점이나 트리의 분기점을 나타내는 둥근 점 혹은 아이콘입니다."
      },
      {
        "label": "Timestamp / Meta",
        "role": "해당 노드의 시간 정보나 상태값을 작게 표시하는 부가 데이터 영역입니다."
      },
      {
        "label": "Content Body",
        "role": "이벤트의 상세 내용이 카드나 텍스트 형태로 길게 작성되는 메인 블록입니다."
      }
    ]
  },
  {
    "id": "uploader",
    "group": "UI Components & Form Controls",
    "title": "Uploader",
    "description": "다양한 드래그앤드롭 및 서버 전송 설정을 지원하는 파일 업로더",
    "prompt": "A preview of the Uploader component showing various states and styles.",
    "anatomy": [
      {
        "label": "Uploader Main Frame",
        "role": "Uploader 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "video",
    "group": "UI Components & Form Controls",
    "title": "Video",
    "description": "반응형 비율에 맞춰 동영상 플레이어를 렌더링하는 컴포넌트",
    "prompt": "A preview of the Video component showing various states and styles.",
    "anatomy": [
      {
        "label": "Video Main Frame",
        "role": "Video 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "virtual-scroll",
    "group": "UI Components & Form Controls",
    "title": "Virtual Scroll",
    "description": "리스트 아이템이 수천 개 이상일 때 최적화 성능을 보장하는 가상 스크롤",
    "prompt": "A preview of the Virtual Scroll component showing various states and styles.",
    "anatomy": [
      {
        "label": "Virtual Scroll Main Frame",
        "role": "Virtual Scroll 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "input",
    "group": "UI Components & Form Controls",
    "title": "Input Textfield",
    "description": "일반 텍스트, 패스워드 등 텍스트 입력 필드",
    "prompt": "A preview of the Input Textfield component showing various states and styles.",
    "anatomy": [
      {
        "label": "Input Textfield Field Wrapper",
        "role": "사용자의 텍스트 입력 영역 전체를 감싸는 포커스 가능 컨테이너입니다."
      },
      {
        "label": "Floating Label",
        "role": "입력창 안쪽에 위치하다가 포커스 시 위로 부드럽게 줄어들며 이동하는 라벨입니다."
      },
      {
        "label": "Value Area",
        "role": "실제 데이터가 기입되고 화면에 그려지는 텍스트 렌더링 뷰포트입니다."
      },
      {
        "label": "Validation Message",
        "role": "입력 조건 미달 시 하단에 붉은색 글씨로 나타나는 에러/경고 안내 문구입니다."
      },
      {
        "label": "Clear / Reveal Icon",
        "role": "텍스트를 일괄 삭제하거나, 비밀번호의 경우 마스킹을 해제하는 보조 아이콘 버튼입니다."
      }
    ]
  },
  {
    "id": "select",
    "group": "UI Components & Form Controls",
    "title": "Select",
    "description": "드롭다운 리스트 중에서 항목을 단일 또는 다중 선택하는 입력 필드",
    "prompt": "A preview of the Select component showing various states and styles.",
    "anatomy": [
      {
        "label": "Select Trigger",
        "role": "클릭 시 하위 메뉴를 띄워주는 기준점이 되는 버튼 혹은 인풋 영역입니다."
      },
      {
        "label": "Options Popover",
        "role": "메인 화면 위에 떠서 여러 가지 선택지를 나열해주는 오버레이 패널입니다."
      },
      {
        "label": "Selectable Item",
        "role": "마우스 호버 시 배경색이 변하며 선택 가능함을 시각적으로 알려주는 개별 항목입니다."
      },
      {
        "label": "Active Indicator",
        "role": "현재 선택되어 있는 옵션 옆에 나타나는 체크마크(✓) 기호입니다."
      },
      {
        "label": "Scroll Mask",
        "role": "옵션 개수가 많을 때 내부적으로만 스크롤되도록 영역을 제한하는 마스킹 레이어입니다."
      }
    ]
  },
  {
    "id": "file-picker",
    "group": "UI Components & Form Controls",
    "title": "File Picker",
    "description": "로컬 디바이스의 파일을 탐색/선택하는 업로드 전용 필드",
    "prompt": "A preview of the File Picker component showing various states and styles.",
    "anatomy": [
      {
        "label": "File Picker Main Frame",
        "role": "File Picker 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "form",
    "group": "UI Components & Form Controls",
    "title": "Form",
    "description": "내부 모든 입력 필드의 유효성 검사(Validation) 및 전송을 관리하는 폼",
    "prompt": "A preview of the Form component showing various states and styles.",
    "anatomy": [
      {
        "label": "Form Main Frame",
        "role": "Form 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "field",
    "group": "UI Components & Form Controls",
    "title": "Field (wrapper)",
    "description": "커스텀 UI 요소를 디자인적으로 Vibe 입력 필드 스타일과 맞추는 래퍼",
    "prompt": "A preview of the Field (wrapper) component showing various states and styles.",
    "anatomy": [
      {
        "label": "Field (wrapper) Field Wrapper",
        "role": "사용자의 텍스트 입력 영역 전체를 감싸는 포커스 가능 컨테이너입니다."
      },
      {
        "label": "Floating Label",
        "role": "입력창 안쪽에 위치하다가 포커스 시 위로 부드럽게 줄어들며 이동하는 라벨입니다."
      },
      {
        "label": "Value Area",
        "role": "실제 데이터가 기입되고 화면에 그려지는 텍스트 렌더링 뷰포트입니다."
      },
      {
        "label": "Validation Message",
        "role": "입력 조건 미달 시 하단에 붉은색 글씨로 나타나는 에러/경고 안내 문구입니다."
      },
      {
        "label": "Clear / Reveal Icon",
        "role": "텍스트를 일괄 삭제하거나, 비밀번호의 경우 마스킹을 해제하는 보조 아이콘 버튼입니다."
      }
    ]
  },
  {
    "id": "radio",
    "group": "UI Components & Form Controls",
    "title": "Radio",
    "description": "여러 옵션 중 하나만 선택하는 라디오 버튼",
    "prompt": "A preview of the Radio component showing various states and styles.",
    "anatomy": [
      {
        "label": "Hit Area",
        "role": "시각적인 컨트롤 요소보다 실제 클릭 가능한 영역을 더 넓게 잡아 터치를 돕는 투명 박스입니다."
      },
      {
        "label": "State Indicator",
        "role": "체크, 도트, 스위치 손잡이 등 현재의 On/Off 상태를 직접적으로 나타내는 그래픽 요소입니다."
      },
      {
        "label": "Selection Track",
        "role": "토글 스위치의 경우 손잡이가 이동할 수 있는 배경 레일 역할을 합니다."
      },
      {
        "label": "Interactive Label",
        "role": "컨트롤 요소 옆에 위치하며, 글자를 클릭해도 체크박스가 토글되도록 연결된 텍스트입니다."
      }
    ]
  },
  {
    "id": "checkbox",
    "group": "UI Components & Form Controls",
    "title": "Checkbox",
    "description": "다중 선택이 가능한 체크박스",
    "prompt": "A preview of the Checkbox component showing various states and styles.",
    "anatomy": [
      {
        "label": "Hit Area",
        "role": "시각적인 컨트롤 요소보다 실제 클릭 가능한 영역을 더 넓게 잡아 터치를 돕는 투명 박스입니다."
      },
      {
        "label": "State Indicator",
        "role": "체크, 도트, 스위치 손잡이 등 현재의 On/Off 상태를 직접적으로 나타내는 그래픽 요소입니다."
      },
      {
        "label": "Selection Track",
        "role": "토글 스위치의 경우 손잡이가 이동할 수 있는 배경 레일 역할을 합니다."
      },
      {
        "label": "Interactive Label",
        "role": "컨트롤 요소 옆에 위치하며, 글자를 클릭해도 체크박스가 토글되도록 연결된 텍스트입니다."
      }
    ]
  },
  {
    "id": "btn-toggle",
    "group": "UI Components & Form Controls",
    "title": "Button Toggle",
    "description": "여러 버튼 중 하나를 활성화시키는 형태의 토글",
    "prompt": "A preview of the Button Toggle component showing various states and styles.",
    "anatomy": [
      {
        "label": "Button Toggle Surface",
        "role": "클릭 가능한 영역의 뼈대이자, 마우스 호버 시 밝기가 변하는 메인 바디입니다."
      },
      {
        "label": "Ripple Effect",
        "role": "클릭하는 순간 터치 지점에서부터 둥글게 퍼져나가는 잉크 파동 애니메이션입니다."
      },
      {
        "label": "Leading Icon",
        "role": "텍스트 라벨 좌측에 위치하여 버튼의 목적을 직관적으로 보조하는 아이콘입니다."
      },
      {
        "label": "Action Label",
        "role": "버튼이 수행할 핵심 동작을 명확하게 텍스트로 전달하는 타이포그래피 영역입니다."
      }
    ]
  },
  {
    "id": "option-group",
    "group": "UI Components & Form Controls",
    "title": "Option Group",
    "description": "다수의 체크박스, 라디오, 토글을 손쉽게 그룹 바인딩",
    "prompt": "A preview of the Option Group component showing various states and styles.",
    "anatomy": [
      {
        "label": "Option Group Main Frame",
        "role": "Option Group 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "slider",
    "group": "UI Components & Form Controls",
    "title": "Slider",
    "description": "슬라이드 손잡이를 움직여 단일 숫자를 조절하는 슬라이더",
    "prompt": "A preview of the Slider component showing various states and styles.",
    "anatomy": [
      {
        "label": "Track Line",
        "role": "선택 가능한 전체 값의 범위를 가로 방향의 선이나 원형 궤도로 보여줍니다."
      },
      {
        "label": "Active Track",
        "role": "현재 선택된 값까지의 궤도를 뚜렷한 브랜드 컬러로 채워 현재 진행 상황을 알립니다."
      },
      {
        "label": "Draggable Thumb",
        "role": "사용자가 직접 마우스나 터치로 잡고 움직일 수 있는 원형 모양의 핸들입니다."
      },
      {
        "label": "Tooltip Value",
        "role": "핸들을 움직일 때 현재의 정확한 수치를 팝업 형태로 보여주는 동적 라벨입니다."
      }
    ]
  },
  {
    "id": "range",
    "group": "UI Components & Form Controls",
    "title": "Range",
    "description": "범위(시작값 ~ 끝값)를 조작하는 양방향 슬라이더",
    "prompt": "A preview of the Range component showing various states and styles.",
    "anatomy": [
      {
        "label": "Track Line",
        "role": "선택 가능한 전체 값의 범위를 가로 방향의 선이나 원형 궤도로 보여줍니다."
      },
      {
        "label": "Active Track",
        "role": "현재 선택된 값까지의 궤도를 뚜렷한 브랜드 컬러로 채워 현재 진행 상황을 알립니다."
      },
      {
        "label": "Draggable Thumb",
        "role": "사용자가 직접 마우스나 터치로 잡고 움직일 수 있는 원형 모양의 핸들입니다."
      },
      {
        "label": "Tooltip Value",
        "role": "핸들을 움직일 때 현재의 정확한 수치를 팝업 형태로 보여주는 동적 라벨입니다."
      }
    ]
  },
  {
    "id": "time-picker",
    "group": "UI Components & Form Controls",
    "title": "Time Picker",
    "description": "시계 인터페이스를 활용한 시간 선택 컴포넌트",
    "prompt": "A preview of the Time Picker component showing various states and styles.",
    "anatomy": [
      {
        "label": "Time Picker Main Frame",
        "role": "Time Picker 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "date-picker",
    "group": "UI Components & Form Controls",
    "title": "Date Picker",
    "description": "캘린더 인터페이스를 활용한 날짜 선택 컴포넌트",
    "prompt": "A preview of the Date Picker component showing various states and styles.",
    "anatomy": [
      {
        "label": "Date Picker Main Frame",
        "role": "Date Picker 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
    "id": "knob",
    "group": "UI Components & Form Controls",
    "title": "Knob",
    "description": "원형 다이얼 형태를 마우스로 감아 올리거나 내려 값을 설정하는 컴포넌트",
    "prompt": "A preview of the Knob component showing various states and styles.",
    "anatomy": [
      {
        "label": "Track Line",
        "role": "선택 가능한 전체 값의 범위를 가로 방향의 선이나 원형 궤도로 보여줍니다."
      },
      {
        "label": "Active Track",
        "role": "현재 선택된 값까지의 궤도를 뚜렷한 브랜드 컬러로 채워 현재 진행 상황을 알립니다."
      },
      {
        "label": "Draggable Thumb",
        "role": "사용자가 직접 마우스나 터치로 잡고 움직일 수 있는 원형 모양의 핸들입니다."
      },
      {
        "label": "Tooltip Value",
        "role": "핸들을 움직일 때 현재의 정확한 수치를 팝업 형태로 보여주는 동적 라벨입니다."
      }
    ]
  },
  {
    "id": "color-picker",
    "group": "UI Components & Form Controls",
    "title": "Color Picker",
    "description": "다양한 포맷의 컬러 값을 손쉽게 고르는 색상 선택기",
    "prompt": "A preview of the Color Picker component showing various states and styles.",
    "anatomy": [
      {
        "label": "Color Picker Main Frame",
        "role": "Color Picker 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다."
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
  }
];
