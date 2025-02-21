import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclipRounded2 = (props: SvgProps) => (
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
      d="M7.277 3.893c3.54-3.524 9.277-3.524 12.817 0a9 9 0 0 1 0 12.768l-3.675 3.658a4.92 4.92 0 0 1-6.938 0 4.875 4.875 0 0 1 0-6.915l2.94-2.927a.75.75 0 1 1 1.058 1.063l-2.94 2.927a3.375 3.375 0 0 0 0 4.79 3.42 3.42 0 0 0 4.822 0l3.674-3.659a7.5 7.5 0 0 0 0-10.642c-2.954-2.941-7.746-2.941-10.7 0L4.66 8.614a6.47 6.47 0 0 0 0 9.18.75.75 0 0 1-1.058 1.062 7.97 7.97 0 0 1 0-11.305z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPaperclipRounded2;
