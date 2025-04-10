import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagniferZoomOut = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.1001 18.1224C17.4671 17.809 17.809 17.4671 18.1224 17.1001L21.7887 20.7664C22.071 21.0487 22.071 21.5064 21.7887 21.7887C21.5064 22.071 21.0487 22.071 20.7664 21.7887L17.1001 18.1224Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.02393 11.1565C8.02393 10.7572 8.34758 10.4336 8.74682 10.4336H13.5661C13.9653 10.4336 14.289 10.7572 14.289 11.1565C14.289 11.5557 13.9653 11.8794 13.5661 11.8794H8.74682C8.34758 11.8794 8.02393 11.5557 8.02393 11.1565Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMagniferZoomOut;
