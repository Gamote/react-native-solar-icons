import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserMinus = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.513 21.487C14.025 22 14.85 22 16.5 22s2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5s0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15s-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987m2.404-3.57h-.973a.583.583 0 1 0 0 1.166h3.112a.583.583 0 1 0 0-1.166h-2.139"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.678 13.503c-.473.005-.914.023-1.298.074-.643.087-1.347.293-1.928.875-.582.581-.788 1.285-.874 1.928-.078.578-.078 1.284-.078 2.034v.172c0 .75 0 1.456.078 2.034.06.451.18.932.447 1.38H12c-8 0-8-2.015-8-4.5S7.582 13 12 13c1.326 0 2.577.181 3.678.503"
    />
    <Circle cx={12} cy={6} r={4} fill="#000" />
  </Svg>
);
export default SvgUserMinus;
