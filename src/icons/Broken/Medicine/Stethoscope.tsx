import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStethoscope = (props: SvgProps) => (
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
      d="M9 14.235V17a5 5 0 0 0 3 4.584m2.882.416a4.12 4.12 0 0 0 3.964-3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.286 3h.091c.313 0 .47 0 .601.012a3 3 0 0 1 2.725 2.724c.011.132.011.288.011.6v.9c0 .981-.202 1.916-.567 2.764M5.43 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v1.185a6.714 6.714 0 0 0 6.714 6.714c1.074 0 2.091-.241 3-.673"
    />
    <Circle cx={19} cy={16} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v2M6 2v2"
    />
  </Svg>
);
export default SvgStethoscope;
