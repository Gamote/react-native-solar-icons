import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWidget2 = (props: SvgProps) => (
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
      d="M2 6.634a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0M12.732 17.366a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5M13 6.5c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5"
    />
  </Svg>
);
export default SvgWidget2;
