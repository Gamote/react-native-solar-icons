import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCommand = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M8 8H16V16H8V8Z" stroke="black" strokeWidth={1.5} />
    <Path
      d="M16 16.001L19 16.0005C20.6569 16.0002 22.0002 17.3432 22.0005 19C22.0007 20.6569 20.6578 22.0002 19.0009 22.0005C17.3441 22.0007 16.0007 20.6578 16.0005 19.001L16 16.001Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M8.00096 16.001L5.00096 16.0005C3.34411 16.0002 2.00075 17.3432 2.00049 19C2.00023 20.6569 3.34316 22.0002 5.00002 22.0005C6.65687 22.0007 8.00023 20.6578 8.00049 19.001L8.00096 16.001Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M16 8.00002L19 8.00049C20.6569 8.00075 22.0002 6.65781 22.0005 5.00096C22.0007 3.34411 20.6578 2.00075 19.0009 2.00049C17.3441 2.00023 16.0007 3.34316 16.0005 5.00002L16 8.00002Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M8.00096 8.00002L5.00096 8.00049C3.34411 8.00075 2.00075 6.65781 2.00049 5.00096C2.00023 3.34411 3.34316 2.00075 5.00002 2.00049C6.65687 2.00023 8.00023 3.34316 8.00049 5.00002L8.00096 8.00002Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgCommand;
