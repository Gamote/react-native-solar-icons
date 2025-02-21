import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCompass = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465 2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"
    />
  </Svg>
);
export default SvgCompass;
