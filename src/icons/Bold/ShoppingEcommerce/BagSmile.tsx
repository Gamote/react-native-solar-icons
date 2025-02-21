import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBagSmile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079S18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143.606-.496 1.396-.63 2.693-.667M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM12 17.25a2.25 2.25 0 0 1-2.122-1.5.75.75 0 1 0-1.414.5 3.751 3.751 0 0 0 7.073 0 .75.75 0 0 0-1.415-.5A2.25 2.25 0 0 1 12 17.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBagSmile;
