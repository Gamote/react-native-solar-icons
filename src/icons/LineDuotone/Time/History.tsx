import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHistory = (props: SvgProps) => (
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
      d="M12 8v4l2.5 2.5"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="m5.604 5.604-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 1 0-1.5.008zm-1.248 6.464a.75.75 0 1 0-1.486-.204zm15.035-5.647c-3.82-3.82-9.993-3.86-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.064zM5.138 18.862c3.82 3.82 9.993 3.86 13.788.064l-1.06-1.06c-3.2 3.199-8.423 3.18-11.668-.064zm13.788.064c3.795-3.795 3.756-9.968-.064-13.788l-1.06 1.06c3.244 3.245 3.263 8.468.064 11.668zM5.074 5.074 3.807 6.34 4.868 7.4l1.266-1.266zm-.74 2.547 2.546.012.007-1.5-2.545-.012zm.754-.754L5.075 4.32l-1.5.008.013 2.545zM2.34 10.58a9.81 9.81 0 0 0 2.797 8.281l1.06-1.06a8.31 8.31 0 0 1-2.371-7.017z"
    />
  </Svg>
);
export default SvgHistory;
