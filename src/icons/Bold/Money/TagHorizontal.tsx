import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTagHorizontal = (props: SvgProps) => (
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
      d="M12.858 20h-2.637c-3.875 0-5.813 0-7.017-1.172S2 15.771 2 12s0-5.657 1.204-6.828S6.346 4 10.22 4h2.637c2.227 0 3.341 0 4.27.501.93.502 1.52 1.42 2.701 3.259l.681 1.06C21.503 10.366 22 11.14 22 12s-.497 1.634-1.49 3.18l-.68 1.06c-1.181 1.838-1.771 2.757-2.701 3.259S15.085 20 12.858 20M7 7.054c.414 0 .75.316.75.706v8.475c0 .39-.336.706-.75.706s-.75-.316-.75-.706V7.76c0-.39.336-.706.75-.706"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTagHorizontal;
