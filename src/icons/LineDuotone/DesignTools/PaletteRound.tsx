import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaletteRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPaletteRound;
