import { memo, SVGProps } from 'react';

const Tab_unselectedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_204_1729)'>
      <path
        d='M1 9H3V7H1V9ZM1 13H3V11H1V13ZM1 5H3V3C1.9 3 1 3.9 1 5ZM9 21H11V19H9V21ZM1 17H3V15H1V17ZM3 21V19H1C1 20.1 1.9 21 3 21ZM21 3H13V9H23V5C23 3.9 22.1 3 21 3ZM21 17H23V15H21V17ZM9 5H11V3H9V5ZM5 21H7V19H5V21ZM5 5H7V3H5V5ZM21 21C22.1 21 23 20.1 23 19H21V21ZM21 13H23V11H21V13ZM13 21H15V19H13V21ZM17 21H19V19H17V21Z'
        fill='#20484F'
      />
    </g>
    <defs>
      <clipPath id='clip0_204_1729'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Tab_unselectedIcon);
export { Memo as Tab_unselectedIcon };