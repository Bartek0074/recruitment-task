import { SVGProps } from 'react';

export default function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <g clipPath="url(#clip0_32_195)">
        <path
          d="M26 13.9121H1.17419"
          stroke="currentColor"
          strokeWidth="2.77419"
          strokeMiterlimit="10"
        />
        <path
          d="M14.4268 0.679382L1.17514 13.9157L14.4268 27.3218"
          stroke="currentColor"
          strokeWidth="2.77419"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_195">
          <rect width="26" height="28" fill="white" transform="matrix(-1 0 0 1 26 0)" />
        </clipPath>
      </defs>
    </svg>
  );
}
