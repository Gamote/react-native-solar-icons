import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForbiddenCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711C8.83418 22.9763 15.1656 22.9761 19.0708 19.0708C22.9761 15.1656 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18.5213 4.4183L4.41821 18.5212C4.58031 18.7092 4.75055 18.8927 4.92895 19.0711C5.10735 19.2495 5.29081 19.4197 5.47887 19.5818L19.5819 5.47898C19.4198 5.29088 19.2495 5.10737 19.0711 4.92893C18.8927 4.75058 18.7093 4.58037 18.5213 4.4183Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgForbiddenCircle;
