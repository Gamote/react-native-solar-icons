import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserCheck = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0M15.678 13.503c-.473.005-.914.023-1.298.074-.643.087-1.347.293-1.928.875-.582.581-.788 1.285-.874 1.928-.078.578-.078 1.284-.078 2.034v.172c0 .75 0 1.456.078 2.034.06.451.18.932.447 1.38H12c-8 0-8-2.015-8-4.5S7.582 13 12 13c1.326 0 2.577.181 3.678.503"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m1.968-4.254a.583.583 0 1 0-.825-.825l-1.92 1.92-.366-.365a.583.583 0 1 0-.825.825l.778.778a.583.583 0 0 0 .825 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUserCheck;
