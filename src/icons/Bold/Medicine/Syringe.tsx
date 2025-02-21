import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSyringe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.7819 3.22595C17.4807 2.92468 16.9922 2.92468 16.691 3.22595C16.3897 3.52721 16.3897 4.01565 16.691 4.31692L17.6415 5.26743L15.9427 6.96621L15.0752 6.09871C14.3 5.32348 13.9124 4.93586 13.4717 4.77543C13.0042 4.6053 12.4918 4.6053 12.0244 4.77543C11.5836 4.93586 11.196 5.32348 10.4208 6.09871L10.3013 6.21826L17.7817 13.6988L17.9012 13.5792C18.6764 12.804 19.064 12.4164 19.2244 11.9756C19.3945 11.5082 19.3945 10.9958 19.2244 10.5283C19.064 10.0875 18.6764 9.69992 17.9012 8.9247L17.0337 8.05718L18.7324 6.3584L19.6831 7.30914C19.9844 7.6104 20.4728 7.6104 20.7741 7.30914C21.0753 7.00787 21.0753 6.51943 20.7741 6.21817L17.7819 3.22595Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.01572 10.5039L9.21036 7.30919L16.6907 14.7897L15.5376 15.9429L12.5698 12.9751C12.2686 12.6738 11.7801 12.6738 11.4789 12.9751C11.1776 13.2763 11.1776 13.7648 11.4789 14.066L14.4466 17.0339L13.8545 17.626L12.1616 15.933C11.8603 15.6318 11.3719 15.6318 11.0706 15.933C10.7694 16.2343 10.7694 16.7227 11.0706 17.024L12.6919 18.6453C10.8462 19.8795 8.39556 19.8278 6.60052 18.4903L4.31688 20.7741C4.01563 21.0753 3.5272 21.0753 3.22594 20.7741C2.92469 20.4728 2.92469 19.9843 3.22594 19.6831L5.50962 17.3993C3.9667 15.3281 4.1354 12.3843 6.01572 10.5039Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSyringe;
