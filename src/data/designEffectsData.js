export const designEffectsData = [
  // 1. Textures & Styles
  {
    id: "fx-glassmorphism",
    group: "Textures & Styles",
    title: "Glassmorphism",
    description: "반투명 유리 효과 (Backdrop-filter)",
    prompt: "Create a glassmorphism card with a semi-transparent white background, strong backdrop blur (e.g. 10px), and a subtle 1px solid white border to simulate glass reflections.",
    anatomy: [
      { label: "Frosted Background", role: "요소 뒤의 배경을 흐리게(blur) 만들어 유리 같은 질감을 줍니다." },
      { label: "Subtle Border", role: "유리의 단면에서 빛이 반사되는 듯한 얇고 밝은 테두리입니다." }
    ]
  },
  {
    id: "fx-neumorphism",
    group: "Textures & Styles",
    title: "Neumorphism",
    description: "부드러운 양각/음각 스타일",
    prompt: "Design a neumorphic button. Use a background color identical to the page background, with two drop shadows: a dark shadow on the bottom right and a light shadow on the top left.",
    anatomy: [
      { label: "Highlight Shadow", role: "좌상단에 위치하여 빛이 닿는 밝은 면을 표현합니다." },
      { label: "Dark Shadow", role: "우하단에 위치하여 빛의 반대편에 지는 그림자를 표현합니다." }
    ]
  },
  {
    id: "fx-claymorphism",
    group: "Textures & Styles",
    title: "Claymorphism",
    description: "찰흙처럼 둥글고 입체적인 스타일",
    prompt: "Apply claymorphism. Use a solid pastel color with a double inner shadow to make it look like a thick, rounded piece of 3D clay.",
    anatomy: [
      { label: "Thick Inner Shadows", role: "찰흙의 두께감과 둥근 볼륨감을 살려주는 내부 그림자입니다." }
    ]
  },
  {
    id: "fx-neo-brutalism",
    group: "Textures & Styles",
    title: "Neo-Brutalism",
    description: "강한 테두리와 원색, 딱딱한 그림자",
    prompt: "Design in Neo-brutalism style: high contrast, thick black borders, vivid primary colors, and hard solid shadows without any blur.",
    anatomy: [
      { label: "Hard Solid Shadow", role: "블러 처리가 전혀 없는 진한 검정색 그림자로 팝아트적 요소를 더합니다." },
      { label: "Thick Strokes", role: "요소의 외곽선을 두꺼운 검정색으로 처리하여 구조를 강하게 구분합니다." }
    ]
  },
  {
    id: "fx-modern-skeuomorphism",
    group: "Textures & Styles",
    title: "Modern Skeuomorphism",
    description: "실제 사물 재질을 세련되게 재현한 스타일",
    prompt: "Create a modern skeuomorphic toggle. Use metallic gradients and inset shadows to make it look like a physical switch made of anodized aluminum.",
    anatomy: [
      { label: "Material Gradient", role: "금속, 플라스틱, 가죽 등 실제 사물의 질감을 나타내는 정교한 그라데이션입니다." }
    ]
  },
  {
    id: "fx-grainy-noise",
    group: "Textures & Styles",
    title: "Grainy/Noise Texture",
    description: "자글자글한 노이즈로 아날로그 질감 부여",
    prompt: "Add a grainy noise overlay to the background using a repeating SVG filter pattern to create a cinematic or retro film texture.",
    anatomy: [
      { label: "Noise Filter Overlay", role: "디지털의 매끈함을 없애고 필름 사진이나 모래알 같은 거친 질감을 줍니다." }
    ]
  },
  {
    id: "fx-holographic",
    group: "Textures & Styles",
    title: "Holographic / Iridescent",
    description: "진주빛이나 무지개색 광택 효과",
    prompt: "Create a holographic iridescent effect using a multi-color animated conic gradient that shifts as the user moves the mouse.",
    anatomy: [
      { label: "Iridescent Gradient", role: "빛의 각도에 따라 무지개색으로 변하는 진주나 홀로그램 스티커 질감입니다." }
    ]
  },
  {
    id: "fx-soft-focus",
    group: "Textures & Styles",
    title: "Soft Focus / Bokeh",
    description: "배경을 몽환적으로 블러 처리하여 깊이감 부여",
    prompt: "Create a deep depth of field effect by placing highly blurred, colorful glowing orbs in the background behind crisp foreground text.",
    anatomy: [
      { label: "Bokeh Orbs", role: "카메라 렌즈의 아웃포커싱 효과처럼 배경에 커다랗게 번지는 빛 덩어리입니다." }
    ]
  },
  {
    id: "fx-retro-crt",
    group: "Textures & Styles",
    title: "Retro / Vintage (CRT)",
    description: "80-90년대 스타일, 픽셀 아트나 주사선 효과",
    prompt: "Apply a retro CRT monitor effect using scanline CSS patterns, a slight green tint, and glowing pixelated fonts.",
    anatomy: [
      { label: "Scanlines", role: "옛날 브라운관 TV나 모니터 특유의 가로줄 무늬입니다." }
    ]
  },
  {
    id: "fx-glitch",
    group: "Textures & Styles",
    title: "Glitch Effect",
    description: "디지털 노이즈나 화면이 깨지는 듯한 연출",
    prompt: "Create a cyberpunk glitch effect on the text by animating the CSS clip-path and offsetting red and cyan text shadows rapidly.",
    anatomy: [
      { label: "RGB Split", role: "빨간색과 청록색 그림자가 양옆으로 어긋나며 화면이 고장난 듯한 사이버펑크 느낌을 줍니다." }
    ]
  },

  // 2. Colors & Backgrounds
  {
    id: "fx-mesh-gradient",
    group: "Colors & Backgrounds",
    title: "Mesh Gradient",
    description: "여러 색상이 오로라처럼 섞인 배경",
    prompt: "Generate a vibrant mesh gradient background combining purple, cyan, and orange blobs overlapping and blending smoothly.",
    anatomy: [
      { label: "Color Blobs", role: "여러 개의 서로 다른 색상 덩어리들이 부드럽게 섞여 몽환적인 배경을 만듭니다." }
    ]
  },
  {
    id: "fx-aurora-fluid",
    group: "Colors & Backgrounds",
    title: "Aurora / Fluid Gradient",
    description: "유체처럼 천천히 움직이는 그라데이션",
    prompt: "Create a fluid animated aurora background where large gradients shift and morph slowly using CSS keyframes or WebGL.",
    anatomy: [
      { label: "Fluid Animation", role: "물감이나 오로라가 흐르는 것처럼 배경 색상이 끊임없이 부드럽게 변형됩니다." }
    ]
  },
  {
    id: "fx-duotone",
    group: "Colors & Backgrounds",
    title: "Duotone",
    description: "두 가지 색상만 사용하여 이미지를 표현",
    prompt: "Apply a Spotify-style duotone filter over a photograph using CSS mix-blend-mode or SVG filters mapping black to deep blue and white to hot pink.",
    anatomy: [
      { label: "Color Mapping", role: "이미지의 밝고 어두운 영역을 오직 두 가지 극단적인 컬러로만 치환하여 강렬한 인상을 줍니다." }
    ]
  },
  {
    id: "fx-monochromatic",
    group: "Colors & Backgrounds",
    title: "Monochromatic",
    description: "한 가지 색상의 명도/채도 변화로만 구성",
    prompt: "Design a purely monochromatic UI using exclusively varying shades of blue, manipulating lightness for contrast without adding other hues.",
    anatomy: [
      { label: "Tonal Variations", role: "동일한 색상 안에서 밝기와 짙음만 조절하여 극도로 깔끔하고 통일된 느낌을 줍니다." }
    ]
  },
  {
    id: "fx-dark-light-mode",
    group: "Colors & Backgrounds",
    title: "Dark/Light Mode",
    description: "사용자 설정에 따른 테마 전환",
    prompt: "Implement a robust dark mode toggle. In dark mode, avoid pure black; use dark slate gray with neon accents for better readability.",
    anatomy: [
      { label: "Theme Variables", role: "환경에 따라 배경색과 텍스트 색상이 유기적으로 반전되는 컬러 시스템입니다." }
    ]
  },
  {
    id: "fx-glow-neon",
    group: "Colors & Backgrounds",
    title: "Glow & Neon",
    description: "네온사인처럼 빛이 퍼지는 발광 효과",
    prompt: "Add a neon glow effect to the button border and text by stacking multiple colored text-shadows and box-shadows with varying blur radii.",
    anatomy: [
      { label: "Stacked Shadows", role: "여러 겹의 블러 처리된 그림자를 겹쳐 진짜 네온관이 빛나는 듯한 효과를 냅니다." }
    ]
  },
  {
    id: "fx-color-splashing",
    group: "Colors & Backgrounds",
    title: "Color Splashing",
    description: "흑백 이미지에서 특정 부분만 컬러로 강조",
    prompt: "Create a color splashing effect: keep the background image in grayscale using filter: grayscale(100%), but reveal full color inside a specific masked area.",
    anatomy: [
      { label: "Selective Saturation", role: "강조하고 싶은 특정 요소만 본래의 컬러를 유지하여 시선을 집중시킵니다." }
    ]
  },

  // 3. Layout & Structure (FX)
  {
    id: "fx-bento-grid",
    group: "Layout & Structure",
    title: "Bento Grid",
    description: "사각형 카드들을 격자 형태로 배치하는 레이아웃",
    prompt: "Create an Apple-style Bento grid layout. Use a CSS grid to arrange variously sized rounded rectangular cards with tight gaps.",
    anatomy: [
      { label: "Rounded Grid Cells", role: "도시락통처럼 둥글고 독립적인 박스들이 타이트하게 짜맞춰져 정보를 모듈화합니다." }
    ]
  },
  {
    id: "fx-z-axis-layering",
    group: "Layout & Structure",
    title: "Z-axis Layering (Floating)",
    description: "요소들을 겹치고 그림자 깊이를 달리해 입체감 부여",
    prompt: "Design a floating layering effect where cards physically overlap. Use varying drop shadow sizes to indicate different z-axis depths.",
    anatomy: [
      { label: "Depth Shadows", role: "그림자가 퍼지는 범위를 달리하여 화면 안에서 요소가 얼마나 높이 떠 있는지 3D 깊이를 표현합니다." }
    ]
  },
  {
    id: "fx-split-screen",
    group: "Layout & Structure",
    title: "Split Screen",
    description: "화면을 반으로 나누어 서로 다른 정보를 대비시키는 레이아웃",
    prompt: "Implement a 50/50 split screen. One side has a bold dark background with a large graphic, the other has a minimal white background with typography.",
    anatomy: [
      { label: "Dual Contrast", role: "화면을 좌우로 정확히 갈라 두 가지의 상반된 개념이나 디자인을 극적으로 대비시킵니다." }
    ]
  },
  {
    id: "fx-masonry-layout",
    group: "Layout & Structure",
    title: "Masonry Layout",
    description: "벽돌을 쌓듯 크기가 다른 요소를 빈틈없이 배치",
    prompt: "Create a Pinterest-style masonry grid where items of varying heights are tightly packed into columns without uniform horizontal rows.",
    anatomy: [
      { label: "Staggered Columns", role: "세로 길이가 제각각인 카드들을 세로단 기준으로 빈틈없이 채워 넣는 구조입니다." }
    ]
  },
  {
    id: "fx-sticky-floating",
    group: "Layout & Structure",
    title: "Sticky / Floating Elements",
    description: "스크롤 시 특정 위치에 고정되는 요소",
    prompt: "Make a sidebar sticky. As the user scrolls past the hero section, the sidebar locks into place using position: sticky.",
    anatomy: [
      { label: "Scroll Anchor", role: "페이지가 아래로 내려가더라도 핵심 정보나 네비게이션이 화면에서 사라지지 않게 붙잡아 둡니다." }
    ]
  },

  // 4. Interactions & Motion
  {
    id: "fx-micro-animations",
    group: "Interactions & Motion",
    title: "Micro-animations",
    description: "호버나 클릭 시 발생하는 아주 작은 피드백",
    prompt: "Add a premium micro-animation to a button: when hovered, it scales up by 2%, the shadow deepens, and an inner shine sweeps across it.",
    anatomy: [
      { label: "State Feedback", role: "사용자가 마우스를 올리거나 클릭할 때 시스템이 반응하고 있다는 것을 미세하고 고급스럽게 알려줍니다." }
    ]
  },
  {
    id: "fx-parallax-scrolling",
    group: "Interactions & Motion",
    title: "Parallax Scrolling",
    description: "스크롤 속도 차이를 이용한 입체적 움직임",
    prompt: "Implement parallax scrolling: make the background image scroll much slower than the foreground text to create an illusion of depth.",
    anatomy: [
      { label: "Speed Differential", role: "배경과 전경의 스크롤 속도를 다르게 설정하여 2D 화면에 3D 공간감을 부여합니다." }
    ]
  },
  {
    id: "fx-skeleton-screens",
    group: "Interactions & Motion",
    title: "Skeleton Screens",
    description: "데이터 로딩 중 보여주는 회색 틀",
    prompt: "Build a skeleton loading screen with pulsing gray blocks that outline the shape of the content before it fully loads.",
    anatomy: [
      { label: "Pulsing Outlines", role: "콘텐츠가 뜨기 전 뼈대 모양을 보여주어 로딩 대기 시간의 지루함을 덜어줍니다." }
    ]
  },
  {
    id: "fx-custom-cursor",
    group: "Interactions & Motion",
    title: "Custom Cursor",
    description: "마우스 커서를 브랜드 스타일에 맞게 디자인",
    prompt: "Hide the default cursor and replace it with a custom trailing circle cursor that expands and blends differently when hovering over links.",
    anatomy: [
      { label: "Trailing Cursor", role: "기본 마우스 화살표를 숨기고 마우스의 궤적을 쫓아오는 동그란 포인트 등 커스텀 요소를 사용합니다." }
    ]
  },
  {
    id: "fx-magnetic-buttons",
    group: "Interactions & Motion",
    title: "Magnetic Buttons",
    description: "마우스 커서가 가까이 가면 버튼이 끌려오는 효과",
    prompt: "Create a magnetic button effect. Calculate the distance of the mouse to the button, and pull the button slightly towards the cursor on hover.",
    anatomy: [
      { label: "Cursor Gravity", role: "마우스 커서 근처에 자석이 있는 것처럼 버튼이 커서 쪽으로 살짝 이끌려 오는 고급 인터랙션입니다." }
    ]
  },
  {
    id: "fx-kinetic-typography",
    group: "Interactions & Motion",
    title: "Kinetic Typography",
    description: "글자가 움직이거나 변형되는 애니메이션",
    prompt: "Animate kinetic typography: letters morph, stretch, and fly into place randomly on page load to form the hero heading.",
    anatomy: [
      { label: "Motion Text", role: "정적인 글자에 리듬감이나 무게감을 부여해 시각적인 생동감을 전달합니다." }
    ]
  },
  {
    id: "fx-lottie-vector",
    group: "Interactions & Motion",
    title: "Lottie / Vector Motion",
    description: "고화질 벡터 애니메이션 삽입",
    prompt: "Embed a lightweight Lottie vector animation for the success state, smoothly animating a checkmark and confetti without pixelation.",
    anatomy: [
      { label: "Scalable Animation", role: "화질 저하 없이 부드럽게 재생되는 벡터 기반의 복잡한 애니메이션 렌더러입니다." }
    ]
  },
  {
    id: "fx-page-transitions",
    group: "Interactions & Motion",
    title: "Page Transitions",
    description: "페이지 전환 시 부드럽게 페이드되거나 밀려나는 효과",
    prompt: "Add framer-motion page transitions: as the route changes, the old page slides down and fades out, while the new page slides up and fades in.",
    anatomy: [
      { label: "Seamless Routing", role: "화면이 깜빡이며 새로고침되는 대신 부드럽게 화면을 닦아내듯 다음 페이지로 넘어갑니다." }
    ]
  },

  // 5. Typography
  {
    id: "fx-variable-fonts",
    group: "Typography",
    title: "Variable Fonts",
    description: "너비나 굵기가 실시간으로 변하는 글꼴",
    prompt: "Use a Variable Font (like Inter Variable) and bind the font-weight property to the mouse X position, making the text thicker as the mouse moves right.",
    anatomy: [
      { label: "Dynamic Weight", role: "하나의 폰트 파일로 무한대에 가까운 굵기나 너비를 조절해 실시간으로 글자 형태를 애니메이션합니다." }
    ]
  },
  {
    id: "fx-scrollytelling-typography",
    group: "Typography",
    title: "Scrollytelling Typography",
    description: "스크롤 위치에 따라 글자가 연출되는 서사적 기법",
    prompt: "Implement scrollytelling: large text fades in character by character, changing color from gray to white precisely as the user scrolls down.",
    anatomy: [
      { label: "Scroll-bound Timeline", role: "사용자의 스크롤을 재생 바운드로 삼아 스크롤 속도에 맞춰 텍스트 애니메이션을 제어합니다." }
    ]
  },
  {
    id: "fx-outline-stroke-text",
    group: "Typography",
    title: "Outline / Stroke Text",
    description: "채움 없이 테두리만 있는 텍스트",
    prompt: "Design outline text using webkit-text-stroke: transparent fill with a 2px bright blue outline, often used for huge overlapping background headers.",
    anatomy: [
      { label: "Hollow Text", role: "글자의 속을 비우고 테두리만 남겨 다른 그래픽 요소를 가리지 않고 겹칠 수 있게 합니다." }
    ]
  },
  {
    id: "fx-text-masking",
    group: "Typography",
    title: "Text Masking (Video/Image)",
    description: "글자 모양 안에 배경 이미지나 비디오가 재생되는 효과",
    prompt: "Create a text mask using background-clip: text. Make the text transparent so a colorful MP4 video looping in the background plays 'inside' the letters.",
    anatomy: [
      { label: "Clipping Mask", role: "매시브한 텍스트 폰트를 프레임으로 삼아 그 글자 구멍 사이로 배경 이미지를 보여줍니다." }
    ]
  },
  {
    id: "fx-marquee",
    group: "Typography",
    title: "Marquee",
    description: "글자가 왼쪽이나 오른쪽으로 무한히 흐르는 효과",
    prompt: "Build an infinite horizontal marquee of text looping continuously from right to left using CSS translate animations.",
    anatomy: [
      { label: "Infinite Ticker", role: "주식 전광판이나 뉴스 속보처럼 메시지를 담은 띠가 화면을 가로질러 무한히 흘러갑니다." }
    ]
  },
  {
    id: "fx-kinetic-typo-2",
    group: "Typography",
    title: "Kinetic Typography (Dynamic)",
    description: "비틀거리거나 튕기거나 분해되는 동적 텍스트",
    prompt: "Implement complex kinetic typography: text that splits into slices, stretches elastically, and bounces back to normal shape.",
    anatomy: [
      { label: "Character Distortion", role: "단순한 이동을 넘어 텍스트 자체가 늘어나고 부서지는 강력한 시각 효과입니다." }
    ]
  },

  // 6. Graphics & Art
  {
    id: "fx-isometric-design",
    group: "Graphics & Art",
    title: "Isometric Design",
    description: "2.5D 느낌의 입체적 설계도 스타일 (쿼터뷰)",
    prompt: "Render an isometric 3D grid layout using CSS transforms (rotateX, rotateZ) to place flat UI components in a simulated 2.5D space.",
    anatomy: [
      { label: "3D Projection", role: "평면 요소에 특정 각도의 기울기와 왜곡을 주어 게임 화면처럼 공중에 떠 있는 3D 배치를 구현합니다." }
    ]
  },
  {
    id: "fx-paper-cutout",
    group: "Graphics & Art",
    title: "Paper Cut-out",
    description: "종이를 오려 붙인 듯한 겹겹의 그림자와 질감",
    prompt: "Create a paper cut-out effect using multiple layers of solid colors with deep inset shadows to look like stacked layers of thick cardboard.",
    anatomy: [
      { label: "Inset Depth", role: "내부 그림자를 단계별로 겹쳐 종이 구멍이 깊이 패여 있는 듯한 페이퍼 아트 느낌을 줍니다." }
    ]
  },
  {
    id: "fx-abstract-3d-shapes",
    group: "Graphics & Art",
    title: "Abstract 3D Shapes",
    description: "기하학적인 3D 오브제를 배치",
    prompt: "Place high-gloss abstract 3D primitive shapes (spheres, toruses, cones) floating randomly in the background to add a modern artistic touch.",
    anatomy: [
      { label: "Floating Primitives", role: "매끄럽게 렌더링된 3D 오브젝트들을 허공에 띄워 트렌디하고 화려한 브랜드 무드를 조성합니다." }
    ]
  },
  {
    id: "fx-hand-drawn-doodles",
    group: "Graphics & Art",
    title: "Hand-drawn / Doodles",
    description: "직접 그린 듯한 낙서 스타일",
    prompt: "Use an SVG filter (like roughen or displacement map) to make perfectly straight CSS borders look like squiggly, hand-drawn pencil doodles.",
    anatomy: [
      { label: "Organic Imperfection", role: "반듯한 선을 의도적으로 구불거리게 만들어 아날로그적이고 친근한 감성을 더합니다." }
    ]
  },
  {
    id: "fx-flat-design-2",
    group: "Graphics & Art",
    title: "Flat Design 2.0",
    description: "기존 플랫 디자인에 미세한 그림자와 그라데이션 추가",
    prompt: "Design with Flat 2.0 aesthetics: minimal flat shapes but enriched with very soft, diffused drop shadows and subtle warm-to-cool gradients to improve affordance.",
    anatomy: [
      { label: "Subtle Depth", role: "완전한 평면 디자인의 단점을 보완하기 위해 아주 미세한 그림자를 추가하여 요소를 명확히 분리합니다." }
    ]
  },
  {
    id: "fx-organic-blob-shapes",
    group: "Graphics & Art",
    title: "Organic / Blob Shapes",
    description: "물방울처럼 흐물거리는 유기적 형태",
    prompt: "Create an organic morphing blob using CSS border-radius with 8 varying percentage values that animate infinitely to look like a floating liquid droplet.",
    anatomy: [
      { label: "Morphing Radii", role: "테두리 곡률을 비대칭적으로 깎고 애니메이션을 주어 유기 생명체나 액체 덩어리처럼 보이게 합니다." }
    ]
  },

  // 7. Advanced CSS & Technical FX
  {
    id: "fx-layer-blend-modes",
    group: "Technical FX",
    title: "Layer Blend Modes",
    description: "레이어끼리 색상을 합성하는 포토샵 효과",
    prompt: "Apply mix-blend-mode: multiply or screen to overlap images and text, causing their colors to chemically blend together like in Photoshop.",
    anatomy: [
      { label: "Color Blending", role: "아래에 깔린 요소와 위에 덮인 요소의 색상 값을 수학적으로 섞어 극적인 시각 효과를 연출합니다." }
    ]
  },
  {
    id: "fx-clip-path-masking",
    group: "Technical FX",
    title: "Clip-path Masking",
    description: "요소를 별 모양, 원 모양 등으로 자유롭게 자르는 기법",
    prompt: "Use CSS clip-path: polygon() to cut a standard rectangular hero image into a sharp, dynamic slanted trapezoid shape.",
    anatomy: [
      { label: "Vector Mask", role: "이미지나 컨테이너를 잘라내어 네모난 틀을 벗어나 다각형, 원형 등 파격적인 프레임을 만듭니다." }
    ]
  },
  {
    id: "fx-custom-scrollbars",
    group: "Technical FX",
    title: "Custom Scrollbars",
    description: "브라우저 기본 스크롤바 커스텀",
    prompt: "Style the webkit scrollbar to be very thin, rounded, and styled with a semi-transparent thumb over a dark track to match a dark-themed UI.",
    anatomy: [
      { label: "Styled Thumb", role: "투박한 브라우저 기본 스크롤바를 덮어씌워 사이트의 디자인 테마와 일치하는 막대를 제공합니다." }
    ]
  },
  {
    id: "fx-fluid-typography",
    group: "Technical FX",
    title: "Fluid Typography",
    description: "화면 크기에 따라 폰트 크기가 유동적으로 변하는 기법",
    prompt: "Implement fluid typography using clamp(). Set the font-size to clamp(2rem, 5vw, 4rem) so it seamlessly scales with the browser width without media query breakpoints.",
    anatomy: [
      { label: "Clamp Scaling", role: "창 크기를 줄일 때 글자 크기가 끊기지 않고 고무줄처럼 부드럽고 자연스럽게 줄어듭니다." }
    ]
  },
  {
    id: "fx-scroll-triggered-reveal",
    group: "Technical FX",
    title: "Scroll-triggered Reveal",
    description: "요소가 화면에 나타날 때 밑에서 위로 부드럽게 나타나는 효과",
    prompt: "Use Intersection Observer to trigger a fade-in-up animation on elements exactly when they enter the viewport during scrolling.",
    anatomy: [
      { label: "Viewport Trigger", role: "요소가 보이지 않다가 사용자가 스크롤을 내려 시야에 들어오는 순간 극적으로 나타납니다." }
    ]
  },

  // 8. Experimental Trends
  {
    id: "fx-generative-art",
    group: "Experimental",
    title: "Generative Art Background",
    description: "수학적 알고리즘으로 실시간 생성되는 배경 패턴",
    prompt: "Integrate a Three.js or canvas-based generative art script that draws continuously evolving, mathematically generated particle webs in the background.",
    anatomy: [
      { label: "Procedural Rendering", role: "미리 그려진 이미지가 아니라 실시간 코드로 그려지는 무한하고 역동적인 그래픽입니다." }
    ]
  },
  {
    id: "fx-ai-core-aesthetic",
    group: "Experimental",
    title: "AI-Core Aesthetic",
    description: "AI나 첨단 기술 느낌을 주는 입자와 빛나는 테두리",
    prompt: "Design an AI-core interface: dark void background, shifting iridescent animated borders around glowing input fields, and floating spark particles.",
    anatomy: [
      { label: "Animated Glowing Borders", role: "인공지능의 연산이나 에너지를 상징하듯 테두리를 따라 빛이 빠르게 흐르는 효과입니다." }
    ]
  },
  {
    id: "fx-gamified-ui",
    group: "Experimental",
    title: "Gamified UI",
    description: "게임의 요소를 차용한 인터페이스 (경험치 바, 배지 등)",
    prompt: "Create a gamified onboarding flow. Use glowing XP (experience point) progress bars, unlockable badge icons, and celebratory confetti upon task completion.",
    anatomy: [
      { label: "Progress Feedback", role: "단순한 진행률이 아니라 보상과 성취감을 느낄 수 있는 화려한 게이미피케이션 연출입니다." }
    ]
  }
];
