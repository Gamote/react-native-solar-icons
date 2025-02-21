import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVinylRecord = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M17.127 6.873a.75.75 0 1 0-1.061 1.06 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.061 7.25 7.25 0 0 0 0-10.253M7.934 7.934a.75.75 0 0 0-1.06-1.061 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.06 5.75 5.75 0 0 1 0-8.132"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9.348 9.348a3.75 3.75 0 1 1 5.304 5.303 3.75 3.75 0 0 1-5.304-5.303m1.061 1.06a2.25 2.25 0 1 1 3.182 3.183 2.25 2.25 0 0 1-3.182-3.182"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVinylRecord;
