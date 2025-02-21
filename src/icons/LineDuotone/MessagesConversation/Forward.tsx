import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForward = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.554 3.997 4.676 4.135c1.847 1.633 2.77 2.449 2.77 3.5s-.923 1.869-2.77 3.501l-4.676 4.135c-.843.745-1.264 1.118-1.612.962-.347-.155-.347-.716-.347-1.838v-2.745C8.357 15.647 3.765 17.654 2 21 2 10.294 8.278 7.618 12.595 7.618V4.873c0-1.122 0-1.683.347-1.838.348-.155.77.217 1.612.962"
    />
  </Svg>
);
export default SvgForward;
