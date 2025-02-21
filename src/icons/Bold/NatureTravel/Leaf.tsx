import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLeaf = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.25 2.083a3.5 3.5 0 0 0-.713.242C6.553 4.188 4 9.395 4 13.857c0 4.24 3.183 7.723 7.25 8.108zM12.75 21.965c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zM15.908 4.03a9.2 9.2 0 0 0-2.445-1.705 3.5 3.5 0 0 0-.713-.242v5.106zM18.936 8.624l-6.186 6.187v2.878l6.75-6.75.132-.132a15 15 0 0 0-.696-2.183"
    />
  </Svg>
);
export default SvgLeaf;
