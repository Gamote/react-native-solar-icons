import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScale = (props: SvgProps) => (
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
      d="M11 2c-4.055.007-6.178.107-7.535 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.465 8.536c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 11 9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8"
    />
  </Svg>
);
export default SvgScale;
