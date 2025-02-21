import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclip2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2442 1.95482C12.9441 1.01506 15.0345 1.01506 16.7345 1.95482C17.3641 2.30291 17.9518 2.86575 18.9065 3.78014C18.9373 3.80965 18.9685 3.83952 19.0001 3.86977C19.2993 4.15623 19.3096 4.631 19.0231 4.93018C18.7366 5.22936 18.2619 5.23967 17.9627 4.9532C16.8844 3.92069 16.4452 3.50886 16.0087 3.26758C14.7604 2.57747 13.2183 2.57747 11.9699 3.26758C11.5334 3.50886 11.0943 3.92069 10.0159 4.9532L4.02651 10.6881C3.72732 10.9745 3.25256 10.9642 2.9661 10.665C2.67963 10.3659 2.68994 9.8911 2.98912 9.60464L8.97855 3.86977C9.01014 3.83952 9.04133 3.80965 9.07214 3.78014C10.0268 2.86575 10.6145 2.30291 11.2442 1.95482ZM14.945 6.76023C15.2314 6.46104 15.7062 6.45074 16.0054 6.7372C16.0326 6.76328 16.0596 6.78906 16.0863 6.81457C16.4533 7.16504 16.7689 7.46639 16.9459 7.81825C17.2622 8.44722 17.2622 9.18288 16.9459 9.81184C16.7689 10.1637 16.4533 10.4651 16.0863 10.8155C16.0596 10.841 16.0326 10.8668 16.0054 10.8929L8.62553 17.9591C8.32635 18.2455 7.85159 18.2352 7.56512 17.936C7.27866 17.6369 7.28897 17.1621 7.58815 16.8756L14.968 9.80945C15.4628 9.33562 15.5615 9.22595 15.6058 9.13786C15.7089 8.93291 15.7089 8.69718 15.6058 8.49224C15.5615 8.40415 15.4628 8.29447 14.968 7.82064C14.6688 7.53417 14.6585 7.05941 14.945 6.76023Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M17.9628 4.95358C19.0429 5.9878 19.4703 6.40622 19.7194 6.81926C20.4269 7.99256 20.4269 9.43347 19.7194 10.6068C19.4703 11.0198 19.0429 11.4382 17.9628 12.4725L10.5295 19.5898C9.97082 20.1247 9.58528 20.493 9.26135 20.7543C8.94539 21.0092 8.7384 21.1195 8.55399 21.1725C8.19285 21.2763 7.80709 21.2763 7.44595 21.1725C7.26154 21.1195 7.05455 21.0092 6.73859 20.7543C6.41466 20.493 6.02912 20.1247 5.47047 19.5898C4.91163 19.0547 4.52727 18.6858 4.2548 18.3761C3.98794 18.0728 3.87862 17.8805 3.82747 17.7174C3.72418 17.388 3.72418 17.0378 3.82747 16.7084C3.87862 16.5453 3.98794 16.353 4.2548 16.0497C4.52727 15.74 4.91163 15.3711 5.47047 14.836L12.7968 7.82101C13.2887 7.35 13.4068 7.25113 13.5074 7.20474C13.7436 7.09583 14.0213 7.09583 14.2575 7.20474C14.3581 7.25113 14.4761 7.35 14.9681 7.82101C14.9682 7.82113 14.9679 7.8209 14.9681 7.82101C14.6689 7.53455 14.6585 7.05916 14.945 6.75998C15.2259 6.46658 15.6879 6.45099 15.9878 6.72068L15.9274 6.66272C15.558 6.30819 15.2461 6.00881 14.8856 5.84257C14.2508 5.54989 13.5141 5.54989 12.8793 5.84257C12.5188 6.00881 12.2069 6.30819 11.8375 6.66271L4.40899 13.7756C3.88009 14.282 3.44862 14.6951 3.12862 15.0589C2.79815 15.4345 2.53687 15.811 2.3962 16.2596C2.20127 16.8811 2.20127 17.5447 2.3962 18.1663C2.53687 18.6148 2.79815 18.9913 3.12862 19.3669C3.44862 19.7307 3.88006 20.1438 4.40896 20.6502L4.4568 20.696C4.98604 21.2027 5.41736 21.6157 5.79685 21.9218C6.18996 22.2389 6.57706 22.4834 7.03145 22.6141C7.66343 22.7958 8.3365 22.7958 8.96849 22.6141C9.42288 22.4834 9.80998 22.2389 10.2031 21.9218C10.5826 21.6157 11.0139 21.2028 11.5431 20.696L19.0979 13.4623C20.0489 12.552 20.6381 11.988 21.0039 11.3813C21.9987 9.73161 21.9987 7.69442 21.0039 6.04471C20.6381 5.43798 20.0489 4.874 19.0979 3.96371L19.0175 3.88672C19.2996 4.17468 19.3039 4.63666 19.0231 4.92993C18.7366 5.22911 18.262 5.24004 17.9628 4.95358Z"
      fill="black"
    />
  </Svg>
);
export default SvgPaperclip2;
