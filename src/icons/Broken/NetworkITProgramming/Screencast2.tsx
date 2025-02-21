import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScreencast2 = (props: SvgProps) => (
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
      d="M20 18.415a3 3 0 0 0 .828-.587C22 16.657 22 14.771 22 11v-1M4 18.415a3 3 0 0 1-.828-.587C2 16.657 2 14.771 2 11s0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427q.08-.003.159 0c.574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.5 1.5 0 0 1-.09.218C16.297 21 14.865 21 12 21s-4.298 0-4.715-.819a1.5 1.5 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z"
    />
  </Svg>
);
export default SvgScreencast2;
