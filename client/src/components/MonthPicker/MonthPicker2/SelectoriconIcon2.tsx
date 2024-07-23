import { memo, SVGProps } from 'react';

const SelectoriconIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.676 5.29283C16.0665 5.68336 16.0665 6.31652 15.676 6.70705L10.3831 11.9999L15.676 17.2928C16.0665 17.6834 16.0665 18.3165 15.676 18.707C15.2855 19.0976 14.6523 19.0976 14.2618 18.707L8.36783 12.8131C7.91873 12.364 7.91873 11.6359 8.36783 11.1868L14.2618 5.29283C14.6523 4.90231 15.2855 4.90231 15.676 5.29283Z'
      fill='#CCCCCC'
    />
  </svg>
);

const Memo = memo(SelectoriconIcon2);
export { Memo as SelectoriconIcon2 };
