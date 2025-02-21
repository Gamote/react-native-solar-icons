import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLadle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.684 2.75A2.934 2.934 0 0 0 2.75 5.684a.75.75 0 0 1-1.5 0 4.434 4.434 0 1 1 8.868 0v6.057c-.352.18-.683.384-.974.618a3.7 3.7 0 0 0-.526.515v-7.19A2.934 2.934 0 0 0 5.684 2.75M8.633 16.143a7.066 7.066 0 0 0 14.084.225 4 4 0 0 1-.207.207c-.503.464-1.145.817-1.802 1.083-1.324.536-3.02.842-4.708.842-1.685 0-3.486-.305-4.908-.823-.706-.256-1.4-.595-1.948-1.036a3.7 3.7 0 0 1-.51-.498"
    />
    <Path
      fill="#000"
      d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5"
    />
  </Svg>
);
export default SvgLadle;
