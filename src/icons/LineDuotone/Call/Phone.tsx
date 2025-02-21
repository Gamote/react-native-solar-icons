import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhone = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m16.1 13.359.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18.676 18.965c-1.63.152-5.614-.016-9.86-4.238-4.005-3.982-4.723-7.395-4.813-8.981"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.1 13.36s-1.082 1.076-4.037-1.863-1.872-4.014-1.872-4.014"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPhone;
