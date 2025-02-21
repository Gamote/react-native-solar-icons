import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLetterOpened = (props: SvgProps) => (
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
      d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102m12 0c1.3.127 2.175.416 2.828 1.07.654.653.943 1.528 1.07 2.828M10 6h4M11 9h2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 2.003c1.707.014 2.647.11 3.268.73C18 3.465 18 4.643 18 7v2.064c0 .46 0 .69-.094.892-.095.202-.272.35-.626.644l-.72.6M10 2.003c-1.707.014-2.647.11-3.268.73C6 3.465 6 4.643 6 7v2.064c0 .46 0 .69.094.892.095.202.272.35.626.644l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295.65 0 1.239-.273 2-.82"
    />
  </Svg>
);
export default SvgLetterOpened;
