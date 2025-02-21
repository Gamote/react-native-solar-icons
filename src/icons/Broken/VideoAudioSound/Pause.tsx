import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPause = (props: SvgProps) => (
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
      d="M2 18c0 1.886 0 2.828.586 3.414S4.114 22 6 22s2.828 0 3.414-.586S10 19.886 10 18V6c0-1.886 0-2.828-.586-3.414S7.886 2 6 2s-2.828 0-3.414.586S2 4.114 2 6v8M22 6c0-1.886 0-2.828-.586-3.414S19.886 2 18 2s-2.828 0-3.414.586S14 4.114 14 6v12c0 1.886 0 2.828.586 3.414S16.114 22 18 22s2.828 0 3.414-.586S22 19.886 22 18v-8"
    />
  </Svg>
);
export default SvgPause;
