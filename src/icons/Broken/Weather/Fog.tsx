import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFog = (props: SvgProps) => (
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
      d="M22 12.353c0 1.39-.508 2.663-1.351 3.647M14.38 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 22h8M5 19h6m8 0h-4M2 16h20"
    />
  </Svg>
);
export default SvgFog;
