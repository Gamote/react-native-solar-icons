import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiskette = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.1485 21.2196 5.02727 21.5841 6.25 21.7784L6.25 20.948C6.24997 20.0495 6.24995 19.3003 6.32991 18.7055C6.41432 18.0777 6.59999 17.5109 7.05546 17.0555C7.51093 16.6 8.07773 16.4143 8.70552 16.3299C9.3003 16.2499 10.0495 16.25 10.948 16.25H13.052C13.9505 16.25 14.6997 16.2499 15.2945 16.3299C15.9223 16.4143 16.4891 16.6 16.9445 17.0555C17.4 17.5109 17.5857 18.0777 17.6701 18.7055C17.7501 19.3003 17.75 20.0495 17.75 20.948L17.75 21.7784C18.9727 21.5841 19.8515 21.2196 20.5355 20.5355ZM6.25 8C6.25 7.58579 6.58579 7.25 7 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H7C6.58579 8.75 6.25 8.41421 6.25 8Z"
      fill="black"
    />
    <Path
      d="M16.1835 18.9054C16.2484 19.3884 16.25 20.036 16.25 21V21.9313C15.0942 22 13.7004 22 12 22C10.2996 22 8.9058 22 7.75 21.9313V21C7.75 20.036 7.75159 19.3884 7.81654 18.9054C7.87858 18.4439 7.9858 18.2464 8.11612 18.1161C8.24643 17.9858 8.44393 17.8786 8.90539 17.8165C9.38843 17.7516 10.036 17.75 11 17.75H13C13.964 17.75 14.6116 17.7516 15.0946 17.8165C15.5561 17.8786 15.7536 17.9858 15.8839 18.1161C16.0142 18.2464 16.1214 18.4439 16.1835 18.9054Z"
      fill="black"
    />
  </Svg>
);
export default SvgDiskette;
