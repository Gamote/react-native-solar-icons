import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2.75C3.75736 2.75 2.75 3.75736 2.75 5C2.75 6.24264 3.75736 7.25 5 7.25C6.24264 7.25 7.25 6.24264 7.25 5C7.25 3.75736 6.24264 2.75 5 2.75ZM1.25 5C1.25 2.92893 2.92893 1.25 5 1.25C7.07107 1.25 8.75 2.92893 8.75 5C8.75 7.07107 7.07107 8.75 5 8.75C2.92893 8.75 1.25 7.07107 1.25 5ZM10.25 5C10.25 4.58579 10.5858 4.25 11 4.25H16.1319C18.8831 4.25 19.9294 7.843 17.6083 9.32007L7.19703 15.9454C6.14197 16.6168 6.61756 18.25 7.86812 18.25H11.1893L10.9697 18.0303C10.6768 17.7374 10.6768 17.2626 10.9697 16.9697C11.2626 16.6768 11.7374 16.6768 12.0303 16.9697L13.5303 18.4697C13.8232 18.7626 13.8232 19.2374 13.5303 19.5303L12.0303 21.0303C11.7374 21.3232 11.2626 21.3232 10.9697 21.0303C10.6768 20.7374 10.6768 20.2626 10.9697 19.9697L11.1893 19.75H7.86812C5.11688 19.75 4.07062 16.157 6.39172 14.6799L16.803 8.05458C17.858 7.38318 17.3824 5.75 16.1319 5.75H11C10.5858 5.75 10.25 5.41421 10.25 5ZM19 16.75C17.7574 16.75 16.75 17.7574 16.75 19C16.75 20.2426 17.7574 21.25 19 21.25C20.2426 21.25 21.25 20.2426 21.25 19C21.25 17.7574 20.2426 16.75 19 16.75ZM15.25 19C15.25 16.9289 16.9289 15.25 19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRouting3;
