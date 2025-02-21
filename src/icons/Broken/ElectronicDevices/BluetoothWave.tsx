import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothWave = (props: SvgProps) => (
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
      d="M13.263 4.655C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803L8 12V5.225c0-1.887 0-2.83.605-3.14.362-.185.783-.062 1.395.3"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m13.263 19.345-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"
    />
    <Path
      fill="#000"
      d="M2.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228 5-3.5-.86-1.228-5 3.5z"
    />
    <Path
      fill="#000"
      d="M2.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228 5 3.5-.86 1.228-5-3.5z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 5s2 2.1 2 7c0 .728-.044 1.394-.12 2M19 19s.304-.32.675-1M17 8s1 1.9 1 4-1 4-1 4"
    />
  </Svg>
);
export default SvgBluetoothWave;
