import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m20 19 .53.53a.75.75 0 0 0 0-1.06zM8 4.25a.75.75 0 0 0 0 1.5zm10.53 12.22a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.72-2.22a.75.75 0 0 0 0 1.5zM10 19.75a.75.75 0 0 0 0-1.5zm1-14a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-7.5 8.5h9v-1.5h-9zm13.03 5.72-2-2-1.06 1.06 2 2zm-1.06 0-2 2 1.06 1.06 2-2zm1.28-9.97a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25zm12.5 0h-6.25v1.5H20zm-10 0H7.5v1.5H10zm1-14H8v1.5h3zm5.5 0H15v1.5h1.5z"
    />
    <Circle cx={6} cy={5} r={2} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgRouting;
