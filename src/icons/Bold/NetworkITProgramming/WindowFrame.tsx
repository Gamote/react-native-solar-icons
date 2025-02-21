import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindowFrame = (props: SvgProps) => (
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
      d="M3.464 3.464c-1.08 1.08-1.363 2.647-1.438 5.286h19.948c-.075-2.64-.358-4.205-1.439-5.286C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M2 12q0-.934.003-1.75H8.25v11.706c-2.34-.097-3.775-.41-4.786-1.42C2 19.07 2 16.714 2 12m4-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-.819 0-1.566 0-2.25-.008V10.25h12.247Q22 11.066 22 12"
    />
  </Svg>
);
export default SvgWindowFrame;
