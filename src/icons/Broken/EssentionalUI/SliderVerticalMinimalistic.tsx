import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSliderVerticalMinimalistic = (props: SvgProps) => (
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
      d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4M21 4.5v15M3 4.5v15"
    />
  </Svg>
);
export default SvgSliderVerticalMinimalistic;
