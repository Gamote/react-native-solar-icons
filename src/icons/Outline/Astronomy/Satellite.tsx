import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSatellite = (props: SvgProps) => (
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
      d="M12.629 2.924 1.636 9.03a.75.75 0 1 0 .728 1.311l8.686-4.825a5.98 5.98 0 0 0 1.004 5.368L4.47 18.47a.75.75 0 1 0 1.06 1.06l7.585-7.584a5.98 5.98 0 0 0 5.368 1.004l-4.825 8.686a.75.75 0 1 0 1.31.728l6.108-10.993a5.974 5.974 0 0 0-8.447-8.447m7.644 7.091a4.475 4.475 0 0 0-6.288-6.288c.085.172.2.39.356.649.43.718 1.163 1.747 2.35 2.934 1.186 1.186 2.215 1.918 2.933 2.35q.39.23.65.355m-1.209 1.055-.211-.124c-.703-.422-1.63-1.075-2.683-2.055l-1.983 1.983a4.48 4.48 0 0 0 4.877.196m-5.938-1.257a4.48 4.48 0 0 1-.196-4.878q.059.104.125.212c.421.703 1.074 1.63 2.054 2.683z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSatellite;
