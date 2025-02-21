import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCaseMinimalistic = (props: SvgProps) => (
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
      d="M14 6h-4c-1.356 0-2.468 0-3.39.054-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.007 1.354 1.83 1.374"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 11v2M16 11v2"
    />
  </Svg>
);
export default SvgCaseMinimalistic;
