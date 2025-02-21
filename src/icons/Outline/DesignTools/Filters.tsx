import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
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
      d="M12 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.8 6.8 0 0 1 5.25 8m.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586 6.75 6.75 0 0 1-7.058-3.529m8.504 3.126c.148.555.226 1.138.226 1.738a6.72 6.72 0 0 1-1.625 4.393 5.25 5.25 0 1 0 4.855-9.258 6.78 6.78 0 0 1-3.456 3.127"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFilters;
