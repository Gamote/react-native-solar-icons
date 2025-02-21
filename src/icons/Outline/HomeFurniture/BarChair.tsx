import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBarChair = (props: SvgProps) => (
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
      d="M14.936 2.995a17.8 17.8 0 0 0-5.872 0l-.398.066c-1.857.312-3.113 1.987-2.89 3.784l.018.145c.017.136.14.26.313.26h11.786a.31.31 0 0 0 .313-.26l.018-.145.744.093-.744-.093c.223-1.797-1.033-3.472-2.89-3.784zm.992 5.755h1.965c.905 0 1.689-.664 1.802-1.575l-.744-.092.744.092.018-.145c.325-2.621-1.508-5.008-4.13-5.448l-.399-.067a19.3 19.3 0 0 0-6.369 0l-.397.067c-2.623.44-4.456 2.827-4.13 5.448l.017.145A1.81 1.81 0 0 0 6.107 8.75h1.965l-1.67 7.798a.75.75 0 0 0-.133.619l-1.002 4.676a.75.75 0 1 0 1.466.314l.945-4.407h8.644l.945 4.407a.75.75 0 0 0 1.466-.314l-1.002-4.676a.76.76 0 0 0-.132-.619zm-1.534 0H9.606L8 16.25h8.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBarChair;
