import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSun2 = (props: SvgProps) => (
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
      d="M7.285 10.333a5 5 0 1 0 3.049-3.049M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.222l-2.222 2.032M4.222 4.222l2.222 2.032M6.444 17.556l-2.222 2.222M19.778 19.778l-2.222-2.222"
    />
  </Svg>
);
export default SvgSun2;
