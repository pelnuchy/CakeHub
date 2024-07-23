import { memo, SVGProps } from 'react';

const SelectoriconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.52859 5.54931C3.78894 5.28896 4.21105 5.28896 4.4714 5.54931L8 9.0779L11.5286 5.54931C11.7889 5.28896 12.2111 5.28896 12.4714 5.54931C12.7318 5.80966 12.7318 6.23177 12.4714 6.49212L8.54211 10.4214C8.24271 10.7208 7.75729 10.7208 7.45788 10.4214L3.52859 6.49212C3.26824 6.23177 3.26824 5.80966 3.52859 5.54931Z'
      fill='#CCCCCC'
    />
  </svg>
);

const Memo = memo(SelectoriconIcon);
export { Memo as SelectoriconIcon };
