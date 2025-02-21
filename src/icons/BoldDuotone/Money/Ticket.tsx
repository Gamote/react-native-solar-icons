import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTicket = (props: SvgProps) => (
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
      d="m14.014 17-.006 2.003c-.001.47-.002.705-.149.851s-.382.146-.854.146h-3.01c-3.78 0-5.67 0-6.845-1.172-.81-.806-1.061-1.951-1.14-3.817-.015-.37-.023-.556.046-.679.07-.123.345-.277.897-.586a1.999 1.999 0 0 0 0-3.492c-.552-.308-.828-.463-.897-.586s-.061-.308-.045-.679c.078-1.866.33-3.01 1.139-3.817C4.324 4 6.214 4 9.995 4h3.51a.5.5 0 0 1 .501.499L14.014 7c0 .552.449 1 1.002 1v2c-.553 0-1.002.448-1.002 1v2c0 .552.449 1 1.002 1v2c-.553 0-1.002.448-1.002 1"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.017 16c.553 0 1.002.448 1.002 1v1.976c0 .482 0 .723.155.87.154.148.39.138.863.118 1.863-.079 3.007-.331 3.814-1.136.809-.806 1.06-1.952 1.139-3.818.015-.37.023-.555-.046-.678-.069-.124-.345-.278-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.309.828-.463.897-.586.07-.124.061-.309.046-.679-.079-1.866-.33-3.011-1.14-3.818-.877-.875-2.154-1.096-4.322-1.152a.497.497 0 0 0-.509.497V7c0 .552-.449 1-1.002 1v2c.553 0 1.002.447 1.002 1v2c0 .552-.449 1-1.002 1z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTicket;
