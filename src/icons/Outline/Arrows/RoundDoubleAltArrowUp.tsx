import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundDoubleAltArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 9.56066L9.53033 12.0303C9.23744 12.3232 8.76256 12.3232 8.46967 12.0303C8.17678 11.7374 8.17678 11.2626 8.46967 10.9697L11.4697 7.96967C11.7626 7.67678 12.2374 7.67678 12.5303 7.96967L15.5303 10.9697C15.8232 11.2626 15.8232 11.7374 15.5303 12.0303C15.2374 12.3232 14.7626 12.3232 14.4697 12.0303L12 9.56066ZM12 13.5607L9.53033 16.0303C9.23744 16.3232 8.76256 16.3232 8.46967 16.0303C8.17678 15.7374 8.17678 15.2626 8.46967 14.9697L11.4697 11.9697C11.7626 11.6768 12.2374 11.6768 12.5303 11.9697L15.5303 14.9697C15.8232 15.2626 15.8232 15.7374 15.5303 16.0303C15.2374 16.3232 14.7626 16.3232 14.4697 16.0303L12 13.5607Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundDoubleAltArrowUp;
