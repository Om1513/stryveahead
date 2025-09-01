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
          fill={color === 'white' ? 'white' : 'url(#paint0_linear_wallet)'}
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_wallet" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
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

export function StorefrontIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_storefront)">
        <path 
          d="M8 24L16 8H48L56 24V32C56 35.3137 53.3137 38 50 38C46.6863 38 44 35.3137 44 32C44 35.3137 41.3137 38 38 38C34.6863 38 32 35.3137 32 32C32 35.3137 29.3137 38 26 38C22.6863 38 20 35.3137 20 32C20 35.3137 17.3137 38 14 38C10.6863 38 8 35.3137 8 32V24Z" 
          stroke={color === 'white' ? 'white' : 'url(#paint0_linear_storefront)'} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M20 38V56H44V38M32 38V56" 
          stroke={color === 'white' ? 'white' : 'url(#paint1_linear_storefront)'} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_storefront" x1="6" y1="6" x2="58" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint1_linear_storefront" x1="18" y1="36" x2="46" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_storefront">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function CampaignIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_campaign)">
        <path 
          d="M42.6667 21.3333L53.3333 10.6667L58.6667 16L48 26.6667M42.6667 21.3333L37.3333 26.6667L48 26.6667M42.6667 21.3333L48 26.6667" 
          stroke={color === 'white' ? 'white' : 'url(#paint0_linear_campaign)'} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle 
          cx="21.3333" 
          cy="42.6667" 
          r="16" 
          stroke={color === 'white' ? 'white' : 'url(#paint1_linear_campaign)'} 
          strokeWidth="3"
        />
        <path 
          d="M13.3333 42.6667H29.3333M21.3333 34.6667V50.6667" 
          stroke={color === 'white' ? 'white' : 'url(#paint2_linear_campaign)'} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_campaign" x1="35" y1="8" x2="60" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint1_linear_campaign" x1="3" y1="25" x2="40" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint2_linear_campaign" x1="11" y1="32" x2="32" y2="53" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_campaign">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function InventoryIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_inventory)">
        <rect 
          x="8" 
          y="16" 
          width="48" 
          height="40" 
          rx="4" 
          stroke={color === 'white' ? 'white' : 'url(#paint0_linear_inventory)'} 
          strokeWidth="3"
        />
        <path 
          d="M16 16V12C16 9.79086 17.7909 8 20 8H44C46.2091 8 48 9.79086 48 12V16" 
          stroke={color === 'white' ? 'white' : 'url(#paint1_linear_inventory)'} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M24 32H40M24 40H32" 
          stroke={color === 'white' ? 'white' : 'url(#paint2_linear_inventory)'} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <circle 
          cx="18" 
          cy="26" 
          r="2" 
          fill={color === 'white' ? 'white' : 'url(#paint3_linear_inventory)'}
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_inventory" x1="6" y1="14" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint1_linear_inventory" x1="14" y1="6" x2="50" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint2_linear_inventory" x1="22" y1="30" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint3_linear_inventory" x1="16" y1="24" x2="20" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_inventory">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function GroupsIcon({ color = 'orange' }: IconProps) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_groups)">
        <circle 
          cx="32" 
          cy="20" 
          r="8" 
          stroke={color === 'white' ? 'white' : 'url(#paint0_linear_groups)'} 
          strokeWidth="3"
        />
        <circle 
          cx="16" 
          cy="24" 
          r="6" 
          stroke={color === 'white' ? 'white' : 'url(#paint1_linear_groups)'} 
          strokeWidth="3"
        />
        <circle 
          cx="48" 
          cy="24" 
          r="6" 
          stroke={color === 'white' ? 'white' : 'url(#paint2_linear_groups)'} 
          strokeWidth="3"
        />
        <path 
          d="M8 56C8 45.5066 16.5066 37 27 37H37C47.4934 37 56 45.5066 56 56" 
          stroke={color === 'white' ? 'white' : 'url(#paint3_linear_groups)'} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M2 52C2 46.4772 6.47715 42 12 42H20" 
          stroke={color === 'white' ? 'white' : 'url(#paint4_linear_groups)'} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M44 42H52C57.5228 42 62 46.4772 62 52" 
          stroke={color === 'white' ? 'white' : 'url(#paint5_linear_groups)'} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_groups" x1="22" y1="10" x2="42" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint1_linear_groups" x1="8" y1="16" x2="24" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint2_linear_groups" x1="40" y1="16" x2="56" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint3_linear_groups" x1="6" y1="35" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint4_linear_groups" x1="0" y1="40" x2="22" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <linearGradient id="paint5_linear_groups" x1="42" y1="40" x2="64" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F25227"/>
          <stop offset="1" stopColor="#E8AA29"/>
        </linearGradient>
        <clipPath id="clip0_groups">
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
