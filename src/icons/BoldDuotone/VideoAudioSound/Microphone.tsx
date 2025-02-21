import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrophone = (props: SvgProps) => (
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
      d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.452.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.75 5.75 0 0 0 12 2"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M12.25 10.75c0 .414.336.75.75.75h4.701l.049-1.5H13a.75.75 0 0 0-.75.75M12.25 7.75c0 .414.336.75.75.75h4.75L17.701 7H13a.75.75 0 0 0-.75.75"
    />
  </Svg>
);
export default SvgMicrophone;
