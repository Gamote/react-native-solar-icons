import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserMinusRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} fill={props.primaryColor} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5126 21.4874C14.0251 22 14.8501 22 16.5 22C18.1499 22 18.9749 22 19.4874 21.4874C20 20.9749 20 20.1499 20 18.5C20 16.8501 20 16.0251 19.4874 15.5126C18.9749 15 18.1499 15 16.5 15C14.8501 15 14.0251 15 13.5126 15.5126C13 16.0251 13 16.8501 13 18.5C13 20.1499 13 20.9749 13.5126 21.4874ZM15.9167 17.9167H14.9444C14.6223 17.9167 14.3611 18.1778 14.3611 18.5C14.3611 18.8222 14.6223 19.0833 14.9444 19.0833H15.9167H17.0833H18.0556C18.3777 19.0833 18.6389 18.8222 18.6389 18.5C18.6389 18.1778 18.3777 17.9167 18.0556 17.9167H17.0833H15.9167Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.0947 15.0312C17.6699 15 17.1487 15 16.5 15C14.8501 15 14.0251 15 13.5126 15.5126C13 16.0251 13 16.8501 13 18.5C13 19.6663 13 20.4204 13.1811 20.9433C12.7971 20.9806 12.4025 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C14.6134 13 16.8924 13.8184 18.0947 15.0312Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUserMinusRounded;
