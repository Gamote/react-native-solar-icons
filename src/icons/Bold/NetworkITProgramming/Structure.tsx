import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStructure = (props: SvgProps) => (
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
      d="M7.907 4.256a3.001 3.001 0 1 0-3.651 3.651A1 1 0 0 0 4.25 8v8q0 .048.006.093a3.001 3.001 0 1 0 3.651 3.651q.045.006.093.006h8a1 1 0 0 0 .093-.006 3.001 3.001 0 1 0 3.651-3.651A1 1 0 0 0 19.75 16V8a1 1 0 0 0-.006-.093 3.001 3.001 0 1 0-3.651-3.651A1 1 0 0 0 16 4.25H8a1 1 0 0 0-.093.006M5.744 7.907q.006.045.006.093v8a1 1 0 0 1-.006.093 3 3 0 0 1 2.163 2.163A1 1 0 0 1 8 18.25h8a1 1 0 0 1 .093.006 3 3 0 0 1 2.163-2.163A1 1 0 0 1 18.25 16V8q0-.048.006-.093a3 3 0 0 1-2.163-2.163A1 1 0 0 1 16 5.75H8a1 1 0 0 1-.093-.006 3 3 0 0 1-2.163 2.163"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStructure;
