import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWalletMoney = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 10h4"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.998 12.5c0-.077.002-.533 0-.565-.036-.501-.465-.9-1.005-.933-.035-.002-.076-.002-.16-.002h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.488.002-.565"
    />
    <Circle cx={18} cy={14} r={1} fill="#000" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 22h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828m0-6c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07M6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6"
    />
  </Svg>
);
export default SvgWalletMoney;
