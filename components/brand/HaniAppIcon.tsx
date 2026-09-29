// HANI 앱 아이콘 (사주앱 public/hani_logo.svg 원본 좌표)
export default function HaniAppIcon({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className} role="img" aria-label="HANI 앱">
      <defs>
        <clipPath id="hani-app-clip">
          <rect width="120" height="120" transform="translate(344 48)" />
        </clipPath>
      </defs>
      <rect width="512" height="512" rx="112" fill="#440382" />
      <g clipPath="url(#hani-app-clip)">
        <rect width="120" height="120" transform="translate(344 48)" fill="white" />
        <circle cx="344" cy="48" r="60" fill="#440382" />
        <circle cx="344" cy="168" r="60" fill="#440382" />
        <circle cx="464" cy="168" r="60" fill="#440382" />
        <circle cx="464" cy="48" r="60" fill="#440382" />
      </g>
      <path d="M283.292 144H368.252V396H283.292V144ZM204.812 396H119.852V144H204.812V396ZM289.052 303.12H199.052V233.28H289.052V303.12Z" fill="white" />
    </svg>
  );
}
