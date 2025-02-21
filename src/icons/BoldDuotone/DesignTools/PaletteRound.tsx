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
    <Path fill="#000" d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <Path
      fill="#000"
      d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0"
      opacity={0.4}
    />
    <Path
      fill="#000"
      d="m9.248 20.336 3.974-3.974 5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336"
      opacity={0.7}
    />
    <Path
      fill="#000"
      d="m13.222 16.362-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414z"
    />
  </Svg>
);
export default SvgPaletteRound;
