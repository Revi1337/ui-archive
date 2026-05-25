# [Implementation Plan] UI/UX Anatomy & Prompting Playground

사용자가 웹 사이트의 핵심 레이아웃 섹션과 컴포넌트들을 눈으로 직접 확인하고, 각 영역의 정확한 디자인 명칭(Anatomy)을 인스펙트하며, 이를 AI(LLM)에 입력하여 **인터렉티브하게 구현할 수 있도록** 고효율 압축 프롬프트를 조율하고 복사할 수 있는 **나만의 인터랙티브 플레이그라운드**입니다.

## User Review Required

> [!IMPORTANT]
> **핵심 아키텍처 및 디자인 가이드라인 (Vite + React + Vanilla CSS 조합)**
> * **프레임워크 (Vite + React)**: 무한한 컴포넌트 확장성과 유지보수 편의성을 위한 최적의 선택입니다. 향후 새로운 요금제(Pricing Table), 벤토 그리드, 폼 컨트롤 등 다양한 요소를 계속해서 추가하더라도 데이터 구조(`uiData.js`)와 컴포넌트 단위 조립을 통해 스파게티 코드 없이 무한 확장이 가능합니다.
> * **스타일링 (Vanilla CSS)**: 프레임워크나 CSS 라이브러리(Tailwind 등)의 한계를 넘어, 독창적인 글래스모피즘(Glassmorphism), 정교한 네온 메쉬 그라데이션, 마이크로 트랜지션 애니메이션 효과를 순수 CSS 변수(Custom Properties)와 함께 완벽히 자유롭게 제어하기 위해 순수 Vanilla CSS로만 스타일을 작성합니다.
> * **디자인 무드**: 다크 모드 기반의 프리미엄 디자인 캔버스와 모던 격자무늬(Canvas Grid) 배경을 적용하여, 직관적이고 미래지향적인 '개발자 전용 플레이그라운드' 느낌을 극대화합니다.
> * **핵심 기능**:
>   1. **사이드바 메뉴**: 섹션 카테고리 선택 (Hero, Features, Pricing, Testimonials, FAQ)
>   2. **인터랙티브 플레이그라운드**:
>      * **Anatomy Mode (분해 모드)**: 버튼 하나로 활성화되며, 활성화 시 프리뷰 화면 내의 개별 요소(Headline, CTA Button, Social Proof 등)에 가이드라인 박스와 툴팁이 생겨 디자인 용어를 즉시 확인 가능.
>      * **Theme Switcher (테마 스위처)**: 동일한 레이아웃 섹션을 다양한 디자인 무드(Neon Dark, Minimal Light, Cyberpunk, Glassmorphism)로 즉시 변경하며 감상 가능.
>      * **Prompt Copier (프롬프트 복사기)**: 해당 디자인과 요소를 AI에게 전달하기 위한 최적의 프롬프트를 카테고리별/스타일별로 자동 조합하여 원클릭 복사.

---

## UI/UX & Web Publishing Terminology Library (도감 수록 요소)

웹 퍼블리셔와 디자이너가 실제로 사용하는 전문 용어들을 망라하여 플레이그라운드 내에 인스펙션(Anatomy) 가능한 상태로 모두 구현합니다.

### 1. 웹 레이아웃 섹션 (Page Layout Sections)
* **히어로 섹션 (Hero Section)**: 웹 페이지 최상단에서 첫인상을 결정하는 영역.
  * *세부 요소 (Anatomy)*: `Key Visual (키 비주얼/대표 이미지)`, `Headline (메인 타이틀)`, `Subheadline (서브 타이틀)`, `CTA (Call to Action/행동 유도 버튼)`, `Social Proof (소셜 프루프 - 고객사 로고나 신뢰 지표)`, `Scroll Indicator (스크롤 유도 요소)`
* **피처 섹션 (Feature Section)**: 서비스/제품의 특징과 강점을 직관적으로 보여주는 카드 영역.
  * *세부 요소 (Anatomy)*: `Section Title (섹션 타이틀)`, `Grid Layout (그리드 배열)`, `Feature Card (피처 카드)`, `Icon Wrapper (아이콘 영역)`, `Badge (라벨/배지)`
* **베네핏/설명 섹션 (Split Benefit Section)**: 비주얼과 설명이 교차되어 시선을 붙잡는 구조.
  * *세부 요소 (Anatomy)*: `Alternating Layout (교차 레이아웃)`, `Text Column (본문 열)`, `Media Frame (미디어 프레임)`, `Bullet List (글머리 기호 목록)`
* **벤토 그리드 섹션 (Bento Grid Section)**: 현대적이고 트렌디한 다중 크기 비대칭 그리드 레이아웃.
  * *세부 요소 (Anatomy)*: `Asymmetric Card (비대칭 카드)`, `Feature Accent (카드 내부 강조 요소)`, `Grid Span (그리드 병합 영역)`
* **요금제 섹션 (Pricing Section)**: 가격 정책 및 패키지 혜택을 대조하는 영역.
  * *세부 요소 (Anatomy)*: `Pricing Tier Card (요금제 등급 카드)`, `Price Display (가격 표시부 - Currency, Value, Period)`, `Feature Checklist (혜택 체크리스트)`, `Tier Badge (추천/인기 배지)`, `Tier CTA`
* **고객 추천/소셜 증명 섹션 (Testimonials Section)**: 실사용자 후기와 평점을 모아 신뢰를 높이는 영역.
  * *세부 요소 (Anatomy)*: `Avatar (프로필 이미지)`, `Reviewer Info (리뷰어 이름/직함)`, `Review Quote (인용구 본문)`, `Star Rating (별점 컴포넌트)`, `Logo Badge`
* **아코디언 FAQ 섹션 (Accordion FAQ Section)**: 질문과 답변을 접고 펴는 레이아웃.
  * *세부 요소 (Anatomy)*: `Accordion Item (아코디언 항목)`, `Accordion Trigger (질문 헤더)`, `Accordion Panel (답변 영역)`, `Toggle Indicator (Chevron/접기 펼치기 아이콘)`

### 2. 공통 UI 컴포넌트 & 폼 컨트롤 (UI Components & Form Controls)
* **네비게이션 헤더 (GNB - Global Navigation Bar)**: 최상단 네비게이션 바.
  * *세부 요소 (Anatomy)*: `Brand Logo`, `Nav Navigation Menu (메인 메뉴)`, `Utilities (로그인, 다크모드 버튼 등)`, `Sticky/Floating Header`
* **배너/공지바 (Banner / Alert Bar)**: 화면 최상단이나 공중에 뜨는 안내 띠.
  * *세부 요소 (Anatomy)*: `Dismiss Button (닫기 버튼)`, `Announcement Copy`, `Action Link`
* **폼 필드 & 입력 컴포넌트 (Form Fields & Inputs)**: 사용자 인터랙션의 핵심 영역.
  * *세부 요소 (Anatomy)*: `Input Group (입력 영역 그룹)`, `Floating Label (플로팅 라벨)`, `Helper Text (안내 문구)`, `Validation Message (유효성 오류 메시지)`, `Toggle Switch (토글 스위치)`, `Segmented Control (세그먼티드 버튼)`
* **하단 정보 영역 (Footer)**: 사이트맵과 저작권 표시 영역.
  * *세부 요소 (Anatomy)*: `Sitemap Links (사이트맵 목록)`, `Social Media Icons (SNS 아이콘 군)`, `Copyright Text`, `Terms & Privacy Links`

### 3. 디자이너 & 퍼블리셔 스타일링 토큰 (Style Tokens)
* **타이포그래피 (Typography)**: `Font Family (서체 종류)`, `Font Weight (굵기)`, `Line Height (행간)`, `Letter Spacing (자간)`, `Text Align (정렬)`
* **레이아웃 & 간격 (Layout & Spacing)**: `Flexbox`, `CSS Grid`, `Padding (안쪽 여백)`, `Margin (바깥쪽 여백)`, `Gap (요소 간격)`, `Aspect Ratio (종횡비 세팅)`
* **데코레이션 효과 (Visual Effects)**: `Border Radius (테두리 둥글기)`, `Box Shadow (그림자 효과)`, `Backdrop Filter (글래스모피즘 블러 효과)`, `Linear/Radial/Mesh Gradient (선형/원형/망형 그라데이션)`, `Backdrop Overlay / Dimmer (오버레이 배경 레이어)`
* **인터랙션 & 상태 (Interactions & States)**: `Hover Transition (호버 효과)`, `Transform Scale (확대/축소 효과)`, `Active/Pressed State (클릭 상태)`, `Focus State (포커스 링 상태)`, `Disabled State (비활성화 상태)`, `Skeleton Loading (스켈레톤 로딩 뼈대)`

### 4. 웹 표준 & 시맨틱 웹 (A11y & Semantic)
* **웹 접근성 & 구조 (Web Standards)**: `Semantic Markup (의미 중심 마크업 태그)`, `ARIA Attributes (접근성 리더용 속성)`, `Alt Text (대체 텍스트)`

### 5. 트렌디 모션 & 흐름 제어 (Micro-Motion & Flow Controls)
* **다이내믹 인터랙션 & 네비게이션**: `Marquee Effect (무한 루프 흐르는 배너)`, `Parallax Scrolling (입체적 스크롤 속도 제어)`, `Infinite Scroll vs Pagination (무한 스크롤 대 페이지 분할)`

---

## Proposed Changes

프로젝트 디렉토리인 `/Users/revi1337/Desktop/ai/vibe/ui-archive` 내에 Vite 프로젝트를 새로 생성하고 구현을 진행합니다.

### [Component Name] UI Playground Core

#### [NEW] [package.json](file:///Users/revi1337/Desktop/ai/vibe/ui-archive/package.json)
- React, Lucide React(아이콘) 등 필요한 의존성을 설정합니다.

#### [NEW] [vite.config.js](file:///Users/revi1337/Desktop/ai/vibe/ui-archive/vite.config.js)
- React 싱글 페이지 애플리케이션을 빌드할 Vite 환경설정 파일입니다.

#### [NEW] [index.html](file:///Users/revi1337/Desktop/ai/vibe/ui-archive/index.html)
- 폰트(Google Fonts - Outfit, Inter) 및 기본 메타 태그를 정의합니다.

#### [NEW] [src/index.css](file:///Users/revi1337/Desktop/ai/vibe/ui-archive/src/index.css)
- 전역 CSS 스타일 및 모던 디자인 시스템 토큰을 정의합니다. (글래스모피즘 효과, 다크모드 메인 테마, 격자무늬 배경 효과 등)

#### [NEW] [src/App.jsx](file:///Users/revi1337/Desktop/ai/vibe/ui-archive/src/App.jsx)
- 사이드바(네비게이션), 메인 프리뷰 플레이그라운드, 컨트롤 패널(테마 스위처, 분해 모드 토글, 프롬프트 생성기)을 조율하는 최상위 컴포넌트입니다.

#### [NEW] [src/data/uiData.js](file:///Users/revi1337/Desktop/ai/vibe/ui-archive/src/data/uiData.js)
- 히어로(Hero), 피처(Features), 가격(Pricing) 등 각 섹션에 관한 구조 데이터와 각 요소의 영문/국문 명칭 설명, AI 프롬프트 정보를 정의하는 데이터 허브입니다.

---

## Verification Plan

### Automated & Manual Verification
- **디바이스 반응형 검증**: 모바일, 태블릿, 데스크톱 화면에서 레이아웃이 깨지지 않고 부드럽게 유지되는지 확인합니다.
- **상호작용성 검증**:
  * 사이드바 클릭 시 해당하는 UI 섹션 프리뷰가 부드럽게 페이드인/아웃 전환되는지 확인합니다.
  * Anatomy 모드 토글 시 화면 내에 점선 바운딩 박스와 함께 디자인 레이아웃 어휘(툴팁)가 정상 노출되는지 테스트합니다.
  * 테마 변경 시 다크/라이트/네온/글래스모피즘 등 테마 스타일이 프리뷰 섹션에 즉시 투영되는지 검증합니다.
  * 프롬프트 복사 버튼 동작 시 클립보드에 프롬프트가 정상 복사되고 알림 토스트가 동작하는지 확인합니다.
