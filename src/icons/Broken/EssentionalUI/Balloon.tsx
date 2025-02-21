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
      d="M8 16.607c1.15.86 2.518 1.38 4 1.393 4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68A8.9 8.9 0 0 0 5.244 13"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.5 9a3.035 3.035 0 0 0-3-3M12 20.35c.321 0 .482 0 .593-.022.654-.128 1.051-.772.858-1.39-.033-.105-.109-.242-.261-.515M12 20.35c-.321 0-.482 0-.593-.022-.654-.128-1.051-.772-.858-1.39.033-.105.109-.242.261-.515M12 20.35v2.15"
    />
  </Svg>
);
export default SvgBalloon;
