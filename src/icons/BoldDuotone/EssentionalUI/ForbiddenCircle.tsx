import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForbiddenCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0 3.905-10.237 0-14.142-10.237-3.905-14.142 0"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M18.521 4.418 4.418 18.521a10 10 0 0 0 1.06 1.06L19.583 5.48a10 10 0 0 0-1.06-1.06"
    />
  </Svg>
);
export default SvgForbiddenCircle;
