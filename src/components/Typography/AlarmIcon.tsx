import { memo, SVGProps } from 'react';

const AlarmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_204_1684)'>
      <path
        d='M22 5.71986L17.4 1.85986L16.11 3.38986L20.71 7.24986L22 5.71986ZM7.88 3.38986L6.6 1.85986L2 5.70986L3.29 7.23986L7.88 3.38986ZM12.5 7.99986H11V13.9999L15.75 16.8499L16.5 15.6199L12.5 13.2499V7.99986ZM12 3.99986C7.03 3.99986 3 8.02986 3 12.9999C3 17.9699 7.02 21.9999 12 21.9999C16.97 21.9999 21 17.9699 21 12.9999C21 8.02986 16.97 3.99986 12 3.99986ZM12 19.9999C8.13 19.9999 5 16.8699 5 12.9999C5 9.12986 8.13 5.99986 12 5.99986C15.87 5.99986 19 9.12986 19 12.9999C19 16.8699 15.87 19.9999 12 19.9999Z'
        fill='#20484F'
      />
    </g>
    <defs>
      <clipPath id='clip0_204_1684'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(AlarmIcon);
export { Memo as AlarmIcon };
