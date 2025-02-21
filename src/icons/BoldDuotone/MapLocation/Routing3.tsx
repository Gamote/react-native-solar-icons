import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle opacity={0.5} cx={5} cy={5} r={3} fill="black" />
    <Circle opacity={0.5} cx={19} cy={19} r={3} fill="black" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2501 5C10.2501 4.58579 10.5859 4.25 11.0001 4.25H16.132C18.8832 4.25 19.9295 7.843 17.6084 9.32007L7.19713 15.9454C6.14207 16.6168 6.61766 18.25 7.86821 18.25H11.1894L10.9698 18.0303C10.6769 17.7374 10.6769 17.2626 10.9698 16.9697C11.2627 16.6768 11.7375 16.6768 12.0304 16.9697L13.5304 18.4697C13.8233 18.7626 13.8233 19.2374 13.5304 19.5303L12.0304 21.0303C11.7375 21.3232 11.2627 21.3232 10.9698 21.0303C10.6769 20.7374 10.6769 20.2626 10.9698 19.9697L11.1894 19.75H7.86821C5.11697 19.75 4.07071 16.157 6.39181 14.6799L16.8031 8.05458C17.8581 7.38318 17.3825 5.75 16.132 5.75H11.0001C10.5859 5.75 10.2501 5.41421 10.2501 5Z"
      fill="black"
    />
  </Svg>
);
export default SvgRouting3;
