import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolumeKnob = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.25 7.816a4.251 4.251 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M3.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6.697 5.282a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415M18.718 17.303a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415M18.718 6.697a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
    />
  </Svg>
);
export default SvgVolumeKnob;
