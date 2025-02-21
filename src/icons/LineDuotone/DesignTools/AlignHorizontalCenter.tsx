import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignHorizontalCenter = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 2L12 5M12 22L12 19M12 14L12 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 7.5C5 6.56538 5 6.09808 5.20096 5.75C5.33261 5.52197 5.52197 5.33261 5.75 5.20096C6.09808 5 6.56538 5 7.5 5H16.5C17.4346 5 17.9019 5 18.25 5.20096C18.478 5.33261 18.6674 5.52197 18.799 5.75C19 6.09808 19 6.56538 19 7.5C19 8.43462 19 8.90192 18.799 9.25C18.6674 9.47803 18.478 9.66739 18.25 9.79904C17.9019 10 17.4346 10 16.5 10H7.5C6.56538 10 6.09808 10 5.75 9.79904C5.52197 9.66739 5.33261 9.47803 5.20096 9.25C5 8.90192 5 8.43462 5 7.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7 16.5C7 15.5654 7 15.0981 7.20096 14.75C7.33261 14.522 7.52197 14.3326 7.75 14.201C8.09808 14 8.56538 14 9.5 14H14.5C15.4346 14 15.9019 14 16.25 14.201C16.478 14.3326 16.6674 14.522 16.799 14.75C17 15.0981 17 15.5654 17 16.5C17 17.4346 17 17.9019 16.799 18.25C16.6674 18.478 16.478 18.6674 16.25 18.799C15.9019 19 15.4346 19 14.5 19H9.5C8.56538 19 8.09808 19 7.75 18.799C7.52197 18.6674 7.33261 18.478 7.20096 18.25C7 17.9019 7 17.4346 7 16.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgAlignHorizontalCenter;
