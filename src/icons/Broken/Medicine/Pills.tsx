import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m11.628-2.806a5.4 5.4 0 0 0-1.376-2.32l-5.126-5.126a5.437 5.437 0 1 0-7.689 7.69l5.127 5.125A5.437 5.437 0 0 0 21.425 15M14.5 6.5 13 5"
    />
    <Path
      fill="#000"
      d="M6.888 10.868A.75.75 0 1 0 6.572 9.4zm-1.075 9.906a.75.75 0 0 0-.626 1.364zm-3.95-1.961a.75.75 0 0 0 1.363-.626zM2.75 16a5.25 5.25 0 0 1 4.138-5.132L6.572 9.4A6.75 6.75 0 0 0 1.25 16zm10.389 1.08A5.25 5.25 0 0 1 8 21.25v1.5c3.253 0 5.968-2.3 6.607-5.364zM8 21.25c-.782 0-1.522-.17-2.187-.476l-.626 1.364c.857.393 1.81.612 2.813.612zm-4.774-3.063A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.002.219 1.956.612 2.813z"
    />
  </Svg>
);
export default SvgPills;
