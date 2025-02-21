import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSliderVerticalMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.351 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.35 22 14.9 22 12 22s-4.351 0-5.253-.879c-.9-.878-.9-2.293-.9-5.121z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSliderVerticalMinimalistic;
