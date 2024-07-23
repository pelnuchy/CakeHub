import { memo, SVGProps } from 'react';

const SelectoriconIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.32393 18.707C7.93341 18.3165 7.93341 17.6834 8.32393 17.2928L13.6168 11.9999L8.32393 6.70705C7.93341 6.31652 7.93341 5.68336 8.32393 5.29283C8.71445 4.90231 9.34762 4.90231 9.73814 5.29283L15.6321 11.1868C16.0812 11.6359 16.0812 12.364 15.6321 12.8131L9.73814 18.707C9.34762 19.0976 8.71445 19.0976 8.32393 18.707Z'
      fill='#CCCCCC'
    />
  </svg>
);

const Memo = memo(SelectoriconIcon3);
export { Memo as SelectoriconIcon3 };
