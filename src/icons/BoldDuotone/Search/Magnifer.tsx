import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnifer = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.1001 18.1224L20.7664 21.7887C21.0487 22.071 21.5064 22.071 21.7887 21.7887C22.071 21.5064 22.071 21.0487 21.7887 20.7664L18.1224 17.1001C17.809 17.4671 17.4671 17.809 17.1001 18.1224Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMagnifer;
