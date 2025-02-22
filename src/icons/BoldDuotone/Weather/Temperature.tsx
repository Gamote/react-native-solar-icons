import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTemperature = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M17.5 16.5C17.5 19.5376 15.0376 22 12 22C8.96243 22 6.5 19.5376 6.5 16.5C6.5 14.7636 7.30465 13.2152 8.56141 12.2072C8.82505 11.9957 9 11.6857 9 11.3477V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11.3477C15 11.6857 15.1749 11.9957 15.4386 12.2072C16.6954 13.2152 17.5 14.7636 17.5 16.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V13.3804C11.25 13.8172 10.9527 14.1876 10.592 14.4339C9.93273 14.8841 9.5 15.6415 9.5 16.5C9.5 17.8807 10.6193 19 12 19C13.3807 19 14.5 17.8807 14.5 16.5C14.5 15.6415 14.0673 14.8841 13.408 14.4339C13.0473 14.1876 12.75 13.8172 12.75 13.3804V5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTemperature;
