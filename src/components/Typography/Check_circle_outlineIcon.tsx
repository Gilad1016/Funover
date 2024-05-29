import { memo, SVGProps } from 'react';

const Check_circle_outlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_204_1687)'>
      <path
        d='M16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z'
        fill='#20484F'
      />
    </g>
    <defs>
      <clipPath id='clip0_204_1687'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Check_circle_outlineIcon);
export { Memo as Check_circle_outlineIcon };
