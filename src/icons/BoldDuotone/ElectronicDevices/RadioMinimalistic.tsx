import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadioMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11.75C6.75736 11.75 5.75 12.7574 5.75 14C5.75 15.2426 6.75736 16.25 8 16.25C9.24264 16.25 10.25 15.2426 10.25 14C10.25 12.7574 9.24264 11.75 8 11.75ZM4.25 14C4.25 11.9289 5.92893 10.25 8 10.25C10.0711 10.25 11.75 11.9289 11.75 14C11.75 16.0711 10.0711 17.75 8 17.75C5.92893 17.75 4.25 16.0711 4.25 14Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 11C12.75 10.5858 13.0858 10.25 13.5 10.25H19C19.4142 10.25 19.75 10.5858 19.75 11C19.75 11.4142 19.4142 11.75 19 11.75H13.5C13.0858 11.75 12.75 11.4142 12.75 11Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 14C12.75 13.5858 13.0858 13.25 13.5 13.25H19C19.4142 13.25 19.75 13.5858 19.75 14C19.75 14.4142 19.4142 14.75 19 14.75H13.5C13.0858 14.75 12.75 14.4142 12.75 14Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 17C12.75 16.5858 13.0858 16.25 13.5 16.25H19C19.4142 16.25 19.75 16.5858 19.75 17C19.75 17.4142 19.4142 17.75 19 17.75H13.5C13.0858 17.75 12.75 17.4142 12.75 17Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.3803 2.64657C15.7373 2.43656 15.8565 1.97688 15.6465 1.61985C15.4365 1.26283 14.9768 1.14365 14.6198 1.35367L6.63037 6.05333C7.47497 6.00441 8.47748 6.00047 9.67924 6.00015L15.3803 2.64657Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRadioMinimalistic;
