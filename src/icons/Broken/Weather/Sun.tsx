import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSun = (props: SvgProps) => (
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
      d="M12 2v1M12 21v1M22 12h-1M3 12H2M19.07 4.93l-.392.392M5.322 18.678l-.393.393M19.07 19.07l-.392-.392M5.322 5.322l-.393-.393M6.341 10A6 6 0 1 0 10 6.341"
    />
  </Svg>
);
export default SvgSun;
