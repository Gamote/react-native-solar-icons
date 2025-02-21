import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindBackCircle = (props: SvgProps) => (
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
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M10.564 7.461a.75.75 0 1 1 .872 1.22l-3.222 2.302a1.25 1.25 0 0 0 0 2.034l3.222 2.301a.75.75 0 0 1-.872 1.22l-3.222-2.3a2.75 2.75 0 0 1 0-4.476zm5.936 7.67V8.87a1 1 0 0 0-1.555-.832l-4.697 3.131a1 1 0 0 0 0 1.664l4.697 3.132a1 1 0 0 0 1.555-.832"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRewindBackCircle;
