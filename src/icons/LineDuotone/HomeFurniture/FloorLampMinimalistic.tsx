import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLampMinimalistic = (props: SvgProps) => (
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
      d="M9 22h6M12 22V8"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 2c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 19v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207 2.532-3.241M2.78 11.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898 2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFloorLampMinimalistic;
