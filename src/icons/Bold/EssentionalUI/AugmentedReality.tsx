import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAugmentedReality = (props: SvgProps) => (
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
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m7.216-4.224a.75.75 0 0 0-1.432 0l-2.5 8a.75.75 0 0 0 1.432.448l.71-2.274h2.148l.71 2.274a.75.75 0 0 0 1.432-.448zm-1.32 4.674h1.209L8.5 10.515zM13.25 8a.75.75 0 0 1 .75-.75h2a2.75 2.75 0 0 1 .783 5.387l1.853 2.965a.75.75 0 1 1-1.272.796l-2.28-3.648h-.334V16a.75.75 0 0 1-1.5 0zm1.5 3.25v-2.5H16a1.25 1.25 0 1 1 0 2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAugmentedReality;
