import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryLowMinimalistic = (props: SvgProps) => (
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
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363.001.001.002.004.004.007.01.018.026.053q.03.064.075.175c.06.147.132.356.202.631.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01q.01-.022.038-.087c.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z" />
  </Svg>
);
export default SvgBatteryLowMinimalistic;
