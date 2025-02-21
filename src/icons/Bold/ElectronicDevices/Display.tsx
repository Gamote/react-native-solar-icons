import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDisplay = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 8.76c0-2.715 0-4.073.879-4.916C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.844.879.843.879 2.2.879 4.916v.96c0 2.715 0 4.073-.879 4.916-.878.844-2.293.844-5.121.844h-3.25v2.36l5.487 1.757a.714.714 0 0 1 .475.91.76.76 0 0 1-.95.456L12 19.119l-5.763 1.844a.757.757 0 0 1-.949-.456.714.714 0 0 1 .475-.91l5.487-1.756V15.48H8c-2.828 0-4.243 0-5.121-.844C2 13.793 2 12.436 2 9.72z"
    />
  </Svg>
);
export default SvgDisplay;
