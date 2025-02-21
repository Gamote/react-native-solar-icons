import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTv = (props: SvgProps) => (
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
      d="M22 16v-4c0-2.828 0-4.243-.879-5.121-.825-.826-2.123-.876-4.621-.879v16c2.498-.003 3.796-.053 4.621-.879.879-.878.879-2.293.879-5.12m-3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.57 3.488 13.415 6H15v16H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16.001v-4c0-2.83 0-4.244.879-5.122C3.757 6 5.172 6 8 6h2.584L8.43 3.488a.75.75 0 0 1 1.138-.976L12 5.348l2.43-2.836a.75.75 0 0 1 1.14.976"
    />
  </Svg>
);
export default SvgTv;
