import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBones = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill="black"
    />
    <Path
      d="M9.4809 10.6101C10.8721 10.6101 11.9999 9.48227 11.9999 8.09107C11.9999 9.48227 13.1277 10.6101 14.5189 10.6101C15.9101 10.6101 17.0379 9.48227 17.0379 8.09107C17.0379 7.04 16.3941 5.85171 15.4794 5.3335C14.9952 5.05921 14.5189 4.61717 14.5189 4.06069V2.01123L9.4809 2.01123V4.06069C9.4809 4.61717 9.00457 5.05921 8.52039 5.3335C7.60566 5.85171 6.96191 7.04 6.96191 8.09107C6.96191 9.48227 8.0897 10.6101 9.4809 10.6101Z"
      fill="black"
    />
    <Path
      d="M14.557 21.9884L14.557 19.9849C14.557 19.4284 15.0333 18.9864 15.5175 18.7121C16.4322 18.1939 17.076 17.0056 17.076 15.9545C17.076 14.5633 15.9482 13.4355 14.557 13.4355C13.1658 13.4355 12.038 14.5633 12.038 15.9545C12.038 14.5633 10.9102 13.4355 9.51899 13.4355C8.12779 13.4355 7 14.5633 7 15.9545C7 17.0056 7.64375 18.1939 8.55848 18.7121C9.04266 18.9864 9.51899 19.4284 9.51899 19.9849V21.9895L14.557 21.9884Z"
      fill="black"
    />
  </Svg>
);
export default SvgBones;
