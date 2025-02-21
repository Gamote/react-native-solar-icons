import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar2 = (props: SvgProps) => (
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
      d="M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"
    />
    <Path
      fill="#000"
      d="M9.866 5.595a.75.75 0 1 0 .474 1.423zM17.25 12c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12zM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25zM6.75 12c0-1.269.45-2.43 1.198-3.338L6.79 7.707A6.73 6.73 0 0 0 5.25 12zm3.59-4.982A5.2 5.2 0 0 1 12 6.75v-1.5c-.745 0-1.462.12-2.134.345z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgRadar2;
