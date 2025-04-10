import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylistMinimalistic3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M20 4L3 4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M8 14H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 9L3 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 17.4286C16 18.8487 14.8807 20 13.5 20C12.1193 20 11 18.8487 11 17.4286C11 16.0084 12.1193 14.8571 13.5 14.8571C14.8807 14.8571 16 16.0084 16 17.4286ZM16 17.4286V11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M18.675 8.11595L16.9205 8.95812C16.5788 9.12213 16.408 9.20414 16.2845 9.33055C16.1855 9.43199 16.1091 9.55334 16.0605 9.68654C16 9.85252 16 10.042 16 10.4211C16 11.2975 16 11.7357 16.1911 11.9986C16.3421 12.2065 16.5673 12.3482 16.8201 12.3944C17.1397 12.4529 17.5348 12.2633 18.325 11.884L20.0795 11.0418C20.4212 10.8778 20.592 10.7958 20.7155 10.6694C20.8145 10.568 20.8909 10.4466 20.9395 10.3134C21 10.1474 21 9.95791 21 9.57889C21 8.70244 21 8.26422 20.8089 8.00132C20.6579 7.79348 20.4327 7.65176 20.1799 7.60553C19.8603 7.54705 19.4652 7.73668 18.675 8.11595Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlaylistMinimalistic3;
