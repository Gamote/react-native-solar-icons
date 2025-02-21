import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyboard = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M7 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 16h10"
      opacity={0.5}
    />
  </Svg>
);
export default SvgKeyboard;
