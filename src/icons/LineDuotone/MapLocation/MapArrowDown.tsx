import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 5.52689C11.7501 5.52689 11.5002 5.4656 11.2706 5.34302L5.36689 2.19099C3.97914 1.45006 2.49789 3.00163 3.16496 4.49746L10.5275 21.0072C10.8226 21.6691 11.4113 22 12 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 5.52689C12.2499 5.52689 12.4998 5.4656 12.7294 5.34302L18.6331 2.19099C20.0209 1.45006 21.5021 3.00163 20.835 4.49746L13.4725 21.0072C13.1774 21.6691 12.5887 22 12 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgMapArrowDown;
