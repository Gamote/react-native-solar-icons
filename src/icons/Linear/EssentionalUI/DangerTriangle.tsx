import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDangerTriangle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 8v5" />
    <Circle cx={12} cy={16} r={1} fill="#000" />
  </Svg>
);
export default SvgDangerTriangle;
