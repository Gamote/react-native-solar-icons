import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForward = (props: SvgProps) => (
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
      d="m14.664 5.48 3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S13 18.731 13 17.773V15.43c-3.6 0-7.5 1.714-9 4.571 0-9.143 5.333-11.428 9-11.428V6.227c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823"
    />
  </Svg>
);
export default SvgForward;
