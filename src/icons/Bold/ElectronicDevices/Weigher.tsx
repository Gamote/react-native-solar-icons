import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWeigher = (props: SvgProps) => (
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
      d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm4.25 8a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m8.105-11.69a18.3 18.3 0 0 0-6.71 0l-.476.088c-.88.164-1.4 1.194-1.068 2.118l.744 2.076c.108.301.399.467.68.389q.267-.075.534-.137l-.64-1.99c-.155-.487.071-1.022.507-1.197.436-.174.917.079 1.073.565l.752 2.342a12.9 12.9 0 0 1 4.724.417c.281.078.572-.088.68-.389l.744-2.076c.332-.924-.188-1.954-1.068-2.118z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWeigher;
