import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointSchool = (props: SvgProps) => (
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
      d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M11.224 6.636a2.28 2.28 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.28 2.28 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.5 9v2.7a.92.92 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.92.92 0 0 1-.59-.879V9"
    />
  </Svg>
);
export default SvgMapPointSchool;
