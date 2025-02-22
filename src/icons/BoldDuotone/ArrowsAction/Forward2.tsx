import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForward2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9697 17.5303C14.2626 17.8232 14.7374 17.8232 15.0303 17.5303L20.0303 12.5303C20.3232 12.2374 20.3232 11.7626 20.0303 11.4697L15.0303 6.46967C14.7374 6.17678 14.2626 6.17678 13.9697 6.46967C13.6768 6.76256 13.6768 7.23744 13.9697 7.53033L18.4393 12L13.9697 16.4697C13.6768 16.7626 13.6768 17.2374 13.9697 17.5303Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M17.6893 12.75H9.5C8.54665 12.75 7.13332 12.4702 5.93677 11.6086C4.70198 10.7196 3.75 9.24444 3.75 7C3.75 6.58578 4.08579 6.25 4.5 6.25C4.91421 6.25 5.25 6.58578 5.25 7C5.25 8.75556 5.96468 9.7804 6.81323 10.3913C7.70002 11.0298 8.78668 11.25 9.5 11.25L17.6893 11.25L18.4393 12L17.6893 12.75Z"
        fill={props.primaryColor}
      />
      <Path
        d="M20.1931 12.2871C20.2298 12.1987 20.25 12.1017 20.25 12C20.25 12.0977 20.231 12.1954 20.1931 12.2871Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgForward2;
