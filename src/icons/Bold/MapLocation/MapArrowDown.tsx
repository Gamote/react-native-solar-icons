import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m3.165 4.497 7.362 16.51c.59 1.324 2.355 1.324 2.946 0l7.362-16.51c.667-1.495-.814-3.047-2.202-2.306L12.73 5.343c-.459.245-1 .245-1.458 0L5.367 2.191c-1.388-.74-2.87.81-2.202 2.306"
    />
  </Svg>
);
export default SvgMapArrowDown;
