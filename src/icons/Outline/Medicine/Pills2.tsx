import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills2 = (props: SvgProps) => (
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
      d="M8 1.25a5.73 5.73 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25m3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917M4.51 4.572l5.917 5.917a4.25 4.25 0 0 1-5.917-5.917M21.066 12.934a5.75 5.75 0 1 0-8.132 8.132 5.75 5.75 0 0 0 8.132-8.132m-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.23 4.23 0 0 1 1.179-2.255m-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPills2;
