import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRefreshCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM5.46056 11.0833C5.83331 7.79988 8.62404 5.25 12.0096 5.25C14.148 5.25 16.0489 6.26793 17.2521 7.84246C17.5036 8.17158 17.4406 8.64227 17.1115 8.89376C16.7824 9.14526 16.3117 9.08233 16.0602 8.7532C15.1289 7.53445 13.6613 6.75 12.0096 6.75C9.45213 6.75 7.33639 8.63219 6.9733 11.0833H7.33652C7.63996 11.0833 7.9135 11.2662 8.02953 11.5466C8.14556 11.8269 8.0812 12.1496 7.86649 12.364L6.69823 13.5307C6.40542 13.8231 5.9311 13.8231 5.63829 13.5307L4.47003 12.364C4.25532 12.1496 4.19097 11.8269 4.30699 11.5466C4.42302 11.2662 4.69656 11.0833 5 11.0833H5.46056ZM18.3617 10.4693C18.0689 10.1769 17.5946 10.1769 17.3018 10.4693L16.1335 11.636C15.9188 11.8504 15.8545 12.1731 15.9705 12.4534C16.0865 12.7338 16.3601 12.9167 16.6635 12.9167H17.0267C16.6636 15.3678 14.5479 17.25 11.9905 17.25C10.3464 17.25 8.88484 16.4729 7.9529 15.2638C7.70002 14.9358 7.22908 14.8748 6.90101 15.1277C6.57295 15.3806 6.512 15.8515 6.76487 16.1796C7.96886 17.7416 9.86205 18.75 11.9905 18.75C15.376 18.75 18.1667 16.2001 18.5395 12.9167H19C19.3035 12.9167 19.577 12.7338 19.693 12.4534C19.8091 12.1731 19.7447 11.8504 19.53 11.636L18.3617 10.4693Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRefreshCircle;
