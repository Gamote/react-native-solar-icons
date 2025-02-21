import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlight = (props: SvgProps) => (
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
      d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.152-1.594.153-.367.442-.657 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.618C20 4.785 20 4.58 20 4.172V4c0-.943 0-1.414-.293-1.707S18.943 2 18 2H6c-.943 0-1.414 0-1.707.293S4 3.057 4 4v.172c0 .408 0 .613.076.796s.22.329.51.618l3.242 3.242c.578.578.868.868 1.02 1.235S9 10.84 9 11.657Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 10H9M12 13v2M4.5 5h15"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFlashlight;
