import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLetterOpened = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 6h4M11 9h2M8.159 11.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268S8.643 2 11 2h2c2.357 0 3.535 0 4.268.732S18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785s-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296s-2.004-.765-3.841-2.296Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m6 10 2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 10"
    />
  </Svg>
);
export default SvgLetterOpened;
