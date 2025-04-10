import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWhisk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.816 12.236C22.3734 9.67866 22.7721 5.67503 20.5486 3.45154C18.325 1.22806 14.3212 1.62672 11.7638 4.18408C9.20632 6.74143 7.85713 11.6956 10.0807 13.9191C12.3042 16.1425 17.2585 14.7934 19.816 12.236Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M12.8991 15.127L6.85994 21.166C5.74816 22.2777 3.94561 22.2777 2.83383 21.166C1.72206 20.0543 1.72206 18.2518 2.83383 17.14L8.87299 11.1011"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M20.5486 3.45144C21.7567 4.65951 19.0985 8.12279 17.328 9.89327C15.5575 11.6637 11.2888 15.127 10.0807 13.919C8.87261 12.7109 12.3366 8.44297 14.1071 6.67249C15.8776 4.90202 19.3405 2.24337 20.5486 3.45144Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgWhisk;
