import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookmarkSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17 2v9.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 13.27 7 12.783 7 11.808V2"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 18H7"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBookmarkSquare;
