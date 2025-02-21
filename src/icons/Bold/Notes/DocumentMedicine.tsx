import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDocumentMedicine = (props: SvgProps) => (
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
      d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M12.75 6a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 1 0 0 1.5h1.25V10a.75.75 0 0 0 1.5 0V8.75H14a.75.75 0 0 0 0-1.5h-1.25zM8 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm1 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDocumentMedicine;
