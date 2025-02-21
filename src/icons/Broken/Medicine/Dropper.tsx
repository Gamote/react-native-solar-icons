import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropper = (props: SvgProps) => (
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
      d="M22 10h-4M22 13h-3M16 21v1M2 22v-2M18.5 2l-.523.523-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"
    />
  </Svg>
);
export default SvgDropper;
