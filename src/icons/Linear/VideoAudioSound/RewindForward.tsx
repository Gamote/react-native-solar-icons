import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForward = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 8.76844L4.90337 4.30838C3.60089 3.41122 2.00025 4.57895 2.00025 6.42632L2.00024 17.5737C2.00024 19.4211 3.60089 20.5888 4.90337 19.6916L11 15.2316"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M21.0786 10.1468C22.3071 10.9545 22.3071 13.0455 21.0786 13.8532L13.6612 18.7302C12.4673 19.5152 11 18.4934 11 16.877L11 7.12303C11 5.50658 12.4673 4.48482 13.6612 5.26983L21.0786 10.1468Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgRewindForward;
