import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGps = (props: SvgProps) => (
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
      d="M2 12c0 .385.312.698.698.698H4.59a7.444 7.444 0 0 0 6.712 6.712v1.892a.698.698 0 0 0 1.396 0V19.41a7.444 7.444 0 0 0 6.712-6.712h1.892a.698.698 0 0 0 0-1.396H19.41a7.444 7.444 0 0 0-6.712-6.712V2.698a.698.698 0 0 0-1.396 0V4.59a7.444 7.444 0 0 0-6.712 6.712H2.698A.7.7 0 0 0 2 12m6.512 0a3.488 3.488 0 1 1 6.976 0 3.488 3.488 0 0 1-6.976 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M9.907 12a2.093 2.093 0 1 1 4.186 0 2.093 2.093 0 0 1-4.186 0"
    />
  </Svg>
);
export default SvgGps;
