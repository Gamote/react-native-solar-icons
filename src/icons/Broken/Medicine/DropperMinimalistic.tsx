import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropperMinimalistic = (props: SvgProps) => (
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
      d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0 2.72 2.72 0 0 1-.88-2V12M19 8h-2M19 14h-2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 11h-2M12 21v1M14 4a2 2 0 1 0-4 0"
    />
  </Svg>
);
export default SvgDropperMinimalistic;
