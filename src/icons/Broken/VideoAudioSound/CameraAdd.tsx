import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCameraAdd = (props: SvgProps) => (
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
      d="M15 13H9M12 10v6M19 10h-1M2 13.364c0-3.065 0-4.597.749-5.697.324-.477.74-.886 1.226-1.204.72-.473 1.622-.642 3.003-.702.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636.129.635.696 1.125 1.355 1.125 1.38.06 2.282.23 3.003.702.485.318.902.727 1.226 1.204.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06 3.4 3.4 0 0 1 2.277 18"
    />
  </Svg>
);
export default SvgCameraAdd;
