import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameCut2 = (props: SvgProps) => (
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
      d="M8.5 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5m7-16h.5c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 4v16M7 4v16M2.5 9H7m10 0h4.5m-19 6H7m10 0h4.5M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.138 2ZM13.138 22h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 11.5v1M12 7.5v1M12 15.5v1"
    />
  </Svg>
);
export default SvgVideoFrameCut2;
