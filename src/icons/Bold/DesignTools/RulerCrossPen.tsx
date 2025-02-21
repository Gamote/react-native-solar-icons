import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerCrossPen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m4.045 5.492 1.447-1.447C6.855 2.682 7.537 2 8.384 2s1.53.682 2.893 2.045l-2.41 2.41-4.822 4.822C2.682 9.913 2 9.23 2 8.384s.682-1.529 2.045-2.892M19.955 18.508l-1.447 1.447C17.145 21.318 16.463 22 15.616 22c-.848 0-1.53-.682-2.893-2.045l4.821-4.821 2.41-2.41C21.319 14.086 22 14.767 22 15.615s-.682 1.529-2.045 2.892M11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234 10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114M20.848 8.713a3.932 3.932 0 0 0-5.561-5.561l-.887.887.038.111a8.75 8.75 0 0 0 2.092 3.32 8.75 8.75 0 0 0 3.431 2.13z"
    />
  </Svg>
);
export default SvgRulerCrossPen;
