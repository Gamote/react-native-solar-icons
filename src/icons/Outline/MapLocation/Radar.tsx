import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar = (props: SvgProps) => (
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
      d="M14.394 3.065a9.22 9.22 0 0 0-6.939.878.75.75 0 1 1-.737-1.306 10.72 10.72 0 0 1 8.064-1.021c5.735 1.537 9.138 7.431 7.602 13.166-1.537 5.735-7.431 9.138-13.166 7.601S.08 14.952 1.616 9.217A10.7 10.7 0 0 1 3.01 6.102c.574-.875 1.732-.943 2.465-.35l6.998 5.665a.75.75 0 1 1-.944 1.166L4.53 6.918a.23.23 0 0 0-.168-.052.13.13 0 0 0-.099.059 9.2 9.2 0 0 0-1.198 2.68 9.25 9.25 0 1 0 11.33-6.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRadar;
