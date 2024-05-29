import { memo, SVGProps } from 'react';

const PositionIndicatorsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4} cy={4} r={4} fill='#B8E4DA' stroke='#B8E4DA' strokeWidth={2} />
    <circle cx={24} cy={4} r={4} fill='#20484F' />
    <circle cx={44} cy={4} r={4} fill='#20484F' />
    <circle cx={64} cy={4} r={4} fill='#20484F' />
  </svg>
);
const Memo = memo(PositionIndicatorsIcon);
export { Memo as PositionIndicatorsIcon };
