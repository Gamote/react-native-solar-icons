import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOvenMittsMinimalistic = (props: SvgProps) => (
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
      d="M4.019 16.537C2.673 15.22 2 14.563 2 13.745c0-.536.29-1.004.87-1.634.59-.643.886-.964 1.02-1.3.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78m9.744 8.616a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455m0 0-.962.941M17.416 16l-.728.711-3.39 3.315C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974L6.517 18.98M10.8 17.584l-4.283-4.187"
    />
  </Svg>
);
export default SvgOvenMittsMinimalistic;
