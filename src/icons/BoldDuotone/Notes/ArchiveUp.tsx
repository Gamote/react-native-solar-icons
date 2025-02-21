import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveUp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.75 21c3.605 0 5.433-.026 6.578-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.817 20.974 7.645 21 11.25 21v-7.046l-1.693 1.881a.75.75 0 0 1-1.114-1.003l3-3.334a.75.75 0 0 1 1.114 0l3 3.334a.75.75 0 0 1-1.114 1.003l-1.693-1.88z"
    />
    <Path
      fill="#000"
      d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgArchiveUp;
