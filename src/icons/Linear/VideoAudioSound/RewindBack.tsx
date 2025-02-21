import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindBack = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.0002 8.76844L19.0969 4.30838C20.3994 3.41122 22 4.57895 22 6.42632L22 17.5737C22 19.4211 20.3994 20.5888 19.0969 19.6916L13.0002 15.2316"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877L13 7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgRewindBack;
