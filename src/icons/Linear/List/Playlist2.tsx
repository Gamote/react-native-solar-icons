import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylist2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16 16.4286C16 17.8487 14.8807 19 13.5 19C12.1193 19 11 17.8487 11 16.4286C11 15.0084 12.1193 13.8571 13.5 13.8571C14.8807 13.8571 16 15.0084 16 16.4286ZM16 16.4286V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M18.675 7.11595L16.9205 7.95812C16.5788 8.12213 16.408 8.20414 16.2845 8.33055C16.1855 8.43199 16.1091 8.55334 16.0605 8.68654C16 8.85252 16 9.04203 16 9.42106C16 10.2975 16 10.7357 16.1911 10.9986C16.3421 11.2065 16.5673 11.3482 16.8201 11.3944C17.1397 11.4529 17.5348 11.2633 18.325 10.884L20.0795 10.0418C20.4212 9.87781 20.592 9.7958 20.7155 9.6694C20.8145 9.56796 20.8909 9.44661 20.9395 9.31341C21 9.14742 21 8.95791 21 8.57889C21 7.70244 21 7.26422 20.8089 7.00132C20.6579 6.79348 20.4327 6.65176 20.1799 6.60553C19.8603 6.54705 19.4652 6.73668 18.675 7.11595Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 5L3 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 9L3 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 13H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 17H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlaylist2;
