import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWalkingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      opacity={0.5}
      cx={12.5}
      cy={4.5}
      r={2.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M7 22L7.50917 21.5927C8.79506 20.564 9.67705 19.1148 10 17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.1582 13.4177L11.9045 13.4923L11.9045 13.4923L11.1582 13.4177ZM11.9713 16.259L12.5652 15.8009L12.5652 15.8009L11.9713 16.259ZM15.8066 22.4581C16.0596 22.7861 16.5306 22.8468 16.8585 22.5938C17.1865 22.3408 17.2472 21.8698 16.9942 21.5419L15.8066 22.4581ZM10.9698 10.0161L10.9292 9.26719L10.9698 10.0161ZM13.0872 10.1315L12.9805 10.8739L12.9805 10.8739L13.0872 10.1315ZM17.1969 13.3005L17.0736 12.5607L17.0736 12.5607L17.1969 13.3005ZM19.1233 13.7398C19.5319 13.6717 19.8079 13.2853 19.7398 12.8767C19.6717 12.4681 19.2853 12.1921 18.8767 12.2602L19.1233 13.7398ZM15.6163 12.3488L16.3278 12.1117L16.3278 12.1117L15.6163 12.3488ZM6.25 14.5C6.25 14.9142 6.58579 15.25 7 15.25C7.41421 15.25 7.75 14.9142 7.75 14.5H6.25ZM10.7537 9.92537L10.412 13.3431L11.9045 13.4923L12.2463 10.0746L10.7537 9.92537ZM11.3775 16.7172L15.8066 22.4581L16.9942 21.5419L12.5652 15.8009L11.3775 16.7172ZM11.5 9.25C11.3217 9.25 11.129 9.25636 10.9292 9.26719L11.0104 10.765C11.1912 10.7552 11.3558 10.75 11.5 10.75V9.25ZM11.5 10.75C11.9543 10.75 12.476 10.8014 12.9805 10.8739L13.1938 9.38912C12.6539 9.31157 12.0541 9.25 11.5 9.25V10.75ZM17.3202 14.0403L19.1233 13.7398L18.8767 12.2602L17.0736 12.5607L17.3202 14.0403ZM12.9805 10.8739C13.8619 11.0005 14.5975 11.6642 14.9048 12.586L16.3278 12.1117C15.8674 10.7305 14.7153 9.60766 13.1938 9.38912L12.9805 10.8739ZM10.9292 9.26719C8.1638 9.41706 6.25 11.8593 6.25 14.5H7.75C7.75 12.5243 9.16607 10.8649 11.0104 10.765L10.9292 9.26719ZM14.9048 12.586C15.2424 13.599 16.2669 14.2159 17.3202 14.0403L17.0736 12.5607C16.7484 12.6149 16.4321 12.4245 16.3278 12.1117L14.9048 12.586ZM10.412 13.3431C10.3396 14.0663 10.2713 14.6261 10.4253 15.1645L11.8674 14.7518C11.8107 14.5537 11.8205 14.332 11.9045 13.4923L10.412 13.3431ZM12.5652 15.8009C12.0497 15.1328 11.9241 14.9498 11.8674 14.7518L10.4253 15.1645C10.5794 15.7028 10.9335 16.1417 11.3775 16.7172L12.5652 15.8009Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWalkingRound;
