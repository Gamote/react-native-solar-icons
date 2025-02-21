import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloset = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.25 2H10C6.229 2 4.343 2 3.172 3.172c-.844.843-1.08 2.057-1.146 4.078h9.224zM2.002 8.75Q2 9.337 2 10v3q0 .662.002 1.25h9.248v-5.5z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.172 19.828c-.844-.843-1.08-2.057-1.146-4.078h9.224V21H10c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M12.75 21H14c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-1.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078H12.75zM15 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM22 13q0 .662-.002 1.25H12.75V2H14c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10zm-7-5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCloset;
