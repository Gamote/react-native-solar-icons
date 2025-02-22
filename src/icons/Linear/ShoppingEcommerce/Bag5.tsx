import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag5 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.79418 14.9709C4.33135 17.6567 4.59993 18.9996 5.4874 19.8646C5.65142 20.0244 5.82888 20.1699 6.0178 20.2994C7.03998 21 8.4095 21 11.1485 21H12.8515C15.5905 21 16.96 21 17.9822 20.2994C18.1711 20.1699 18.3486 20.0244 18.5126 19.8646C19.4001 18.9996 19.6687 17.6567 20.2058 14.9709C20.977 11.1149 21.3626 9.18686 20.475 7.82067C20.3142 7.5733 20.1266 7.34447 19.9156 7.13836C18.75 6 16.7838 6 12.8515 6H11.1485C7.21616 6 5.24998 6 4.0844 7.13836C3.87336 7.34447 3.68576 7.5733 3.52504 7.82067C2.63738 9.18686 3.02298 11.1149 3.79418 14.9709Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle cx={15} cy={10} r={1} fill={props.primaryColor} />
    <Circle cx={9} cy={10} r={1} fill={props.primaryColor} />
    <Path
      d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBag5;
