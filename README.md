# 📦 UI Archive

> **백엔드 개발자를 위한 AI 프롬프트 기반 UI 설계 가이드북**

UI Archive는 백엔드 개발자가 AI(LLM)를 활용해 프론트엔드를 개발할 때, **정확한 UI/UX 용어와 구조적 개념**을 익혀 프롬프트의 품질을 높이고, 수정 횟수와 토큰 비용을 줄이는 것을 목표로 만들어진 **인터랙티브 시각 참고서**입니다.

---

## 🎯 프로젝트 취지

### 왜 이 가이드가 필요할까요?

요즘 많은 백엔드 개발자분들이 프론트엔드와 디자인 요소를 AI(LLM)에게 맡기고 있습니다.

하지만 **UI/UX에 대한 전문적인 용어나 구조적 개념**을 모르는 상태에서는 AI에게 내가 원하는 화면을 명확하게 지시하기 어렵습니다. "그냥 예쁘게 해줘", "버튼 옆으로 옮겨줘" 같은 모호한 프롬프트는 수많은 반복 수정을 낳고, 이는 곧 **불필요한 시간과 토큰 비용(Cost)의 낭비**로 이어집니다.

이 아카이브는 바로 그 문제를 해결하기 위해 만들어졌습니다. AI에게 **정확한 컴포넌트 명칭**과 **구조적인 레이아웃 용어**를 사용하여 단 한 번에 원하는 결과물을 도출해 낼 수 있도록 돕는 것이 이 가이드의 핵심 목적입니다.

이 프로젝트는 **Page Layouts → Page Layout Sections → UI Components → Design Effects → Full Page Templates** 라는 5단계의 계층적 설계 철학을 레고 블록처럼 직관적으로 보여주며, 각 요소에 맞는 **AI 프롬프트 예시**를 바로 복사할 수 있도록 제공합니다.

---

## ✨ 주요 기능

### 1. 계층적 UI 설계 구조 학습
웹 화면은 다음 5단계로 조립됩니다.

| 단계 | 분류 | 설명 |
|------|------|------|
| 1 | **Page Layouts** | 화면의 뼈대 — Header, Navbar, Main, Aside, Footer 구역 분리 |
| 2 | **Page Layout Sections** | 방을 채우는 가구 — Hero, Features, Pricing 등 완성된 모듈 |
| 3 | **UI Components & Forms** | 정교한 부품 — Button, Input, Card, GNB 등 최소 단위 |
| 4 | **Design Effects** | 시각적 생명력 — Glassmorphism, Parallax, Neon Glow 등 |
| 5 | **Full Page Templates** | 완성된 건축물 — SaaS Landing, Dashboard 등 실제 제품 단위 |

### 2. 라이브 프리뷰 플레이그라운드
사이드바에서 항목을 선택하면 메인 영역에 즉시 **실제 동작하는 React 컴포넌트** 프리뷰가 렌더링됩니다.

### 3. 🔬 Anatomy Mode (해부학 모드)
우측 상단의 **Anatomy Mode** 토글을 켜고 프리뷰 위에 마우스를 올리면:
- 컴포넌트의 각 구역이 **파란색 테두리**로 하이라이트됩니다.
- 플로팅 툴팁으로 해당 구역의 **정확한 명칭과 역할**이 표시됩니다.
- 이 명칭을 AI 프롬프트에 그대로 사용하면 훨씬 정교한 결과물을 얻을 수 있습니다.

### 4. 복사 가능한 AI 프롬프트
모든 UI 요소와 디자인 효과에는 **영문 AI 프롬프트**가 준비되어 있어 클릭 한 번으로 복사할 수 있습니다.

### 5. All-in-One Style Guide
`UI Components & Forms` 섹션을 선택하면 모든 UI 컴포넌트와 폼 요소를 **단일 페이지**에서 한눈에 탐색할 수 있습니다.

### 6. Design Effects 라이브러리
50가지 이상의 디자인 효과를 8개 카테고리로 분류하여 제공합니다.

| 카테고리 | 포함 효과 (예시) |
|----------|-----------------|
| **Textures & Styles** | Glassmorphism, Neumorphism, Neo-Brutalism, Glitch |
| **Colors & Backgrounds** | Mesh Gradient, Aurora, Duotone, Neon Glow |
| **Layout & Structure** | Bento Grid, Masonry, Split Screen, Z-axis Layering |
| **Interactions & Motion** | Micro-animations, Parallax, Skeleton Screen, Custom Cursor |
| **Typography** | Variable Fonts, Scrollytelling, Text Masking, Marquee |
| **Graphics & Art** | Isometric Design, Organic Blob, Paper Cut-out, Flat 2.0 |
| **Technical FX** | Clip-path Masking, Fluid Typography, Scroll-triggered Reveal |
| **Experimental** | Generative Art, AI-Core Aesthetic, Gamified UI |

---

## 🛠️ 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | React 19 + Vite |
| 아이콘 | Lucide React |
| 상태 관리 | React Hooks (useState, useMemo, useRef) |
| 영속성 | localStorage (선택 항목, Anatomy Mode 상태 유지) |
| 스타일링 | Plain CSS (index.css / App.css) |

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 📁 프로젝트 구조

```
src/
├── App.jsx                        # 루트 컴포넌트 (레이아웃, 라우팅)
├── components/
│   ├── Sidebar.jsx                # 좌측 네비게이션 사이드바
│   ├── DynamicPreview.jsx         # 범용 동적 프리뷰 렌더러
│   ├── AllInOneGuide.jsx          # 전체 항목 한 페이지 뷰
│   ├── CopyablePromptBox.jsx      # 프롬프트 복사 박스
│   ├── IntroductionPreview.jsx    # Getting Started 안내 화면
│   ├── DesignEffectsPreviews.jsx  # 디자인 효과 프리뷰 모음
│   ├── UIComponentPreviews.jsx    # UI 컴포넌트 프리뷰 모음
│   ├── BasicLayoutPreviews.jsx    # 페이지 레이아웃 프리뷰
│   ├── PageSectionPreviews.jsx    # 섹션 프리뷰
│   ├── FormControlPreviews.jsx    # 폼/인풋 프리뷰
│   ├── FeedbackPreviews.jsx       # 피드백 UI 프리뷰
│   ├── DataDisplayPreviews.jsx    # 데이터 표시 UI 프리뷰
│   ├── FullPagePreviews.jsx       # 전체 페이지 템플릿 프리뷰
│   └── effects/                   # 디자인 효과 세부 프리뷰
│       ├── ColorsBackgroundsLayoutPreviews.jsx
│       ├── GraphicsTechExperimentalPreviews.jsx
│       └── InteractionsTypographyPreviews.jsx
├── data/
│   ├── uiData.js                  # UI 데이터 통합 진입점
│   ├── designEffectsData.js       # 디자인 효과 데이터 (50+ 항목)
│   ├── previewMap.js              # ID → 컴포넌트 매핑 테이블
│   ├── koTranslations.js          # 한국어 번역 데이터
│   ├── anatomy.js                 # 해부학 레이어 정의
│   └── sections/
│       ├── gettingStarted.js      # Getting Started 데이터
│       ├── pageLayouts.js         # 페이지 레이아웃 데이터
│       ├── pageLayoutSections.js  # 레이아웃 섹션 데이터
│       ├── uiComponents.js        # UI 컴포넌트 데이터
│       └── fullPageTemplates.js   # 전체 페이지 템플릿 데이터
└── hooks/
    ├── useAnatomyMode.js          # Anatomy Mode 로직 (하이라이트 + 툴팁)
    └── usePersistedState.js       # localStorage 영속 상태 훅
```

---

## 💡 활용 예시

1. **사이드바**에서 원하는 UI 요소 또는 디자인 효과를 선택합니다.
2. **라이브 프리뷰**로 시각적인 결과를 즉시 확인합니다.
3. **Anatomy Mode**를 켜고 프리뷰 위에 마우스를 올려 컴포넌트 구조와 명칭을 파악합니다.
4. 프롬프트 박스에서 **AI 프롬프트를 복사**합니다.
5. Cursor, Claude, ChatGPT 등 AI 도구에 정확한 명칭과 함께 프롬프트를 붙여넣어 **단 한 번에** 원하는 UI를 생성합니다.

