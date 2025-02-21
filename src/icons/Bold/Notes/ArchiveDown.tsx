import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5M20.069 8.5q.212 0 .431-.002V13c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V8.498q.219.002.431.002h7.319v6.545l-1.693-1.88a.75.75 0 1 0-1.114 1.003l3 3.334a.75.75 0 0 0 1.114 0l3-3.334a.75.75 0 0 0-1.114-1.003l-1.693 1.88V8.5z"
    />
  </Svg>
);
export default SvgArchiveDown;
