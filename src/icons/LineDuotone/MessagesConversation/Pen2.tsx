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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 22h16"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m14.63 2.921-.742.742-6.817 6.817c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626-.213.641a.848.848 0 0 0 1.073 1.073l.641-.213 2.625-.875c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891l6.817-6.817.742-.742a3.146 3.146 0 0 0-4.45-4.449Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.888 3.663S13.98 5.24 15.37 6.63s2.966 1.483 2.966 1.483m-12.579 9.63-1.5-1.5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPen2;
