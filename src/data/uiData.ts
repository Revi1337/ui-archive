import { gettingStarted } from './sections/gettingStarted';
import { pageLayoutSections } from './sections/pageLayoutSections';
import { uiComponents } from './sections/uiComponents';
import { pageLayouts } from './sections/pageLayouts';
import { fullPageTemplates } from './sections/fullPageTemplates';
import type { UIItem } from '../types';

export const uiData: UIItem[] = [
  ...gettingStarted,
  ...pageLayoutSections,
  ...uiComponents,
  ...pageLayouts,
  ...fullPageTemplates,
];
