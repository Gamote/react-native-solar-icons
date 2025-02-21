import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglass = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.75 21.75a.75.75 0 0 0 0-1.5zm-7.5-1.5a.75.75 0 0 0 0 1.5zm7.5 0H12v1.5h3.75zm-3.75 0H8.25v1.5H12zM6.895 3.75h10.21v-1.5H6.895zM18.25 4.895V8h1.5V4.895zM5.75 8V4.895h-1.5V8zM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75zM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145z"
    />
    <Path
      fill="#000"
      d="M12.75 15.286a.75.75 0 0 0-1.5 0zM11.25 21a.75.75 0 0 0 1.5 0zm0-5.714V21h1.5v-5.714z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.5 9S7.581 8.087 9 8c2.465-.152 3.535 2.152 6 2 1.419-.087 3.5-1 3.5-1"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWineglass;
