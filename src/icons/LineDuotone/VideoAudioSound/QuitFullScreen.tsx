import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgQuitFullScreen = (props: SvgProps) => (
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
      d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"
      opacity={0.5}
    />
  </Svg>
);
export default SvgQuitFullScreen;
