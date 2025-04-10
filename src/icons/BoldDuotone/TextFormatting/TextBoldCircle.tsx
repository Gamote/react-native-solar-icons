import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextBoldCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.52174 5.25C8.26709 5.25 7.25 6.26709 7.25 7.52174V16.8235C7.25 17.8875 8.11251 18.75 9.17647 18.75H13C15.0711 18.75 16.75 17.0711 16.75 15C16.75 13.5268 15.9004 12.2519 14.6645 11.6387C15.3356 10.9612 15.75 10.029 15.75 9C15.75 6.92893 14.0711 5.25 12 5.25H9.52174ZM12 11.25H8.75V7.52174C8.75 7.09552 9.09552 6.75 9.52174 6.75H12C13.2426 6.75 14.25 7.75736 14.25 9C14.25 10.2426 13.2426 11.25 12 11.25ZM8.75 16.8235V12.75H13C14.2426 12.75 15.25 13.7574 15.25 15C15.25 16.2426 14.2426 17.25 13 17.25H9.17647C8.94094 17.25 8.75 17.0591 8.75 16.8235Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTextBoldCircle;
