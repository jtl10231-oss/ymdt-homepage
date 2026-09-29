import data from './screens.json';
import { asset } from './site';

export type Screen = { src: string; w: number; h: number; top: string };
export type ScreenKey = keyof typeof data;

export const screens = data as Record<ScreenKey, Screen>;

export function screen(key: ScreenKey): Screen {
  const s = screens[key];
  return { ...s, src: asset(s.src) };
}

/** 화면 상단색이 어두우면 상태바 글자를 밝게 */
export function isDarkTop(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140;
}
