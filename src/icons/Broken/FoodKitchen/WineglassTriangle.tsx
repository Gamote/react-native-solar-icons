import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglassTriangle = (props: SvgProps) => (
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
      d="m12 14.571 8.516-8.707C21.562 4.794 20.8 3 19.3 3H14m-2 11.571L3.484 5.864C2.438 4.794 3.2 3 4.7 3H10m2 11.571V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"
    />
  </Svg>
);
export default SvgWineglassTriangle;
