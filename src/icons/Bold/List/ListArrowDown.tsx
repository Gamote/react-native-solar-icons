import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM17.5 13.25C17.9142 13.25 18.25 13.5858 18.25 14V18.1893L19.4697 16.9697C19.7626 16.6768 20.2374 16.6768 20.5303 16.9697C20.8232 17.2626 20.8232 17.7374 20.5303 18.0303L18.0303 20.5303C17.7374 20.8232 17.2626 20.8232 16.9697 20.5303L14.4697 18.0303C14.1768 17.7374 14.1768 17.2626 14.4697 16.9697C14.7626 16.6768 15.2374 16.6768 15.5303 16.9697L16.75 18.1893V14C16.75 13.5858 17.0858 13.25 17.5 13.25ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgListArrowDown;
