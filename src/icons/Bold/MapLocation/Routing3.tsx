import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={5} cy={5} r={3} fill={props.primaryColor} />
    <Circle cx={19} cy={19} r={3} fill={props.primaryColor} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.25 5C10.25 4.58579 10.5858 4.25 11 4.25H16.1319C18.8831 4.25 19.9294 7.843 17.6083 9.32007L7.197 15.9454C6.14195 16.6168 6.61754 18.25 7.86809 18.25H11.1893L10.9696 18.0303C10.6768 17.7374 10.6768 17.2626 10.9696 16.9697C11.2625 16.6768 11.7374 16.6768 12.0303 16.9697L13.5303 18.4697C13.8232 18.7626 13.8232 19.2374 13.5303 19.5303L12.0303 21.0303C11.7374 21.3232 11.2625 21.3232 10.9696 21.0303C10.6768 20.7374 10.6768 20.2626 10.9696 19.9697L11.1893 19.75H7.86809C5.11685 19.75 4.07059 16.157 6.39169 14.6799L16.803 8.05458C17.858 7.38318 17.3824 5.75 16.1319 5.75H11C10.5858 5.75 10.25 5.41421 10.25 5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRouting3;
