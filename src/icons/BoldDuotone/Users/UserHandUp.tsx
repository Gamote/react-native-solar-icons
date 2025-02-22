import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserHandUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.81803 5.27257C2.21988 5.17211 2.62708 5.41643 2.72754 5.81828L3.10951 7.34614C3.71932 9.78541 5.64101 11.6766 8.08446 12.2502H15.9999C18.091 12.2502 19.851 13.8153 20.0953 15.892L20.7448 21.4125C20.7932 21.8239 20.4989 22.1966 20.0876 22.245C19.6762 22.2934 19.3035 21.9992 19.2551 21.5878L18.6056 16.0673C18.4501 14.746 17.3303 13.7502 15.9999 13.7502H7.9176L7.83724 13.7323C4.80202 13.0578 2.4084 10.7264 1.65429 7.70994L1.27233 6.18208C1.17186 5.78023 1.41619 5.37303 1.81803 5.27257Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M8 13.75V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13.75H8Z"
      fill={props.primaryColor}
    />
    <Circle cx={12} cy={6} r={4} fill={props.primaryColor} />
  </Svg>
);
export default SvgUserHandUp;
