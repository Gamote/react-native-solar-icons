import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgParagraphSpacing = (props: SvgProps) => (
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
      d="M4 21h9m7 0h-3M4 3h16M12 5.5l3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"
    />
  </Svg>
);
export default SvgParagraphSpacing;
