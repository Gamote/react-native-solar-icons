import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDna = (props: SvgProps) => (
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
      d="m11.848 12.152.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152.191.558c1.048 3.041.046 6.705-2.539 9.29M10 15l1.843 1.922m-5.078-5.079L8 13.08M11.844 6.765 14 9m2 2 .922.843M4 13l3.5 3.5M19.778 10.89l-3.5-3.5M9.305 18.191l1.587 1.587M14.587 5.587 13 4"
    />
  </Svg>
);
export default SvgDna;
