import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLamp = (props: SvgProps) => (
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
      d="M12 18v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207 2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898 2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.05 3.05 0 0 1-3.483-1.098m3.743-.207a2.076 2.076 0 0 0 .34-2.898 2.033 2.033 0 0 0-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 0 0 .107 3.498M9 22h6M12 22v-9m0-6v3"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 7a3 3 0 0 0 2.836-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.016.46-.836.982A3 3 0 0 0 12 7ZM12 2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"
    />
  </Svg>
);
export default SvgFloorLamp;
