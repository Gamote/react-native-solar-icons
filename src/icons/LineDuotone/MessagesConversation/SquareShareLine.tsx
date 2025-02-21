import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareShareLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 13.998c-.029 3.414-.218 5.296-1.46 6.537C19.076 22 16.718 22 12.003 22s-7.073 0-8.538-1.465S2 16.713 2 11.997C2 7.282 2 4.924 3.465 3.46 4.706 2.218 6.588 2.029 10.002 2"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 7h-8c-1.818 0-2.913.892-3.32 1.3q-.187.19-.19.19 0 .003-.19.19C9.892 9.087 9 10.182 9 12v3m13-8-5-5m5 5-5 5"
    />
  </Svg>
);
export default SvgSquareShareLine;
