import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDoubleAltArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M5.00004 17.75C4.68618 17.75 4.40551 17.5546 4.29662 17.2602C4.18773 16.9658 4.27364 16.6348 4.51194 16.4306L11.5119 10.4306C11.7928 10.1898 12.2073 10.1898 12.4881 10.4306L19.4881 16.4306C19.7264 16.6348 19.8123 16.9658 19.7035 17.2602C19.5946 17.5546 19.3139 17.75 19 17.75H5.00004Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.43057 13.4881C4.70014 13.8026 5.17361 13.839 5.48811 13.5694L12 7.98781L18.5119 13.5694C18.8264 13.839 19.2999 13.8026 19.5695 13.4881C19.839 13.1736 19.8026 12.7001 19.4881 12.4306L12.4881 6.43056C12.2072 6.18981 11.7928 6.18981 11.5119 6.43056L4.51192 12.4306C4.19743 12.7001 4.161 13.1736 4.43057 13.4881Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgDoubleAltArrowUp;
