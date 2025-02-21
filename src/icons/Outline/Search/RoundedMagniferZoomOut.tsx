import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundedMagniferZoomOut = (props: SvgProps) => (
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
      d="M11 2.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M1.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S1.25 16.385 1.25 11m7 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m11.908 8.751a.38.38 0 0 0-.407.407c0 .001.004.027.024.1.022.084.056.197.108.37.047.158.078.26.103.336.026.078.035.093.031.086a.38.38 0 0 0 .544.137c-.007.004.008-.005.067-.06.059-.056.134-.131.251-.248s.192-.192.247-.25c.047-.05.06-.069.062-.07a.38.38 0 0 0-.137-.541c-.001 0-.022-.01-.087-.032a13 13 0 0 0-.336-.103 15 15 0 0 0-.37-.108c-.073-.02-.099-.024-.1-.024m-1.902.532a1.88 1.88 0 0 1 2.027-2.027c.2.017.442.09.703.168l.072.022.065.02c.24.07.465.138.635.229a1.88 1.88 0 0 1 .68 2.694c-.107.16-.273.326-.45.503l-.048.048-.048.048c-.177.177-.343.343-.503.45a1.88 1.88 0 0 1-2.694-.68c-.091-.17-.158-.395-.23-.635l-.02-.065-.02-.072c-.08-.26-.152-.503-.169-.703"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRoundedMagniferZoomOut;
