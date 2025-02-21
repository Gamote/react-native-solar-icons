import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMusicNote4 = (props: SvgProps) => (
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
      d="M12 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 18V8"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16.117 3.942-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212C12 7.047 12 7.25 12 7.66c0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"
    />
  </Svg>
);
export default SvgMusicNote4;
