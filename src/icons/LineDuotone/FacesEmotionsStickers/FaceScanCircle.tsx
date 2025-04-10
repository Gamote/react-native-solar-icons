import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFaceScanCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Ellipse cx={15} cy={10.5} rx={1} ry={1.5} fill={props.primaryColor} />
    <Ellipse cx={9} cy={10.5} rx={1} ry={1.5} fill={props.primaryColor} />
    <Path
      opacity={0.5}
      d="M2.20007 10.0002C2.99545 6.08188 6.08186 2.99551 10.0002 2.2002"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M2.2002 14C2.99557 17.9183 6.08198 21.0047 10.0003 21.8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M21.8001 10.0002C21.0047 6.08188 17.9183 2.99551 14 2.2002"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M21.8001 14C21.0047 17.9183 17.9183 21.0047 14 21.8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFaceScanCircle;
