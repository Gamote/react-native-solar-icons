import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBugMinimalistic = (props: SvgProps) => (
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
      d="M10.422 3.179 7.386 1.357a.75.75 0 0 0-.772 1.286L8.64 3.858a7.03 7.03 0 0 0-2.99 3.194l-1.87-.748a.75.75 0 1 0-.557 1.392l1.945.779A7 7 0 0 0 5 10v2.25H2a.75.75 0 0 0 0 1.5h3V15c0 .85.152 1.666.43 2.42l-2.209.884a.75.75 0 1 0 .558 1.393l2.32-.929A7 7 0 0 0 12 22a7 7 0 0 0 5.9-3.232l2.322.929a.75.75 0 0 0 .556-1.393l-2.208-.883c.278-.755.43-1.57.43-2.42v-1.25h3a.75.75 0 0 0 0-1.5h-3V10q-.002-.788-.167-1.526l1.945-.779a.75.75 0 1 0-.557-1.392l-1.87.748a7.03 7.03 0 0 0-2.99-3.194l2.025-1.215a.75.75 0 1 0-.772-1.286l-3.036 1.822a7 7 0 0 0-3.156 0M10.5 9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-.75 5.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBugMinimalistic;
