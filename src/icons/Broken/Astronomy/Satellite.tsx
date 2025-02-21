import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSatellite = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.4692 10.9182C20.4692 10.9182 18.6222 10.3027 16.1595 7.8401C13.6969 5.37747 13.0813 3.53027 13.0813 3.53027"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M20.4698 10.9178C18.4297 12.9579 15.122 12.9579 13.0819 10.9178C11.0418 8.87772 11.0418 5.57005 13.0819 3.52995M20.4698 10.9178C22.5099 8.87772 22.5099 5.57005 20.4698 3.52995C19.7634 2.82354 18.905 2.36174 17.9999 2.14453M20.4698 10.9178L17.6464 16M13.0819 3.52995C13.6429 2.9689 14.2999 2.56214 14.9999 2.30968M13.0819 3.52995L6.83594 7M16.1601 7.83977L10.9999 12.9999"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 9.68721L5 8.02051M14.3132 22.0003L16.5 18.0005M5 19.0003L9 15.0004"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSatellite;
