import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowDown = (props: SvgProps) => (
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
      d="M12 5.527c-.25 0-.5-.061-.73-.184L5.368 2.191c-1.388-.74-2.87.81-2.202 2.306l7.362 16.51c.296.662.884.993 1.473.993"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 5.527c.25 0 .5-.061.73-.184l5.903-3.152c1.388-.74 2.87.81 2.202 2.306l-7.363 16.51C13.178 21.67 12.59 22 12 22"
      opacity={0.5}
    />
  </Svg>
);
export default SvgMapArrowDown;
