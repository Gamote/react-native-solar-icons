import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForward = (props: SvgProps) => (
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
      d="m11 15.232-6.097 4.46C3.601 20.589 2 19.422 2 17.574V15m9-6.232-6.097-4.46C3.601 3.411 2 4.578 2 6.426V11M17.37 7.708 13.66 5.27C12.467 4.485 11 5.507 11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706l-.928-.61"
    />
  </Svg>
);
export default SvgRewindForward;
