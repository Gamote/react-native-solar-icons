import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLaptopMinimalistic = (props: SvgProps) => (
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
      d="M3 10v4c0 1.886 0 2.828.586 3.414S5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586S21 15.886 21 14V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9c-2.828 0-4.243 0-5.121.879-.49.49-.707 1.146-.803 2.121M22 21h-6M2 21h10M15 15H9"
    />
  </Svg>
);
export default SvgLaptopMinimalistic;
