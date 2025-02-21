import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWidget2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 6.5c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWidget2;
