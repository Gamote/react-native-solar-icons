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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058 5.048 1.067 9.338 1.982 13.513 5m2.958 2.529c4.939 4.939 6.94 10.944 4.471 13.413-1.989 1.989-6.27 1.078-10.442-1.932M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413-4.94 4.939-10.945 6.94-13.414 4.471-1.991-1.99-1.076-6.28 1.942-10.455a24.5 24.5 0 0 1 2.529-2.958C12.468 2.59 18.473.589 20.942 3.058Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </Svg>
);
export default SvgAtom;
