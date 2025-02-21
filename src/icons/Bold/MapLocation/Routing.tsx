import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.5 4.25a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H7.855a2 2 0 1 1 0-1.5z"
    />
  </Svg>
);
export default SvgRouting;
