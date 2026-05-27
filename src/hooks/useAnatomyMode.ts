import { useState, useRef, useEffect } from 'react';
import type { UIItem } from '../types';

export interface AnatomyModeReturn {
  anatomyMode: boolean;
  setAnatomyMode: React.Dispatch<React.SetStateAction<boolean>>;
  tooltipRef: React.RefObject<HTMLDivElement | null>;
  tooltipTitleRef: React.RefObject<HTMLElement | null>;
  tooltipRoleRef: React.RefObject<HTMLElement | null>;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: () => void;
}

/**
 * Manages the Anatomy Mode feature:
 *  - boolean state (on/off) persisted to localStorage
 *  - DOM refs for the floating tooltip (title, role text, visibility)
 *  - mousemove handler that highlights .anatomy-layer elements
 *
 * @param currentData - The currently displayed item (used to resolve anatomy role descriptions)
 */
export function useAnatomyMode(currentData: UIItem | null | undefined): AnatomyModeReturn {
  const [anatomyMode, setAnatomyMode] = useState<boolean>(() => {
    return localStorage.getItem('anatomyMode') === 'true';
  });

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const tooltipTitleRef = useRef<HTMLElement | null>(null);
  const tooltipRoleRef = useRef<HTMLElement | null>(null);
  const hoveredNodeRef = useRef<Element | null>(null);

  // Persist anatomyMode to localStorage
  useEffect(() => {
    localStorage.setItem('anatomyMode', String(anatomyMode));
  }, [anatomyMode]);

  // Clean up highlights when anatomy mode is toggled off
  useEffect(() => {
    if (!anatomyMode) {
      if (tooltipRef.current) tooltipRef.current.classList.remove('visible');
      if (hoveredNodeRef.current) hoveredNodeRef.current.classList.remove('is-hovered');
      hoveredNodeRef.current = null;
    }
  }, [anatomyMode]);

  // Handle Mouse Over Anatomy Layers to draw MessageBox and CSS borders directly via DOM
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!anatomyMode) return;

    // Find the closest .anatomy-layer under cursor
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const layer = element?.closest('.anatomy-layer') ?? null;

    if (layer !== hoveredNodeRef.current) {
      // Remove highlight from previous
      if (hoveredNodeRef.current) {
        hoveredNodeRef.current.classList.remove('is-hovered');
      }

      // Add highlight to new
      hoveredNodeRef.current = layer;
      if (hoveredNodeRef.current) {
        hoveredNodeRef.current.classList.add('is-hovered');

        // Update tooltip content
        const anatomyName = layer?.getAttribute('data-anatomy') ?? '';
        const anatomyObj = currentData?.anatomy?.find((a) => a.label === anatomyName);

        if (tooltipTitleRef.current) {
          tooltipTitleRef.current.innerText = anatomyName;
        }
        if (tooltipRoleRef.current) {
          tooltipRoleRef.current.innerText = anatomyObj ? anatomyObj.role : '기본 레이아웃 요소입니다.';
        }
      }
    }

    // Move tooltip smoothly with boundary checks
    if (layer && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const tooltipWidth = tooltip.offsetWidth || 300; // fallback width if not yet rendered
      const tooltipHeight = tooltip.offsetHeight || 100;

      let left = e.clientX + 16;
      let top = e.clientY + 16;

      // Flip to left if it overflows right screen edge
      if (left + tooltipWidth > window.innerWidth - 16) {
        left = e.clientX - tooltipWidth - 16;
      }

      // Flip to top if it overflows bottom screen edge
      if (top + tooltipHeight > window.innerHeight - 16) {
        top = e.clientY - tooltipHeight - 16;
      }

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;

      if (!tooltip.classList.contains('visible')) {
        tooltip.classList.add('visible');
      }
    } else if (tooltipRef.current) {
      tooltipRef.current.classList.remove('visible');
    }
  };

  const handleMouseLeave = () => {
    if (tooltipRef.current) tooltipRef.current.classList.remove('visible');
    if (hoveredNodeRef.current) hoveredNodeRef.current.classList.remove('is-hovered');
  };

  return {
    anatomyMode,
    setAnatomyMode,
    tooltipRef,
    tooltipTitleRef,
    tooltipRoleRef,
    handleMouseMove,
    handleMouseLeave,
  };
}
