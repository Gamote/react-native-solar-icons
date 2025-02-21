import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCode2 = (props: SvgProps) => (
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
      d="m16 11 1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973 0 .89-.771 1.585-2.314 2.973L16 20M8 4.83 6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33c0 .89.771 1.585 2.314 2.973L8 13.83M13.987 5l-.994 3.707M11.843 13l-1.83 6.83"
    />
  </Svg>
);
export default SvgCode2;
