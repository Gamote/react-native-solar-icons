import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwimming = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 15.772c-1.588-.374-2.404-1.293-3.08-2.315-.424-.64-1.355-.602-1.815.013C16.055 14.876 14.485 16 12 16c-2.507 0-4.082-1.43-5.133-2.777-.44-.562-1.28-.554-1.665.047C4.5 14.366 3.684 15.376 2 15.772M22 20.772c-1.588-.374-2.404-1.293-3.08-2.315-.424-.64-1.355-.602-1.815.013C16.055 19.876 14.485 21 12 21c-2.507 0-4.082-1.43-5.133-2.777-.44-.562-1.28-.554-1.665.047C4.5 19.366 3.684 20.375 2 20.772"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 11.5 3.477-2.086a1.5 1.5 0 0 0 .367-2.263L6.856 6a1.421 1.421 0 0 1 2.145-1.865L15.5 11.5M17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
  </Svg>
);
export default SvgSwimming;
