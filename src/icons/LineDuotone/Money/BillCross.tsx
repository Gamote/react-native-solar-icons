import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBillCross = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M17.6667 2H6.33333C6.02379 2 5.86902 2 5.73853 2.01198C4.28819 2.14511 3.1383 3.35155 3.01142 4.87321C3 5.01012 3 5.1725 3 5.49727V20.2598C3 21.1323 4.05871 21.5026 4.55769 20.8045C4.90385 20.3203 5.59615 20.3203 5.94231 20.8045L6.375 21.4098C6.9375 22.1967 8.0625 22.1967 8.625 21.4098C9.1875 20.623 10.3125 20.623 10.875 21.4098C11.4375 22.1967 12.5625 22.1967 13.125 21.4098C13.6875 20.623 14.8125 20.623 15.375 21.4098C15.9375 22.1967 17.0625 22.1967 17.625 21.4098L18.0577 20.8045C18.4038 20.3203 19.0962 20.3203 19.4423 20.8045C19.9413 21.5026 21 21.1323 21 20.2598V5.49727C21 5.1725 21 5.01012 20.9886 4.87321C20.8617 3.35155 19.7118 2.14511 18.2615 2.01198C18.131 2 17.9762 2 17.6667 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7.5 15.5H16.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 8.00003L10 12M10 8.00002L14 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBillCross;
