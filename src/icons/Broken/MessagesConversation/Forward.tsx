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
      d="M8 10.13c1.613-1.153 3.455-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823l3.972 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S13 18.731 13 17.772v-2.344c-3.6 0-7.5 1.714-9 4.571 0-2.431.377-4.378 1-5.925"
    />
  </Svg>
);
export default SvgForward;
