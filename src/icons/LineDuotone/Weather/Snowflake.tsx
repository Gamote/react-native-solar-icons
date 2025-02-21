import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSnowflake = (props: SvgProps) => (
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
      d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m3.34 7 3.464 2m0 0L12 12M6.804 9 5.706 4.902M6.804 9l-4.098 1.098M12 12l5.196 3M12 12l5.196-3M12 12l-5.196 3m10.392 0 3.464 2m-3.464-2 4.098-1.098M17.196 15l1.098 4.098M20.66 7l-3.464 2m0 0 1.098-4.098M17.196 9l4.098 1.098M6.804 15 3.34 17m3.464-2-4.098-1.098M6.804 15l-1.098 4.098"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSnowflake;
