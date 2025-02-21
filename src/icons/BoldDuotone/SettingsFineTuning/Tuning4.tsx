import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M10 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M13.855 12.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zM10.145 11.25a2 2 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5zM11.855 19.25a2 2 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5zM8.145 19.25H5a.75.75 0 0 0 0 1.5h3.145a2 2 0 0 1 0-1.5M15.855 4.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zM12.145 4.75a2 2 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5z" />
    </G>
  </Svg>
);
export default SvgTuning4;
