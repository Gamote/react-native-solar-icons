import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserCheckRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={6} r={4} fill="#000" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m1.968-4.254a.583.583 0 1 0-.825-.825l-1.92 1.92-.366-.365a.583.583 0 1 0-.825.825l.778.778a.583.583 0 0 0 .825 0z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.415 13.507A11.3 11.3 0 0 0 12 13c-3.866 0-7 1.79-7 4 0 2.14 2.942 3.888 6.642 3.995a5 5 0 0 1-.064-.375c-.078-.578-.078-1.283-.078-2.034v-.172c0-.75 0-1.456.078-2.034.086-.643.293-1.347.874-1.928.581-.582 1.285-.788 1.928-.875a10 10 0 0 1 1.035-.07"
    />
  </Svg>
);
export default SvgUserCheckRounded;
