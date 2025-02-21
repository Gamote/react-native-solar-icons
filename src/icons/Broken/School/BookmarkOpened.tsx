import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookmarkOpened = (props: SvgProps) => (
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
      d="M22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m9.945 14c-.11 2.193-.436 3.562-1.41 4.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536c.974-.973 2.343-1.3 4.536-1.409"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.396.778.505 1.73.534 3.27"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17 6v4.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 12.27 7 11.783 7 10.808V6"
    />
  </Svg>
);
export default SvgBookmarkOpened;
