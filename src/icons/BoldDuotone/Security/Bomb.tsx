import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBomb = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.5 22a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"
    />
    <Path
      fill="#000"
      d="m16.477 6.462-2.23 2.23q.582.478 1.06 1.062l2.23-2.231-.21-.535a.56.56 0 0 0-.315-.315z"
      opacity={0.7}
    />
  </Svg>
);
export default SvgBomb;
