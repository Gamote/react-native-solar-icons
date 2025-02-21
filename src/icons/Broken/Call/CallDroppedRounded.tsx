import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCallDroppedRounded = (props: SvgProps) => (
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
      d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382"
    />
  </Svg>
);
export default SvgCallDroppedRounded;
