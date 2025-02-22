import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoRightRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4697 3.46967C16.7626 3.17678 17.2374 3.17678 17.5303 3.46967L20.5303 6.46967C20.8232 6.76256 20.8232 7.23744 20.5303 7.53033L17.5303 10.5303C17.2374 10.8232 16.7626 10.8232 16.4697 10.5303C16.1768 10.2374 16.1768 9.76256 16.4697 9.46967L18.9393 7L16.4697 4.53033C16.1768 4.23744 16.1768 3.76256 16.4697 3.46967Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.1893 6.25H9.00001C5.82437 6.25 3.25 8.82436 3.25 12C3.25 15.1756 5.82436 17.75 9 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H9C6.65279 16.25 4.75 14.3472 4.75 12C4.75 9.65279 6.6528 7.75 9.00001 7.75H18.1893L18.9393 7L18.1893 6.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUndoRightRound;
