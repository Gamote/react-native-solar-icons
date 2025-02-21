import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGameboy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 12C21 16.714 21 19.0711 19.682 20.5355C18.364 22 16.2426 22 12 22C7.75736 22 5.63604 22 4.31802 20.5355C3 19.0711 3 16.714 3 12C3 7.28595 3 4.92893 4.31802 3.46447C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.46447C20.5583 4.43821 20.852 5.80655 20.9504 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.11177 9.94889C7.59413 9.81019 7.18981 9.40587 7.05111 8.88823C7 8.69748 7 8.46499 7 8C7 7.53501 7 7.30252 7.05111 7.11177C7.18981 6.59413 7.59413 6.18981 8.11177 6.05111C8.30252 6 8.53501 6 9 6H15C15.465 6 15.6975 6 15.8882 6.05111C16.4059 6.18981 16.8102 6.59413 16.9489 7.11177C17 7.30252 17 7.53501 17 8C17 8.46499 17 8.69748 16.9489 8.88823C16.8102 9.40587 16.4059 9.81019 15.8882 9.94889C15.6975 10 15.465 10 15 10H12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.5 14V17M7 15.5L10 15.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.3333 13.8333C16.3333 14.2936 15.9602 14.6667 15.5 14.6667C15.0398 14.6667 14.6667 14.2936 14.6667 13.8333C14.6667 13.3731 15.0398 13 15.5 13C15.9602 13 16.3333 13.3731 16.3333 13.8333Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.3333 17.1667C16.3333 17.6269 15.9602 18 15.5 18C15.0398 18 14.6667 17.6269 14.6667 17.1667C14.6667 16.7064 15.0398 16.3333 15.5 16.3333C15.9602 16.3333 16.3333 16.7064 16.3333 17.1667Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.6667 15.5C14.6667 15.9602 14.2936 16.3333 13.8333 16.3333C13.3731 16.3333 13 15.9602 13 15.5C13 15.0398 13.3731 14.6667 13.8333 14.6667C14.2936 14.6667 14.6667 15.0398 14.6667 15.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18 15.5C18 15.9602 17.6269 16.3333 17.1667 16.3333C16.7064 16.3333 16.3333 15.9602 16.3333 15.5C16.3333 15.0398 16.7064 14.6667 17.1667 14.6667C17.6269 14.6667 18 15.0398 18 15.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGameboy;
