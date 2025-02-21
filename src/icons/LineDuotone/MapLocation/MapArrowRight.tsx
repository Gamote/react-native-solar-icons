import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowRight = (props: SvgProps) => (
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
      d="M5.527 12c0-.25-.062-.5-.184-.73L2.19 5.368C1.45 3.979 3 2.497 4.497 3.165l16.51 7.362c.662.296.993.884.993 1.473"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.527 12c0 .25-.061.5-.184.73l-3.152 5.903c-.74 1.388.81 2.87 2.306 2.202l16.51-7.363C21.67 13.178 22 12.59 22 12"
      opacity={0.5}
    />
  </Svg>
);
export default SvgMapArrowRight;
