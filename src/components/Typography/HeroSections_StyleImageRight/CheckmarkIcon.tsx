import { memo, SVGProps } from 'react';

const CheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={32} cy={32} r={32} fill='#DCF2ED' />
    <g clipPath='url(#clip0_204_1715)'>
      <path
        d='M27.75 37.9075L21.8425 32L19.8309 33.9975L27.75 41.9167L44.75 24.9167L42.7525 22.9192L27.75 37.9075Z'
        fill='#20484F'
      />
    </g>
    <defs>
      <clipPath id='clip0_204_1715'>
        <rect width={34} height={34} fill='white' transform='translate(15 15)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(CheckmarkIcon);
export { Memo as CheckmarkIcon };
