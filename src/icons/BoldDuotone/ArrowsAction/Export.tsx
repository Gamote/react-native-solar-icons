import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgExport = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M4 12a8 8 0 1 0 16 0z" opacity={0.5} />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15.53 7.53a.75.75 0 0 1-1.06 0l-1.72-1.72V14a.75.75 0 0 1-1.5 0V5.81L9.53 7.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgExport;
