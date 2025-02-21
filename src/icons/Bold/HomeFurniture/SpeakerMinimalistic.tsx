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
      fill="#000"
      d="M12 10.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm3.25 4a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSpeakerMinimalistic;
