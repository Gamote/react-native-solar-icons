import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlame = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25961 3.0985C9.6636 2.08768 10.9948 1.4627 12.0272 2.24914C13.7471 3.55929 15.9044 5.48544 17.6398 7.68858C19.3595 9.87191 20.75 12.4347 20.75 14.9999C20.75 17.2932 20.0398 18.9975 19.0117 20.218C17.9933 21.4269 16.6994 22.1192 15.5816 22.467C15.0076 22.6457 14.4825 22.3825 14.2275 21.9545C13.9871 21.5511 13.9859 21.0147 14.2863 20.583C15.1436 19.351 16.05 17.5792 16.05 15.9999C16.05 15.2164 15.7123 14.2889 15.1668 13.3371C14.7566 12.6214 14.2539 11.9351 13.7643 11.3464C13.6627 12.7493 13.3578 14.512 12.412 15.9696C11.9822 16.6319 11.0267 16.7059 10.518 16.0626C10.3592 15.8617 10.2023 15.6412 10.0588 15.4392C10.0501 15.4271 10.0415 15.415 10.033 15.403C9.9545 15.2926 9.87986 15.1881 9.80763 15.09C9.12187 15.773 8.48333 16.5901 8.48333 17.4999C8.48333 18.3037 8.88448 19.4024 9.35898 20.3334C9.61561 20.8369 9.50832 21.395 9.1994 21.7605C8.87092 22.1492 8.27311 22.349 7.70569 22.0205C5.76159 20.8952 3.25 18.4916 3.25 14.9999C3.25 14.053 3.57109 13.0735 4.0203 12.1167C4.47254 11.1535 5.0858 10.1499 5.72984 9.14733C5.95297 8.79998 6.17941 8.453 6.40546 8.10662C7.51002 6.41405 8.60528 4.73573 9.25961 3.0985ZM10.8983 3.41737C10.7958 3.45286 10.6992 3.5384 10.6525 3.65518C9.93718 5.44497 8.74008 7.27707 7.63532 8.96783C7.41569 9.30397 7.19971 9.63451 6.99189 9.95803C6.35264 10.9532 5.78547 11.8866 5.3781 12.7542C4.96769 13.6284 4.75 14.3736 4.75 14.9999C4.75 17.2944 6.15653 19.0761 7.63307 20.1781C7.27845 19.337 6.98333 18.3669 6.98333 17.4999C6.98333 15.7693 8.2827 14.4628 9.00894 13.7751C9.47929 13.3298 10.2914 13.2898 10.7647 13.874C10.9359 14.0853 11.1032 14.3197 11.2553 14.5335L11.2734 14.5589C11.3161 14.619 11.3576 14.6774 11.3983 14.7342C12.0671 13.4598 12.2543 11.9055 12.3012 10.6262C12.3204 10.0997 12.6468 9.68338 13.0747 9.50929C13.5118 9.33147 14.0549 9.40981 14.4285 9.82313L13.8721 10.326L14.4285 9.82313C15.0949 10.5604 15.8626 11.5347 16.4682 12.5912C17.0657 13.6336 17.55 14.8329 17.55 15.9999C17.55 17.6926 16.7822 19.41 16.0062 20.6884C16.6582 20.3692 17.3159 19.9028 17.8644 19.2516C18.6512 18.3176 19.25 16.9611 19.25 14.9999C19.25 12.9433 18.1125 10.713 16.4614 8.61673C14.8259 6.54027 12.7696 4.70028 11.1183 3.44237C11.0636 3.40073 10.993 3.3846 10.8983 3.41737Z"
      fill="black"
    />
  </Svg>
);
export default SvgFlame;
