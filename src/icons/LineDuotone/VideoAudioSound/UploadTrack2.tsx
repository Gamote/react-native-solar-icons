import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTrack2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M13 15V7" />
    <Circle cx={11} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 10a3 3 0 0 1-3-3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
    />
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
  </Svg>
);
export default SvgUploadTrack2;
