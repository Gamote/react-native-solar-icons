import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCosmetic = (props: SvgProps) => (
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
      d="M7.75 5.618a1.75 1.75 0 0 0-2.533-1.565l-2 1a1.75 1.75 0 0 0-.967 1.565v3.632H2a.75.75 0 0 0-.75.75v6a3.75 3.75 0 1 0 7.5 0v-6a.75.75 0 0 0-.75-.75h-.25zm-5 6.132h4.5V17a2.25 2.25 0 1 1-4.5 0zm3.5-1.5V5.618a.25.25 0 0 0-.362-.224l-2 1a.25.25 0 0 0-.138.224v3.632zM16.5 4.25a6.25 6.25 0 0 0-.75 12.455v2.545H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.545A6.251 6.251 0 0 0 16.5 4.25m0 11a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCosmetic;
