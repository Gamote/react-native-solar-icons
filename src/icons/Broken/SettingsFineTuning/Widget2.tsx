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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S2.5 19.386 2.5 17.5ZM13.5 6.5c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"
    />
  </Svg>
);
export default SvgWidget2;
