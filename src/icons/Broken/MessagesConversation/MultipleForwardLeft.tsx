import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 10.132c-1.613-1.154-3.455-1.56-5-1.56V6.227c0-.958 0-1.437-.295-1.57-.295-.132-.653.186-1.37.823L7.364 9.01C5.795 10.406 5.011 11.103 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.612.295-1.57V15.43c3.6 0 7.5 1.714 9 4.571 0-2.431-.377-4.378-1-5.926"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5"
    />
  </Svg>
);
export default SvgMultipleForwardLeft;
