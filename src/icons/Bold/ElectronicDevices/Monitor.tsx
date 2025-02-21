import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitor = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8 17c-2.828 0-4.243 0-5.121-.879-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4zM10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1q.002.827-.006 1.5H2.007Q1.998 11.827 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"
    />
  </Svg>
);
export default SvgMonitor;
