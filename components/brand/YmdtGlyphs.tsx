// YMDT 로만 세리프 글리프 — 직접 그린 좌표 (캡 높이 46, 굵은 기둥 9 / 가는 획 3.2~3.6).
// 워드마크와 인장형 모노그램이 같은 좌표를 공유한다.
export const GLYPH_W = { Y: 44, M: 56, D: 42, T: 40 } as const;

export function YGlyph({ ink, thin }: { ink: string; thin: string }) {
  return (
    <g>
      <g fill={ink}>
        <rect x="0" y="0" width="16" height="3.2" />
        <polygon points="3,0 13,0 26.5,25 17.5,25" />
        <rect x="17.5" y="24" width="9" height="22" />
        <rect x="11" y="42.8" width="22" height="3.2" />
      </g>
      {/* 가는 오른팔 = 강조색 (HANI 워드마크의 A 가로획처럼 단 하나의 색) */}
      <g fill={thin}>
        <rect x="30" y="0" width="14" height="3.2" />
        <polygon points="36.5,0 40.7,0 26.5,25.5 22.3,25.5" />
      </g>
    </g>
  );
}

export function MGlyph({ ink }: { ink: string }) {
  return (
    <g fill={ink}>
      <rect x="4" y="0" width="3.6" height="46" />
      <polygon points="4,0 13,0 31,46 25,46" />
      <polygon points="25.5,46 29.1,46 46.6,0 43,0" />
      <rect x="43" y="0" width="9" height="46" />
      <rect x="0" y="0" width="13" height="3.2" />
      <rect x="43" y="0" width="13" height="3.2" />
      <rect x="0" y="42.8" width="12" height="3.2" />
      <rect x="39" y="42.8" width="17" height="3.2" />
    </g>
  );
}

export function DGlyph({ ink }: { ink: string }) {
  return (
    <path
      fill={ink}
      fillRule="evenodd"
      d="M0 0 H21 A21 23 0 0 1 21 46 H0 V42.8 H5 V3.2 H0 Z M14 3.2 H20 A13 19.8 0 0 1 20 42.8 H14 Z"
    />
  );
}

export function TGlyph({ ink }: { ink: string }) {
  return (
    <g fill={ink}>
      <rect x="0" y="0" width="40" height="3.6" />
      <rect x="0" y="0" width="3.6" height="10" />
      <rect x="36.4" y="0" width="3.6" height="10" />
      <rect x="15.5" y="0" width="9" height="46" />
      <rect x="9" y="42.8" width="22" height="3.2" />
    </g>
  );
}
