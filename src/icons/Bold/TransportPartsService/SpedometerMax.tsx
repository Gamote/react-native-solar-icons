import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpedometerMax = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C274C"
      fillRule="evenodd"
      d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0 .75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm-2.637 6.13a3 3 0 0 0 0 4.248c.447.446 1.374.758 2.352.973 1.463.32 2.194.481 2.777-.1.582-.582.421-1.312.1-2.773-.216-.976-.528-1.903-.975-2.349a3.01 3.01 0 0 0-4.254 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSpedometerMax;
