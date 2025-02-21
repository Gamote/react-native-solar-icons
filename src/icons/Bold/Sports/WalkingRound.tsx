import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWalkingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 4.5C15 5.88071 13.8807 7 12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9292 9.2672C11.129 9.25637 11.3217 9.25 11.5 9.25C12.0541 9.25 12.6539 9.31158 13.1938 9.38913C14.7154 9.60766 15.8674 10.7305 16.3278 12.1117C16.4321 12.4245 16.7484 12.6149 17.0737 12.5607L18.8767 12.2602C19.2853 12.1921 19.6717 12.4681 19.7398 12.8767C19.8079 13.2853 19.5319 13.6717 19.1233 13.7398L17.3203 14.0403C16.2669 14.2159 15.2425 13.599 14.9048 12.586C14.5975 11.6642 13.862 11.0005 12.9806 10.8739C12.7129 10.8354 12.4404 10.8029 12.1757 10.7809L11.9045 13.4923C11.8206 14.332 11.8108 14.5537 11.8675 14.7518C11.9241 14.9498 12.0497 15.1328 12.5652 15.8009L16.9942 21.5419C17.2473 21.8698 17.1865 22.3408 16.8585 22.5938C16.5306 22.8468 16.0596 22.7861 15.8066 22.4581L11.3775 16.7172C11.3536 16.6862 11.33 16.6556 11.3066 16.6254C10.896 16.0941 10.5711 15.6738 10.4253 15.1645C10.2796 14.6551 10.3329 14.1265 10.4004 13.4585C10.4042 13.4205 10.4081 13.382 10.412 13.3431L10.6661 10.8023C8.99274 11.076 7.75003 12.6491 7.75003 14.5C7.75003 14.9142 7.41424 15.25 7.00003 15.25C6.58581 15.25 6.25003 14.9142 6.25003 14.5C6.25003 11.8593 8.16383 9.41707 10.9292 9.2672ZM10.1471 16.7646C10.5533 16.8458 10.8167 17.2409 10.7355 17.6471C10.3779 19.4349 9.4014 21.0394 7.97772 22.1783L7.46855 22.5857C7.1451 22.8444 6.67313 22.792 6.41438 22.4685C6.15562 22.1451 6.20806 21.6731 6.53151 21.4143L7.04067 21.007C8.18877 20.0885 8.97625 18.7946 9.26459 17.3529C9.34583 16.9467 9.74094 16.6833 10.1471 16.7646Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWalkingRound;
