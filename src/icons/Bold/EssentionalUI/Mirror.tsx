import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirror = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22"
    />
    <Path
      fill="#000"
      d="M3 12a9 9 0 1 1 17.294 3.5h-3.466a3.5 3.5 0 0 0-2.474 1.025l-.829.829a.5.5 0 0 1-.353.146h-2.344a.5.5 0 0 1-.353-.146l-.829-.829A3.5 3.5 0 0 0 7.172 15.5H3.706A9 9 0 0 1 3 12"
    />
  </Svg>
);
export default SvgMirror;
