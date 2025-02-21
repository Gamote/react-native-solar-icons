import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarsMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.43361 9.90622C5.34288 10.3793 4.29751 10.6158 4.04881 11.4156C3.8001 12.2153 4.51276 13.0487 5.93808 14.7154L6.30683 15.1466C6.71186 15.6203 6.91438 15.8571 7.00548 16.1501C7.09659 16.443 7.06597 16.759 7.00474 17.3909L6.94899 17.9662C6.7335 20.19 6.62575 21.3019 7.27688 21.7962C7.928 22.2905 8.90677 21.8398 10.8643 20.9385L11.3708 20.7053C11.927 20.4492 12.2052 20.3211 12.5 20.3211C12.7948 20.3211 13.073 20.4492 13.6292 20.7053L14.1357 20.9385C16.0932 21.8398 17.072 22.2905 17.7231 21.7962C18.3742 21.3019 18.2665 20.19 18.051 17.9662M19.0619 14.7154C20.4872 13.0487 21.1999 12.2153 20.9512 11.4156C20.7025 10.6158 19.6571 10.3793 17.5664 9.90622L17.0255 9.78384C16.4314 9.64942 16.1343 9.5822 15.8958 9.40114C15.6573 9.22007 15.5043 8.94564 15.1984 8.3968L14.9198 7.89712C13.8432 5.96571 13.3048 5 12.5 5C11.6952 5 11.1568 5.96571 10.0802 7.89712"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.98987 2C4.98987 2 5.2778 3.45771 5.90909 4.08475C6.54037 4.71179 8 4.98987 8 4.98987C8 4.98987 6.54229 5.2778 5.91525 5.90909C5.28821 6.54037 5.01013 8 5.01013 8C5.01013 8 4.7222 6.54229 4.09091 5.91525C3.45963 5.28821 2 5.01013 2 5.01013C2 5.01013 3.45771 4.7222 4.08475 4.09091C4.71179 3.45963 4.98987 2 4.98987 2Z"
      stroke={props.primaryColor}
      strokeLinejoin="round"
    />
    <Path
      d="M18 5H20M19 6L19 4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStarsMinimalistic;
