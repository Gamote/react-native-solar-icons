import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGraph = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005-.008-.004-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003.004-.001q.004 0 .011.004a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1 .301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1z"
    />
  </Svg>
);
export default SvgGraph;
