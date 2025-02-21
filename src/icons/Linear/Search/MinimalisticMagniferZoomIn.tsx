import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMinimalisticMagniferZoomIn = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={11.5} cy={11.5} r={9.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2"
    />
  </Svg>
);
export default SvgMinimalisticMagniferZoomIn;
