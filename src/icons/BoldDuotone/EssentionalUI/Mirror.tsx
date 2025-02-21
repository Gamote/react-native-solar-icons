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
      d="M19.485 17a9 9 0 1 0-14.969 0h2.656a2 2 0 0 1 1.414.586l.828.828a2 2 0 0 0 1.414.586h2.344a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 1 16.828 17z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgMirror;
