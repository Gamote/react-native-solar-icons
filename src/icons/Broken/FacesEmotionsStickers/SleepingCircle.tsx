import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSleepingCircle = (props: SvgProps) => (
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
      d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1"
    />
    <Path fill="#000" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17 4 3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5"
    />
  </Svg>
);
export default SvgSleepingCircle;
