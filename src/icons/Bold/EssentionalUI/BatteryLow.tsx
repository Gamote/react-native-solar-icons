import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryLow = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5C15.2712 20 17.1569 20 18.3284 18.8284C19.2715 17.8853 19.4554 16.4796 19.4913 14H19.9999C20.9427 14 21.4141 14 21.707 13.7071C21.9999 13.4142 21.9999 12.9428 21.9999 12C21.9999 11.0572 21.9999 10.5858 21.707 10.2929C21.4141 10 20.9427 10 19.9999 10H19.4913C19.4554 7.52043 19.2715 6.11466 18.3284 5.17157C17.1569 4 15.2712 4 11.5 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM6.63577 8.34438C6.99786 8.14322 7.45446 8.27368 7.65562 8.63577L7 9C7.65562 8.63577 7.65634 8.63708 7.65634 8.63708L7.65711 8.63847L7.65878 8.64152L7.66263 8.64864L7.67226 8.66699C7.67951 8.68106 7.68839 8.69881 7.69863 8.72032C7.71912 8.76335 7.74506 8.82135 7.77448 8.89489C7.83335 9.04206 7.90593 9.251 7.9765 9.52622C8.11776 10.0772 8.25 10.8899 8.25 12C8.25 13.1101 8.11776 13.9228 7.9765 14.4738C7.90593 14.749 7.83335 14.9579 7.77448 15.1051C7.74506 15.1787 7.71912 15.2367 7.69863 15.2797C7.68839 15.3012 7.67951 15.3189 7.67226 15.333L7.66263 15.3514L7.65878 15.3585L7.65711 15.3615L7.65634 15.3629L7.65562 15.3642C7.45446 15.7263 6.99786 15.8568 6.63577 15.6556C6.27675 15.4562 6.14545 15.0056 6.33933 14.645L6.34434 14.6348C6.35119 14.6204 6.36431 14.5917 6.38177 14.548C6.41665 14.4608 6.46907 14.3135 6.5235 14.1012C6.63224 13.6772 6.75 12.9899 6.75 12C6.75 11.0101 6.63224 10.3228 6.5235 9.89878C6.46907 9.6865 6.41665 9.53919 6.38177 9.45198C6.36431 9.40834 6.35119 9.37962 6.34434 9.36522L6.33933 9.35499C6.14545 8.99441 6.27675 8.54383 6.63577 8.34438Z"
      fill="black"
    />
  </Svg>
);
export default SvgBatteryLow;
