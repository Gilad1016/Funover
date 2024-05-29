import { memo, SVGProps } from 'react';

const CheckIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_204_1746)'>
      <path
        d='M3.90919 6.5163L2.39283 4.99994L1.87646 5.51266L3.90919 7.54539L8.27283 3.18175L7.7601 2.66903L3.90919 6.5163Z'
        fill='#20484F'
      />
    </g>
    <defs>
      <clipPath id='clip0_204_1746'>
        <rect width={8.72727} height={8.72727} fill='white' transform='translate(0.636393 0.636393)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(CheckIcon2);
export { Memo as CheckIcon2 };
