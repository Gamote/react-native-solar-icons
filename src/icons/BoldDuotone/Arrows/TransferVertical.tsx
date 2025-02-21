import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransferVertical = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 10.25C20.3093 10.25 20.5869 10.0602 20.699 9.77191C20.8111 9.48366 20.7348 9.15614 20.5068 8.94715L14.5068 3.44715C14.2875 3.24617 13.9703 3.19374 13.698 3.3135C13.4258 3.43327 13.25 3.70259 13.25 4.00002L13.25 20C13.25 20.4142 13.5858 20.75 14 20.75C14.4142 20.75 14.75 20.4142 14.75 20L14.75 10.25L20 10.25Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M4.00003 13.75L9.25003 13.75L9.25003 4C9.25003 3.58579 9.58581 3.25 10 3.25C10.4142 3.25 10.75 3.58579 10.75 4V20C10.75 20.2974 10.5743 20.5667 10.302 20.6865C10.0298 20.8063 9.71248 20.7538 9.49323 20.5529L3.49324 15.0529C3.26524 14.8439 3.18892 14.5164 3.30105 14.2281C3.41317 13.9399 3.69074 13.75 4.00003 13.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTransferVertical;
