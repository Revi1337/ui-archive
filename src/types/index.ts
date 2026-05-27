import type React from 'react';

// ─── Anatomy ───────────────────────────────────────────────────────────────

export interface AnatomyLayer {
  label: string;
  role: string;
}

// ─── UI Item ───────────────────────────────────────────────────────────────

export interface UIItem {
  id: string;
  group: string;
  title: string;
  description: string;
  prompt: string;
  anatomy: AnatomyLayer[];
}

// ─── Design Effect Item ────────────────────────────────────────────────────

export interface DesignEffectItem extends UIItem {
  tags?: string[];
  previewType?: string;
}

// ─── Preview Map ───────────────────────────────────────────────────────────

export type PreviewComponent = React.ComponentType;

export type PreviewMap = Record<string, PreviewComponent>;

// ─── Anatomy Mode (useAnatomyMode hook) ────────────────────────────────────

export interface AnatomyTooltip {
  visible: boolean;
  x: number;
  y: number;
  label: string;
  role: string;
}

export interface AnatomyModeResult {
  anatomyMode: boolean;
  setAnatomyMode: React.Dispatch<React.SetStateAction<boolean>>;
  tooltip: AnatomyTooltip;
  previewRef: React.RefObject<HTMLDivElement>;
}
