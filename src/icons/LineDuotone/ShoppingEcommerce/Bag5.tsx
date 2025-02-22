import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag5 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.79412 14.9709C4.33129 17.6567 4.59987 18.9996 5.48734 19.8646C5.65136 20.0244 5.82882 20.1699 6.01774 20.2994C7.03992 21 8.40944 21 11.1485 21H12.8514C15.5904 21 16.96 21 17.9821 20.2994C18.1711 20.1699 18.3485 20.0244 18.5125 19.8646C19.4 18.9996 19.6686 17.6567 20.2058 14.9709C20.977 11.1149 21.3626 9.18686 20.4749 7.82067C20.3142 7.5733 20.1266 7.34447 19.9155 7.13836C18.75 6 16.7838 6 12.8514 6H11.1485C7.2161 6 5.24992 6 4.08434 7.13836C3.8733 7.34447 3.6857 7.5733 3.52498 7.82067C2.63732 9.18686 3.02292 11.1149 3.79412 14.9709Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle opacity={0.5} cx={15} cy={10} r={1} fill={props.primaryColor} />
    <Circle opacity={0.5} cx={9} cy={10} r={1} fill={props.primaryColor} />
    <Path
      opacity={0.5}
      d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBag5;
