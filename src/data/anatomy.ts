import type { AnatomyLayer } from '../types';

/**
 * Generic anatomy template shared by components that don't have
 * a hand-crafted anatomy breakdown yet.
 *
 * Usage: GENERIC_ANATOMY('Ajax Bar')
 */
export const GENERIC_ANATOMY = (componentName: string): AnatomyLayer[] => [
  {
    label: `${componentName} Main Frame`,
    role: `${componentName} 컴포넌트의 레이아웃을 잡아주고 배경이나 그림자를 부여하는 기본 뼈대입니다.`,
  },
  {
    label: 'Interactive Zone',
    role: '사용자의 마우스 호버나 클릭, 터치 이벤트에 실시간으로 반응하는 제어 구역입니다.',
  },
  {
    label: 'Data Renderer',
    role: '자바스크립트의 상태(State) 값이나 데이터를 시각적인 UI 텍스트로 변환하여 출력합니다.',
  },
  {
    label: 'Layout constraints',
    role: '부모 요소의 크기가 변할 때 내부 요소들이 깨지지 않도록 여백과 정렬을 강제하는 규칙 층입니다.',
  },
  {
    label: 'Visual Polish',
    role: '미세한 투명도 변화, 스무스한 전환 애니메이션 등 디자인 완성도를 높이는 디테일 레이어입니다.',
  },
];
