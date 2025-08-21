interface IconProps {
  color?: 'orange' | 'white'
}

export function SupportAgentIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1401_3346)">
        <path 
          d="M56 32.5867C56 17.9467 44.64 8 32 8C19.4933 8 7.99998 17.7333 7.99998 32.7467C6.39998 33.6533 5.33331 35.36 5.33331 37.3333V42.6667C5.33331 45.6 7.73331 48 10.6666 48C12.1333 48 13.3333 46.8 13.3333 45.3333V32.5067C13.3333 22.2933 21.2 13.36 31.4133 13.0667C41.9733 12.7467 50.6666 21.2267 50.6666 31.7333V50.6667H32C30.5333 50.6667 29.3333 51.8667 29.3333 53.3333C29.3333 54.8 30.5333 56 32 56H50.6666C53.6 56 56 53.6 56 50.6667V47.4133C57.5733 46.5867 58.6666 44.96 58.6666 43.04V36.9067C58.6666 35.04 57.5733 33.4133 56 32.5867Z" 
          fill={color === 'white' ? 'white' : 'url(#paint0_linear_1401_3346)'}
        />
        <path 
          d="M24 37.3333C25.4727 37.3333 26.6666 36.1394 26.6666 34.6667C26.6666 33.1939 25.4727 32 24 32C22.5272 32 21.3333 33.1939 21.3333 34.6667C21.3333 36.1394 22.5272 37.3333 24 37.3333Z" 
          fill={color === 'white' ? 'white' : 'url(#paint1_linear_1401_3346)'}
        />
        <path 
          d="M40 37.3333C41.4727 37.3333 42.6666 36.1394 42.6666 34.6667C42.6666 33.1939 41.4727 32 40 32C38.5272 32 37.3333 33.1939 37.3333 34.6667C37.3333 36.1394 38.5272 37.3333 40 37.3333Z" 
          fill={color === 'white' ? 'white' : 'url(#paint2_linear_1401_3346)'}
        />
        <path 
          d="M48 29.4133C46.72 21.8133 40.1067 16 32.1333 16C24.0533 16 15.36 22.6933 16.0533 33.2C22.64 30.5067 27.6 24.64 29.0133 17.4933C32.5067 24.5067 39.68 29.3333 48 29.4133Z" 
          fill={color === 'white' ? 'white' : 'url(#paint3_linear_1401_3346)'}
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1401_3346" x1="1.10158" y1="4.07053" x2="58.2788" y2="68.2014" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1401_3346" x1="20.9101" y1="31.5634" x2="27.3048" y2="38.0185" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1401_3346" x1="36.9101" y1="31.5634" x2="43.3048" y2="38.0185" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1401_3346" x1="13.4765" y1="14.5919" x2="30.5921" y2="46.7215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_1401_3346">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function AccountBalanceWalletIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1401_3323)">
        <path 
          d="M26.6667 42.6667V21.3333C26.6667 18.4 29.04 16 32 16H56V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.3733 8 8 10.4 8 13.3333V50.6667C8 53.6 10.3733 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667V48H32C29.04 48 26.6667 45.6 26.6667 42.6667ZM34.6667 21.3333C33.2 21.3333 32 22.5333 32 24V40C32 41.4667 33.2 42.6667 34.6667 42.6667H58.6667V21.3333H34.6667ZM42.6667 36C40.4533 36 38.6667 34.2133 38.6667 32C38.6667 29.7867 40.4533 28 42.6667 28C44.88 28 46.6667 29.7867 46.6667 32C46.6667 34.2133 44.88 36 42.6667 36Z" 
          fill={color === 'white' ? 'white' : '#F25227'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1401_3323">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function TrendingUpIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_trending_up)">
        <path 
          d="M37.3333 21.3333H50.6667V34.6667M50.6667 21.3333L32 40L24 32L13.3333 42.6667" 
          stroke={color === 'white' ? 'white' : 'url(#paint0_linear_trending_up)'} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_trending_up" x1="10" y1="18" x2="54" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_trending_up">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function AnalyticsIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_analytics)">
        <path 
          d="M10.6667 53.3333H53.3333M18.6667 45.3333V38.6667M29.3333 45.3333V29.3333M40 45.3333V34.6667M50.6667 45.3333V24" 
          stroke={color === 'white' ? 'white' : 'url(#paint0_linear_analytics)'} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle 
          cx="18.6667" 
          cy="21.3333" 
          r="5.33333" 
          fill={color === 'white' ? 'white' : 'url(#paint1_linear_analytics)'}
        />
        <circle 
          cx="29.3333" 
          cy="16" 
          r="5.33333" 
          fill={color === 'white' ? 'white' : 'url(#paint2_linear_analytics)'}
        />
        <circle 
          cx="40" 
          cy="18.6667" 
          r="5.33333" 
          fill={color === 'white' ? 'white' : 'url(#paint3_linear_analytics)'}
        />
        <circle 
          cx="50.6667" 
          cy="10.6667" 
          r="5.33333" 
          fill={color === 'white' ? 'white' : 'url(#paint4_linear_analytics)'}
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_analytics" x1="8" y1="20" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint1_linear_analytics" x1="13" y1="16" x2="24" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint2_linear_analytics" x1="24" y1="10.5" x2="35" y2="21.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint3_linear_analytics" x1="34.5" y1="13" x2="45.5" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint4_linear_analytics" x1="45" y1="5" x2="56" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_analytics">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
