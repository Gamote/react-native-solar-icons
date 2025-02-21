import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPieChart = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.16312 3.77546C9.28724 4.17064 9.0675 4.59162 8.67232 4.71574C5.23899 5.79408 2.75 9.00204 2.75 12.7894C2.75 17.4622 6.53805 21.2502 11.2108 21.2502C14.9982 21.2502 18.2061 18.7612 19.2845 15.3279C19.4086 14.9327 19.8296 14.713 20.2247 14.8371C20.6199 14.9612 20.8397 15.3822 20.7155 15.7774C19.4465 19.8179 15.6721 22.7502 11.2108 22.7502C5.70962 22.7502 1.25 18.2906 1.25 12.7894C1.25 8.32812 4.18231 4.55372 8.22285 3.28466C8.61803 3.16054 9.039 3.38028 9.16312 3.77546Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPieChart;
