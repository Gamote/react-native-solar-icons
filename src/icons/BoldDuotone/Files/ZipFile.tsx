import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZipFile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-1l-2.5.003c-2.794.02-4.324.164-5.328 1.169"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M13.5 8H12v1c0 .471 0 .707.146.854.147.146.383.146.854.146h.5c.471 0 .707 0 .854-.146.146-.147.146-.383.146-.854s0-.707-.146-.854C14.207 8 13.97 8 13.5 8M9.646 6.146C9.5 6.293 9.5 6.53 9.5 7s0 .707.146.854C9.793 8 10.03 8 10.5 8H12V6h-1.5c-.471 0-.707 0-.854.146M13.5 4H12v2h1.5c.471 0 .707 0 .854-.146.146-.147.146-.383.146-.854s0-.707-.146-.854C14.207 4 13.97 4 13.5 4M12 4V2l-2.5.003V3c0 .471 0 .707.146.854C9.793 4 10.03 4 10.5 4zM9.5 13v-.125c0-.483.392-.875.875-.875h3.25c.483 0 .875.392.875.875V13a2.5 2.5 0 0 1-5 0"
    />
  </Svg>
);
export default SvgZipFile;
