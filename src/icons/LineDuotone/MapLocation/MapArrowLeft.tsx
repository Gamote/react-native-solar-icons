import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowLeft = (props: SvgProps) => (
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
      d="M18.473 12c0 .25.061.5.184.73l3.152 5.903c.74 1.388-.81 2.87-2.306 2.202l-16.51-7.363C2.33 13.178 2 12.59 2 12"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18.473 12c0-.25.061-.5.184-.73l3.152-5.903c.74-1.388-.81-2.87-2.306-2.202l-16.51 7.362C2.33 10.824 2 11.412 2 12"
      opacity={0.5}
    />
  </Svg>
);
export default SvgMapArrowLeft;
