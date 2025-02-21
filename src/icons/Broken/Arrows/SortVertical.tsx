import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortVertical = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 18v-2m0-10 4 4.125M16 6l-4 4.125M16 6v7M8 18l4-4.125M8 18l-4-4.125M8 18v-7m0-5v2"
    />
  </Svg>
);
export default SvgSortVertical;
