import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStethoscope = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 1.25a.75.75 0 0 1 .75.75v.251a3.75 3.75 0 0 1 3.7 3.418c.014.166.014.354.014.629V7.52c0 3.87-2.944 7.05-6.714 7.427V17A4.25 4.25 0 0 0 14 21.25h.882a3.37 3.37 0 0 0 3.108-2.068q.06-.142.085-.327A3.001 3.001 0 0 1 19 13a3 3 0 0 1 .575 5.945 2.9 2.9 0 0 1-.201.817 4.87 4.87 0 0 1-4.492 2.988H14A5.75 5.75 0 0 1 8.25 17v-2.05a7.75 7.75 0 0 1-7-7.715v-.937c0-.275 0-.463.015-.628A3.75 3.75 0 0 1 4.67 2.265a7 7 0 0 1 .58-.015V2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25c-.263 0-.366.001-.448.009a2.25 2.25 0 0 0-2.043 2.043c-.008.09-.009.206-.009.535v.898A6.25 6.25 0 0 0 9 13.485a5.964 5.964 0 0 0 5.964-5.964V6.337c0-.329 0-.445-.008-.535a2.25 2.25 0 0 0-2.206-2.05V4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default SvgStethoscope;
