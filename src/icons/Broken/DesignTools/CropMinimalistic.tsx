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
      d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828M5 11V2M8 5h3c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"
    />
  </Svg>
);
export default SvgCropMinimalistic;
