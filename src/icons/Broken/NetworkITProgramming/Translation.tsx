import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTranslation = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12a9.97 9.97 0 0 1-2.922 7.064M19.141 5a10 10 0 0 1 2.027 3M5 19.142A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.936-7.078M6 11.982C6 10.427 6.673 9.018 7.762 8m8.523.044C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16a5.7 5.7 0 0 1-.865-1"
    />
    <Circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgTranslation;
