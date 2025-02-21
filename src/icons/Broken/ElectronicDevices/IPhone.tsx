import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIPhone = (props: SvgProps) => (
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
      d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10M15 19H9"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16.748 2.377-.084.127c-.756 1.134-1.134 1.7-1.686 2.044a3 3 0 0 1-.342.183C14.044 5 13.363 5 12 5s-2.045 0-2.636-.27a3 3 0 0 1-.342-.182c-.552-.343-.93-.91-1.686-2.044l-.084-.127"
    />
  </Svg>
);
export default SvgIPhone;
