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
      fill="#000"
      d="M6.25 2.222c-1.223.194-2.101.558-2.786 1.242-.684.685-1.048 1.563-1.242 2.786H6.25zM2.069 7.75c-.059.981-.067 2.134-.069 3.5h4.25v-3.5zM2 12.75c.002 1.366.01 2.519.069 3.5H6.25v-3.5zM2.222 17.75c.194 1.223.558 2.102 1.242 2.785.685.685 1.563 1.05 2.786 1.243V17.75zM7.75 21.931C8.906 22 10.3 22 12 22s3.094 0 4.25-.069V12.75h-8.5zM17.75 21.778c1.223-.194 2.102-.558 2.785-1.242.685-.684 1.05-1.563 1.243-2.786H17.75zM21.931 16.25c.059-.981.067-2.134.069-3.5h-4.25v3.5zM22 11.25c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zM21.778 6.25c-.194-1.223-.558-2.101-1.242-2.786-.684-.684-1.563-1.048-2.786-1.242V6.25zM16.25 2.069C15.094 2 13.7 2 12 2s-3.094 0-4.25.069v9.181h8.5z"
    />
  </Svg>
);
export default SvgVideoFrame;
