import * as React from "react";
import Svg, { Circle, Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFacemaskCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.5 20.5 17 15l-3.143-1.257a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"
    />
    <Ellipse cx={15} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <Ellipse cx={9} cy={10.5} fill="#000" rx={1} ry={1.5} />
  </Svg>
);
export default SvgFacemaskCircle;
