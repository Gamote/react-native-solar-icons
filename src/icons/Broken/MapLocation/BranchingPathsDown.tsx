import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBranchingPathsDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.75 6.5a.75.75 0 0 0-1.5 0zm5.25 10 .53.53a.75.75 0 0 0 0-1.06zm-2.03.97a.75.75 0 1 0 1.06 1.06zm1.06-3a.75.75 0 1 0-1.06 1.06zM11.25 6.5v6h1.5v-6zM16 17.25h2v-1.5h-2zm1.47-1.28-1.5 1.5 1.06 1.06 1.5-1.5zm1.06 0-1.5-1.5-1.06 1.06 1.5 1.5zm-7.28-3.47A4.75 4.75 0 0 0 16 17.25v-1.5a3.25 3.25 0 0 1-3.25-3.25z"
    />
    <Path
      fill="#000"
      d="M12.75 6.5a.75.75 0 0 0-1.5 0zM6 16.5l-.53-.53a.75.75 0 0 0 0 1.06zm.97 2.03a.75.75 0 0 0 1.06-1.06zm1.06-3a.75.75 0 1 0-1.06-1.06zm3.22-9.03v6h1.5v-6zM8 15.75H6v1.5h2zm-2.53 1.28 1.5 1.5 1.06-1.06-1.5-1.5zm1.06 0 1.5-1.5-1.06-1.06-1.5 1.5zm4.72-4.53A3.25 3.25 0 0 1 8 15.75v1.5a4.75 4.75 0 0 0 4.75-4.75z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
    />
  </Svg>
);
export default SvgBranchingPathsDown;
