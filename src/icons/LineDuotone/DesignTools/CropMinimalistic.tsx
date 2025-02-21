import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCropMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 5h9c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v9"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCropMinimalistic;
