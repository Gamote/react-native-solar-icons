import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbuds = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 8.3V6.187c0-.174 0-.26-.004-.334-.08-1.541-1.385-2.774-3.017-2.85C18.901 3 18.81 3 18.625 3c-.307 0-.46 0-.59.006-2.72.126-4.895 2.18-5.029 4.749-.006.122-.006.267-.006.558V18.75c0 1.243 1.067 2.25 2.382 2.25s2.383-1.007 2.383-2.25V12.3c0-.552.474-1 1.058-1 1.755 0 3.177-1.343 3.177-3M2 8.3V6.187c0-.174 0-.26.004-.334.08-1.541 1.385-2.774 3.017-2.85C5.098 3 5.19 3 5.375 3c.307 0 .46 0 .59.006 2.72.126 4.895 2.18 5.029 4.749.006.122.006.267.006.558V18.75C11 19.993 9.933 21 8.618 21s-2.383-1.007-2.383-2.25V12.3c0-.552-.474-1-1.059-1C3.422 11.3 2 9.957 2 8.3"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M13 17.25h4.765v1.5H13zM11 17.25H6.235v1.5H11zM19.5 5.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M4.5 5.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default SvgAirbuds;
