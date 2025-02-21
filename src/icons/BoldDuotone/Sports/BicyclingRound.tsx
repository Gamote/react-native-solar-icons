import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicyclingRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.379-.59l.76-1.775a1.14 1.14 0 0 0-.591-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.158 1.719c.163.129.364.199.571.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.4 2.4 0 0 1-1.505-.526z"
      clipRule="evenodd"
    />
    <G fill="#000" fillRule="evenodd" clipRule="evenodd" opacity={0.5}>
      <Path d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" />
    </G>
  </Svg>
);
export default SvgBicyclingRound;
