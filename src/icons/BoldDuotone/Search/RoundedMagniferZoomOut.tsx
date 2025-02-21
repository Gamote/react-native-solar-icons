import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundedMagniferZoomOut = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8196 19.7001C17.7303 18.6059 18.6359 17.6924 19.7206 17.7825C19.9087 17.7981 20.1339 17.8666 20.3632 17.9363C20.3853 17.943 20.4074 17.9497 20.4295 17.9564C20.4495 17.9624 20.4695 17.9685 20.4895 17.9745C20.7003 18.0378 20.9099 18.1008 21.0693 18.1869C21.9846 18.6813 22.28 19.8626 21.7068 20.7358C21.6069 20.8879 21.452 21.0436 21.2963 21.2003C21.2815 21.2151 21.2668 21.23 21.252 21.2449C21.2373 21.2598 21.2225 21.2747 21.2078 21.2896C21.0525 21.4467 20.8981 21.6029 20.7473 21.7036C19.8817 22.2819 18.7106 21.9838 18.2205 21.0606C18.1351 20.8998 18.0727 20.6883 18.0099 20.4758C18.0039 20.4556 17.9979 20.4354 17.9919 20.4152C17.9853 20.3929 17.9786 20.3706 17.972 20.3483C17.9029 20.117 17.835 19.8898 17.8196 19.7001Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.02344 11.1565C8.02344 10.7572 8.34709 10.4336 8.74633 10.4336H13.5656C13.9648 10.4336 14.2885 10.7572 14.2885 11.1565C14.2885 11.5557 13.9648 11.8794 13.5656 11.8794H8.74633C8.34709 11.8794 8.02344 11.5557 8.02344 11.1565Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundedMagniferZoomOut;
