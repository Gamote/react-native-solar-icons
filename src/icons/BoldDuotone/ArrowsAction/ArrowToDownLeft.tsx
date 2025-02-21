import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowToDownLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5303 13.9697C17.8232 14.2626 17.8232 14.7374 17.5303 15.0303L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697C6.76256 13.6768 7.23744 13.6768 7.53033 13.9697L12 18.4393L16.4697 13.9697C16.7626 13.6768 17.2374 13.6768 17.5303 13.9697Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M12.75 9.5C12.75 8.54665 12.4702 7.13332 11.6087 5.93677C10.7196 4.70198 9.24444 3.75 7 3.75C6.58579 3.75 6.25 4.08579 6.25 4.5C6.25 4.91421 6.58579 5.25 7 5.25C8.75556 5.25 9.7804 5.96468 10.3913 6.81323C11.0298 7.70002 11.25 8.78668 11.25 9.5L11.25 17.6893L12 18.4393L12.75 17.6893V9.5Z"
        fill={props.primaryColor}
      />
      <Path
        d="M12.1977 20.2236C12.0432 20.2656 11.878 20.2575 11.7278 20.199C11.8121 20.2319 11.904 20.25 12 20.25C12.0684 20.25 12.1347 20.2408 12.1977 20.2236Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgArrowToDownLeft;
