import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReel2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgReel2;
