import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpeakerMinimalistic = (props: SvgProps) => (
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
      d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M10 6h4" />
  </Svg>
);
export default SvgSpeakerMinimalistic;
