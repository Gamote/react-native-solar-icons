import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMedalStarCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 8V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M11.1459 12.0225C11.5259 11.3408 11.7159 11 12 11C12.2841 11 12.4741 11.3408 12.8541 12.0225L12.9524 12.1989C13.0603 12.3926 13.1143 12.4894 13.1985 12.5533C13.2827 12.6172 13.3875 12.641 13.5972 12.6884L13.7881 12.7316C14.526 12.8986 14.895 12.982 14.9828 13.2643C15.0706 13.5466 14.819 13.8407 14.316 14.429L14.1858 14.5812C14.0429 14.7483 13.9714 14.8319 13.9392 14.9353C13.9071 15.0387 13.9179 15.1502 13.9395 15.3733L13.9592 15.5763C14.0352 16.3612 14.0733 16.7536 13.8435 16.9281C13.6136 17.1025 13.2682 16.9435 12.5773 16.6254L12.3986 16.5431C12.2022 16.4527 12.1041 16.4075 12 16.4075C11.8959 16.4075 11.7978 16.4527 11.6014 16.5431L11.4227 16.6254C10.7318 16.9435 10.3864 17.1025 10.1565 16.9281C9.92674 16.7536 9.96476 16.3612 10.0408 15.5763L10.0605 15.3733C10.0821 15.1502 10.0929 15.0387 10.0608 14.9353C10.0286 14.8319 9.95713 14.7483 9.81418 14.5812L9.68403 14.429C9.18097 13.8407 8.92945 13.5466 9.01723 13.2643C9.10501 12.982 9.47396 12.8986 10.2119 12.7316L10.4028 12.6884C10.6125 12.641 10.7173 12.6172 10.8015 12.5533C10.8857 12.4894 10.9397 12.3926 11.0476 12.1989L11.1459 12.0225Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={12}
      cy={14}
      r={8}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgMedalStarCircle;
