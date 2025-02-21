import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWallpaper = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.7209 7.34884C15.7209 8.37634 14.888 9.2093 13.8605 9.2093C12.833 9.2093 12 8.37634 12 7.34884C12 6.32133 12.833 5.48837 13.8605 5.48837C14.888 5.48837 15.7209 6.32133 15.7209 7.34884Z"
      fill="black"
    />
    <Path
      d="M22 7.75375C22.0001 7.38007 22.0002 7.11208 21.9628 6.8759C21.8273 6.02056 21.3378 5.28723 20.6478 4.82926C20.5697 4.7774 20.4713 4.84508 20.4838 4.93803V4.93803C20.5838 5.6818 20.6011 6.56503 20.604 7.5288C20.6045 7.60793 20.6046 7.70163 20.6046 7.81395V7.97276V8.14596V15.854C20.6046 15.912 20.6046 15.9697 20.6046 16.0272V16.186C20.6046 16.2985 20.6045 16.3923 20.604 16.4715C20.6011 17.4352 20.5838 18.3183 20.4838 19.062V19.062C20.4713 19.1549 20.5697 19.2226 20.6478 19.1707C21.3378 18.7128 21.8273 17.9794 21.9628 17.1241C22.0002 16.8879 22.0001 16.6199 22 16.2463L22 16.186V7.81395L22 7.75375Z"
      fill="black"
    />
    <Path
      d="M3.39537 7.81395C3.39537 7.70183 3.3955 7.60826 3.39595 7.52923C3.39614 7.46877 3.39638 7.40864 3.39669 7.34883C3.40139 6.45503 3.42246 5.63526 3.5162 4.93803V4.93803C3.5287 4.84508 3.43032 4.7774 3.35218 4.82926C2.66215 5.28723 2.17271 6.02056 2.03724 6.8759C1.99984 7.11207 1.99991 7.38007 2.00001 7.75373L2.00002 7.81395V16.186L2.00001 16.2463C1.99991 16.6199 1.99984 16.8879 2.03724 17.1241C2.17271 17.9794 2.66215 18.7128 3.35218 19.1707C3.43032 19.2226 3.5287 19.1549 3.5162 19.062V19.062C3.42246 18.3647 3.40139 17.545 3.39669 16.6512C3.39638 16.5913 3.39614 16.5312 3.39595 16.4708C3.3955 16.3917 3.39537 16.2982 3.39537 16.186V16.0399C3.39535 15.9782 3.39536 15.9162 3.39536 15.854L3.39537 8.22802L3.39536 8.14598C3.39536 8.08375 3.39535 8.02179 3.39537 7.96011V7.81395Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0853 2.10839C15.2789 1.99997 14.2535 1.99998 12.9813 2H11.0187C9.74655 1.99998 8.72114 1.99997 7.91466 2.10839C7.07735 2.22097 6.37235 2.4618 5.81243 3.02172C5.25251 3.58164 5.01168 4.28664 4.89911 5.12395C4.79068 5.93043 4.79069 6.95585 4.79071 8.22802V15.772C4.79069 17.0442 4.79068 18.0696 4.89911 18.876C5.01168 19.7134 5.25251 20.4184 5.81243 20.9783C6.37235 21.5382 7.07735 21.779 7.91466 21.8916C8.72114 22 9.74655 22 11.0187 22H12.9813C14.2534 22 15.2789 22 16.0853 21.8916C16.9226 21.779 17.6276 21.5382 18.1876 20.9783C18.7475 20.4184 18.9883 19.7134 19.1009 18.876C19.2093 18.0696 19.2093 17.0441 19.2093 15.772V8.22803C19.2093 6.95585 19.2093 5.93044 19.1009 5.12395C18.9883 4.28664 18.7475 3.58164 18.1876 3.02172C17.6276 2.4618 16.9226 2.22097 16.0853 2.10839ZM16.8085 16.6302L17.7946 17.6708C17.8134 17.134 17.8139 16.4954 17.8139 15.7209V8.27907C17.8139 6.9438 17.8125 6.01253 17.718 5.30988C17.6262 4.6273 17.4584 4.26584 17.2009 4.00838C16.9435 3.75093 16.582 3.58307 15.8994 3.4913C15.1968 3.39683 14.2655 3.39535 12.9302 3.39535H11.0698C9.7345 3.39535 8.80324 3.39683 8.10059 3.4913C7.41801 3.58307 7.05654 3.75093 6.79909 4.00838C6.54164 4.26584 6.37378 4.6273 6.28201 5.30988C6.18754 6.01253 6.18606 6.9438 6.18606 8.27907V12.904L6.18936 12.9007C7.10618 11.96 8.52458 12.0245 9.37271 13.019L12.313 16.4668C12.5485 16.7429 12.8584 16.7555 13.0961 16.5596L13.3005 16.3912C14.3764 15.5045 15.8517 15.6204 16.8085 16.6302Z"
      fill="black"
    />
  </Svg>
);
export default SvgWallpaper;
