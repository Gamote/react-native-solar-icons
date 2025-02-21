import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTraffic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.114 21.932A10.75 10.75 0 1 1 12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0 10.75 10.75 0 0 1-6.636 9.932"
    />
    <Path
      fill="#000"
      d="M14.687 1.589a.75.75 0 1 0-.374 1.452 9.27 9.27 0 0 1 6.646 6.646.75.75 0 0 0 1.452-.374 10.77 10.77 0 0 0-7.724-7.724"
    />
  </Svg>
);
export default SvgTraffic;
