import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitor = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1c0 .552 0 1.55-.006 2H2.007C2 12.55 2 11.552 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.75.75 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4z"
    />
  </Svg>
);
export default SvgMonitor;
