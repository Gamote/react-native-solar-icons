import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoveToFolder = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.975-.974-1.139-2.442-1.166-5.078h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213l-4.125-3a.75.75 0 1 0-.882 1.213l2.26 1.643H2v-7.3c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495q.404.226.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.118.105.225.224C22 7.849 22 9.166 22 11.798"
    />
  </Svg>
);
export default SvgMoveToFolder;
