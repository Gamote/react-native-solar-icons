import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag4 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.79418 12.0291C4.33135 9.34329 4.59993 8.00036 5.4874 7.13543C5.65142 6.97557 5.82888 6.8301 6.0178 6.70061C7.03998 6 8.4095 6 11.1485 6H12.8515C15.5905 6 16.96 6 17.9822 6.70061C18.1711 6.8301 18.3486 6.97557 18.5126 7.13543C19.4001 8.00036 19.6687 9.34329 20.2058 12.0291C20.977 15.8851 21.3626 17.8131 20.475 19.1793C20.3142 19.4267 20.1266 19.6555 19.9156 19.8616C18.75 21 16.7838 21 12.8515 21H11.1485C7.21616 21 5.24998 21 4.0844 19.8616C3.87336 19.6555 3.68576 19.4267 3.52504 19.1793C2.63738 17.8131 3.02298 15.8851 3.79418 12.0291Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle cx={15} cy={9} r={1} fill={props.primaryColor} />
    <Circle cx={9} cy={9} r={1} fill={props.primaryColor} />
    <Path
      d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBag4;
