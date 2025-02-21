import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudSnowfallMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <Path
      fill="#000"
      d="M12 19a1 1 0 0 0 .781-.376.997.997 0 0 0-.182-1.425.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19M15 17.5a1 1 0 0 1-.781-.376A1 1 0 1 1 15 17.5M9 15.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
    <Path
      fill="#000"
      d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCloudSnowfallMinimalistic;
