import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHanger2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.53589 3.90909C9.53589 2.85473 10.4868 2 11.6599 2C12.8329 2 13.7839 2.85473 13.7839 3.90909C13.7839 4.40532 13.6046 4.85733 13.2925 5.19682C12.6948 5.84706 11.8015 6.50197 11.8015 7.34545V7.6299M11.8015 7.6299C12.533 7.6214 13.2674 7.82458 13.8845 8.24056L14.9423 8.9536M11.8015 7.6299C11.076 7.63834 10.3534 7.85497 9.751 8.27872L2.65531 13.27C1.38322 14.1648 2.08721 16 3.70254 16H6M18 16H20.2975C21.9305 16 22.6234 14.1315 21.317 13.2509L19 11.689"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 22H10C8.11438 22 7.17157 22 6.58579 21.4142C6 20.8284 6 19.8856 6 18C6 16.1144 6 15.1716 6.58579 14.5858C7.17157 14 8.11438 14 10 14H14C15.8856 14 16.8284 14 17.4142 14.5858C18 15.1716 18 16.1144 18 18C18 19.8856 18 20.8284 17.4142 21.4142"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHanger2;
