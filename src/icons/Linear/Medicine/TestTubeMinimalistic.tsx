import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTestTubeMinimalistic = (props: SvgProps) => (
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
      d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.21 2.21 0 0 0 1.32 1.787l1.661.69m0 0 7.239-7.271-5.376-5.399-10.75 10.798a3.83 3.83 0 0 0 0 5.399 3.79 3.79 0 0 0 5.375 0zm8-6.506L14.182 3"
    />
  </Svg>
);
export default SvgTestTubeMinimalistic;
