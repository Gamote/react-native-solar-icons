import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSun2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M3.669 3.716a.75.75 0 0 1 1.06-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.716 4.775a.75.75 0 0 1-.047-1.06M20.331 3.716a.75.75 0 0 1-.047 1.06l-2.222 2.03A.75.75 0 0 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048M17.026 17.025a.75.75 0 0 1 1.06 0l2.222 2.222a.75.75 0 1 1-1.06 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06M6.975 17.025a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.061-1.06l2.222-2.223a.75.75 0 0 1 1.06 0" />
    </G>
  </Svg>
);
export default SvgSun2;
