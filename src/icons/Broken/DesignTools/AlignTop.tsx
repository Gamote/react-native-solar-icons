import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignTop = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 3L22 3M2 3L6 3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 13V18.5C5 19.4346 5 19.9019 5.20096 20.25C5.33261 20.478 5.52197 20.6674 5.75 20.799C6.09808 21 6.56538 21 7.5 21C8.43462 21 8.90192 21 9.25 20.799C9.47803 20.6674 9.66739 20.478 9.79904 20.25C10 19.9019 10 19.4346 10 18.5L10 9.5C10 8.56538 10 8.09808 9.79904 7.75C9.66739 7.52197 9.47803 7.33261 9.25 7.20096C8.90192 7 8.43462 7 7.5 7C6.56538 7 6.09808 7 5.75 7.20096C5.52197 7.33261 5.33261 7.52197 5.20096 7.75C5.03954 8.0296 5.00778 8.38613 5.00153 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.5 7C15.5654 7 15.0981 7 14.75 7.20096C14.522 7.33261 14.3326 7.52197 14.201 7.75C14 8.09808 14 8.56538 14 9.5L14 15.5C14 16.4346 14 16.9019 14.201 17.25C14.3326 17.478 14.522 17.6674 14.75 17.799C15.0981 18 15.5654 18 16.5 18C17.4346 18 17.9019 18 18.25 17.799C18.478 17.6674 18.6674 17.478 18.799 17.25C19 16.9019 19 16.4346 19 15.5L19 9.5C19 8.56538 19 8.09808 18.799 7.75C18.6674 7.52197 18.478 7.33261 18.25 7.20096C17.9019 7 17.4346 7 16.5 7Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgAlignTop;
