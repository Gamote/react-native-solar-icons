import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaaylistMinimalistic = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M20 6H3M10 16H3M10 11H3"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.628-1.081 1.102-2.723 2.05s-2.463 1.422-3.136 1.333a2 2 0 0 1-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"
    />
  </Svg>
);
export default SvgPlaaylistMinimalistic;
