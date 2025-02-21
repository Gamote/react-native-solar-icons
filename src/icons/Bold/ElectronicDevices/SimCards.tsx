import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSimCards = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20.828 16.828C22 15.657 22 13.771 22 10c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14 2C10.229 2 8.343 2 7.17 3.172c-.377.377-.633.83-.807 1.395C7.371 4.5 8.55 4.5 9.896 4.5H10c1.427 0 2.789.571 3.792 1.575l4.133 4.133A5.36 5.36 0 0 1 19.5 14v.104c0 1.346 0 2.525-.067 3.532.565-.174 1.018-.43 1.395-.808"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6c1.025 0 2.006.41 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22m-2.707-3.293C7.586 19 8.057 19 9 19h.5v-5H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707m5.414 0C12.414 19 11.943 19 11 19h-.5v-2H13c0 .943 0 1.414-.293 1.707M11 14c.943 0 1.414 0 1.707.293S13 15.057 13 16h-2.5v-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSimCards;
