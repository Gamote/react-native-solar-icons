import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHearts = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 9.13734C2 14.0003 6.01943 16.5917 8.96173 18.9111C10 19.7296 11 20.5002 12 20.5002C13 20.5002 14 19.7296 15.0383 18.9111C17.9806 16.5917 22 14.0003 22 9.13734C22 4.27441 16.4998 0.825708 12 5.50088C7.50016 0.825708 2 4.27441 2 9.13734Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.5 13.2871C14.0251 10.5713 11 12.5746 11 15.3995C11 17.9583 12.814 19.4344 14.3584 20.6912L14.4018 20.7265C14.5474 20.8449 14.6903 20.9615 14.829 21.0769C15.4 21.5523 15.95 22 16.5 22C17.05 22 17.6 21.5523 18.171 21.0769C19.7893 19.7296 22 18.2243 22 15.3995C22 14.4715 21.6735 13.6321 21.1474 13.0197C20.0718 11.7677 18.1619 11.4635 16.5 13.2871Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHearts;
