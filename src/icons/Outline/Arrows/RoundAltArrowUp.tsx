import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundAltArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.46967 12.9697L11.4697 9.96967C11.7626 9.67678 12.2374 9.67678 12.5303 9.96967L15.5303 12.9697C15.8232 13.2626 15.8232 13.7374 15.5303 14.0303C15.2374 14.3232 14.7626 14.3232 14.4697 14.0303L12 11.5607L9.53033 14.0303C9.23744 14.3232 8.76256 14.3232 8.46967 14.0303C8.17678 13.7374 8.17678 13.2626 8.46967 12.9697Z"
      fill="black"
    />
  </Svg>
);
export default SvgRoundAltArrowUp;
