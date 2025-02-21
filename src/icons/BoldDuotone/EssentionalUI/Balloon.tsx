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
      fill="#000"
      d="M12 18c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68C4.595 13.954 7.859 17.964 12 18"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.75 5.994a.75.75 0 0 1 .756-.744 3.785 3.785 0 0 1 3.744 3.744.75.75 0 0 1-1.5.012 2.285 2.285 0 0 0-2.256-2.256.75.75 0 0 1-.744-.756"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M13.18 17.901a6.5 6.5 0 0 1-2.352-.019l-.018.04c-.152.274-.228.41-.261.516-.193.617.204 1.262.858 1.39.111.022.272.022.593.022s.482 0 .593-.022c.654-.128 1.051-.773.858-1.39-.033-.105-.109-.242-.261-.516z"
    />
    <Path
      fill="#000"
      d="M11.25 19.786q.076.025.157.042c.111.022.272.022.593.022s.482 0 .593-.022q.081-.016.157-.042v1.464a.75.75 0 0 1-1.5 0z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBalloon;
