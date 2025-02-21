import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignHorizontaSpacing = (props: SvgProps) => (
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
      d="M3 2v20M21 10v12m0-20v4M8 15v1c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v3"
    />
  </Svg>
);
export default SvgAlignHorizontaSpacing;
