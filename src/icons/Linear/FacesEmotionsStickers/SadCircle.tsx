import * as React from "react";
import Svg, { Circle, Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSadCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke="black" strokeWidth={1.5} />
    <Path
      d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Ellipse cx={15} cy={10.5} rx={1} ry={1.5} fill="black" />
    <Ellipse cx={9} cy={10.5} rx={1} ry={1.5} fill="black" />
  </Svg>
);
export default SvgSadCircle;
