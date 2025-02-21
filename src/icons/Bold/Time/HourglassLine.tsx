import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglassLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M5.198 3.3C5.8 2 7.867 2 12 2s6.2 0 6.802 1.3q.078.166.13.346c.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.5 2.5 0 0 1-.13.348C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.3a2.5 2.5 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12 9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647q.052-.18.13-.348M10 17.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHourglassLine;
