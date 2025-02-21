import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperBin = (props: SvgProps) => (
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
      d="M18 2.052c1.368.09 2.223.332 2.79.99.897 1.043.657 2.644.176 5.848l-1.2 8c-.365 2.438-.548 3.656-1.392 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.393-4.383l-1.2-8c-.48-3.204-.72-4.805.177-5.848C4.108 2 5.728 2 8.967 2H14M21 6H3M19 19H5"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 6-4.5 5 7.5 8m3-13L4 16M20 6 7 19m6 0 7.5-8L16 6m-6 0 10 10M4 6l13 13"
    />
  </Svg>
);
export default SvgPaperBin;
