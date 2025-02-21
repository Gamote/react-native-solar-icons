import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPen2 = (props: SvgProps) => (
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
      d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="m11.52 14.929 5.917-5.917a8.2 8.2 0 0 1-2.661-1.787 8.2 8.2 0 0 1-1.788-2.662L7.07 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-1.088 3.267a.848.848 0 0 0 1.073 1.073l3.266-1.088c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891M19.079 7.37a3.146 3.146 0 0 0-4.45-4.449l-.71.71.031.09c.26.749.751 1.732 1.674 2.655A7 7 0 0 0 18.37 8.08z"
    />
  </Svg>
);
export default SvgPen2;
