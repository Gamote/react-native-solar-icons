import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAtom = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413-2.469-2.47-8.474-.468-13.413 4.47-4.939 4.94-6.94 10.945-4.471 13.414 2.47 2.47 8.475.468 13.413-4.47"
      opacity={0.3}
    />
    <Path
      fill="#000"
      d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47 4.939 4.94 6.94 10.945 4.471 13.414-2.47 2.47-8.475.468-13.413-4.47"
      opacity={0.3}
    />
    <Path fill="#000" d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
  </Svg>
);
export default SvgAtom;
