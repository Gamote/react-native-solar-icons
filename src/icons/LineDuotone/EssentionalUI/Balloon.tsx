import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBalloon = (props: SvgProps) => (
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
      d="M11.94 17.5c4.141.034 7.593-3.797 7.56-7.94C19.466 5.42 16.08 2.035 11.94 2A7.355 7.355 0 0 0 4.5 9.44c.034 4.142 3.297 8.027 7.44 8.06Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.5 9a3.035 3.035 0 0 0-3-3M12 19.85c.321 0 .482 0 .593-.022.654-.128 1.051-.772.858-1.39-.033-.105-.109-.242-.261-.515M12 19.85c-.321 0-.482 0-.593-.022-.654-.128-1.051-.772-.858-1.39.033-.105.109-.242.261-.515M12 19.85V22"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBalloon;
