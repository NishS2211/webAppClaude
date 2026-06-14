import { LuCompass, LuTarget, LuZap, LuCoins, LuWrench } from 'react-icons/lu';
import type { AgendaItem } from '../types';

export const agendaItems: AgendaItem[] = [
  { id: 'philosophy', href: '#philosophy', num: '01', icon: <LuCompass />, name: 'Philosophy', tag: 'The trust chain', colorStart: 'var(--brand)', colorEnd: 'var(--cyan)' },
  { id: 'phases', href: '#phases', num: '02', icon: <LuTarget />, name: '5-Phase Flow', tag: 'Interactive', colorStart: 'var(--cyan)', colorEnd: 'var(--green)' },
  { id: 'connectors', href: '#connectors', num: '03', icon: <LuZap />, name: 'Power-Ups', tag: 'Connectors', colorStart: 'var(--green)', colorEnd: 'var(--amber)' },
  { id: 'tokens', href: '#tokens', num: '04', icon: <LuCoins />, name: 'Token Saving', tag: '~20% off bills', colorStart: 'var(--amber)', colorEnd: 'var(--pink)' },
  { id: 'projects', href: '#projects', num: '05', icon: <LuWrench />, name: 'Real Projects', tag: '4 case studies', colorStart: 'var(--pink)', colorEnd: 'var(--brand)' },
];