import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSun = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={6} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v1M12 21v1M22 12h-1M3 12H2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m19.07 4.93-.392.392M5.322 18.678l-.393.393M19.07 19.07l-.392-.392M5.322 5.322l-.393-.393"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSun;
