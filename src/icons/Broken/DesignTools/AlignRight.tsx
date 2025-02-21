import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 14L21 2M21 22L21 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 5L5.5 5C4.56538 5 4.09808 5 3.75 5.20096C3.52197 5.33261 3.33261 5.52197 3.20096 5.75C3 6.09808 3 6.56538 3 7.5C3 8.43462 3 8.90192 3.20096 9.25C3.33261 9.47803 3.52197 9.66739 3.75 9.79904C4.09808 10 4.56538 10 5.5 10L14.5 10C15.4346 10 15.9019 10 16.25 9.79904C16.478 9.66739 16.6674 9.47803 16.799 9.25C17 8.90192 17 8.43462 17 7.5C17 6.56538 17 6.09808 16.799 5.75C16.6674 5.52197 16.478 5.33261 16.25 5.20096C15.9704 5.03954 15.6139 5.00778 15 5.00153"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17 16.5C17 15.5654 17 15.0981 16.799 14.75C16.6674 14.522 16.478 14.3326 16.25 14.201C15.9019 14 15.4346 14 14.5 14H8.5C7.56538 14 7.09808 14 6.75 14.201C6.52197 14.3326 6.33261 14.522 6.20096 14.75C6 15.0981 6 15.5654 6 16.5C6 17.4346 6 17.9019 6.20096 18.25C6.33261 18.478 6.52197 18.6674 6.75 18.799C7.09808 19 7.56538 19 8.5 19H14.5C15.4346 19 15.9019 19 16.25 18.799C16.478 18.6674 16.6674 18.478 16.799 18.25C17 17.9019 17 17.4346 17 16.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgAlignRight;
