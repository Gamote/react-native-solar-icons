import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBroom = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.728 5.53569C14.2901 3.97359 16.8227 3.97351 18.3848 5.53561C19.9469 7.09771 19.9469 9.63044 18.3848 11.1925M3.57952 12.9792L2.91264 11.883C2.04059 10.1746 2.60083 7.96517 4.40773 7.01113C5.26153 6.56033 6.21846 6.13191 7.16933 5.86008C10.0288 5.04262 12.5347 5.34235 12.5347 5.34235L18.5779 11.3855C18.5779 11.3855 18.8777 13.8914 18.0602 16.7509C17.7884 17.7018 17.3599 18.6587 16.9091 19.5125C15.9551 21.3194 13.7457 21.8797 12.0373 21.0076L10.9409 20.3407C7.93352 18.5112 5.40903 15.9867 3.57952 12.9792Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M20.5061 3.41406L18.3848 5.53538"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBroom;
