import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFullScreen = (props: SvgProps) => (
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
      d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172A3 3 0 0 0 2.585 4M2 10c0-.735 0-1.4.009-2M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10M14 22c3.771 0 5.657 0 6.828-1.172a3 3 0 0 0 .587-.828M22 14c0 .736 0 1.4-.009 2"
    />
  </Svg>
);
export default SvgFullScreen;
