import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHistory = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069 3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.797-8.28.75.75 0 1 1 1.486.203 8.31 8.31 0 0 0 2.372 7.017c3.244 3.244 8.468 3.263 11.667.064 3.199-3.2 3.18-8.423-.064-11.668-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 0 1 1.5-.008zM12 7.249a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHistory;
