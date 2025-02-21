import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloset2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 2h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h2zM9 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M14 20h-2V2h2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20"
      opacity={0.5}
    />
    <Path fill="#000" d="M15.75 9a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" />
  </Svg>
);
export default SvgCloset2;
