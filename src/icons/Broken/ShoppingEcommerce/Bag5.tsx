import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag5 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.2059 14.9709C19.6687 17.6567 19.4001 18.9996 18.5127 19.8646C18.3486 20.0244 18.1712 20.1699 17.9823 20.2994C16.9601 21 15.5906 21 12.8515 21H11.1486C8.40956 21 7.04004 21 6.01786 20.2994C5.82894 20.1699 5.65149 20.0244 5.48746 19.8646C4.59999 18.9996 4.33141 17.6567 3.79424 14.9709C3.02304 11.1149 2.63744 9.18686 3.5251 7.82067C3.68582 7.5733 3.87342 7.34447 4.08447 7.13836C5.25004 6 7.21622 6 11.1486 6H12.8515C16.7839 6 18.7501 6 19.9157 7.13836C20.1267 7.34447 20.3143 7.5733 20.475 7.82067C20.9861 8.60728 21.0751 9.58013 20.9114 11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
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
