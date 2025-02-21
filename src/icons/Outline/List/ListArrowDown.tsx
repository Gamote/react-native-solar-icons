import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 5C2.25 4.58579 2.58579 4.25 3 4.25H21C21.4142 4.25 21.75 4.58579 21.75 5C21.75 5.41421 21.4142 5.75 21 5.75H3C2.58579 5.75 2.25 5.41421 2.25 5ZM2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9ZM2.25 13C2.25 12.5858 2.58579 12.25 3 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75H3C2.58579 13.75 2.25 13.4142 2.25 13ZM17.5 12.25C17.9142 12.25 18.25 12.5858 18.25 13V17.1893L19.4697 15.9697C19.7626 15.6768 20.2374 15.6768 20.5303 15.9697C20.8232 16.2626 20.8232 16.7374 20.5303 17.0303L18.0303 19.5303C17.7374 19.8232 17.2626 19.8232 16.9697 19.5303L14.4697 17.0303C14.1768 16.7374 14.1768 16.2626 14.4697 15.9697C14.7626 15.6768 15.2374 15.6768 15.5303 15.9697L16.75 17.1893V13C16.75 12.5858 17.0858 12.25 17.5 12.25ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgListArrowDown;
