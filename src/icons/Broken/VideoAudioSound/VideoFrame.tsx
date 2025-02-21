import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrame = (props: SvgProps) => (
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
      d="M17 2.5v19M7 2.5v19"
    />
    <Path
      fill="#000"
      d="M2.5 6.25a.75.75 0 0 0 0 1.5zM7 7.75a.75.75 0 0 0 0-1.5zm10-1.5a.75.75 0 0 0 0 1.5zM2.5 7.75H7v-1.5H2.5zm14.5 0h5v-1.5h-5zM21.5 17.75a.75.75 0 0 0 0-1.5zm-4.5-1.5a.75.75 0 0 0 0 1.5zm-10 1.5a.75.75 0 0 0 0-1.5zm10 0h4.5v-1.5H17zm-15 0h5v-1.5H2z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 12h20M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"
    />
  </Svg>
);
export default SvgVideoFrame;
