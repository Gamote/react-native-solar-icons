import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowToDownRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.46967 13.9697C6.17678 14.2626 6.17678 14.7374 6.46967 15.0303L11.4697 20.0303C11.7626 20.3232 12.2374 20.3232 12.5303 20.0303L17.5303 15.0303C17.8232 14.7374 17.8232 14.2626 17.5303 13.9697C17.2374 13.6768 16.7626 13.6768 16.4697 13.9697L12 18.4393L7.53033 13.9697C7.23744 13.6768 6.76256 13.6768 6.46967 13.9697Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M11.25 9.5C11.25 8.54665 11.5298 7.13332 12.3913 5.93677C13.2804 4.70198 14.7556 3.75 17 3.75C17.4142 3.75 17.75 4.08579 17.75 4.5C17.75 4.91421 17.4142 5.25 17 5.25C15.2444 5.25 14.2196 5.96468 13.6087 6.81323C12.9702 7.70002 12.75 8.78668 12.75 9.5L12.75 17.6893L12 18.4393L11.25 17.6893V9.5Z"
        fill={props.primaryColor}
      />
      <Path
        d="M11.8023 20.2236C11.9568 20.2656 12.122 20.2575 12.2722 20.199C12.1879 20.2319 12.096 20.25 12 20.25C11.9316 20.25 11.8653 20.2408 11.8023 20.2236Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgArrowToDownRight;
