import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphoneRotateAngle = (props: SvgProps) => (
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
      d="M15 5H9"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M3.505 15.588a.75.75 0 1 0-.931-1.176zm8.495 5.1.494.564a.75.75 0 0 0 0-1.129zm-1.5-1.313.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm-7.75-5.25c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373-1.5-1.312-.988 1.128 1.5 1.313zm-1.5 2.441 1.5-1.312-.988-1.129-1.5 1.313zM9.75 19.375v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.96 15c.666.527 1.04 1.121 1.04 1.75 0 1.835-3.187 3.376-7.5 3.814"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.502 17q-.002-.468-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8q0 .532-.002 1"
    />
  </Svg>
);
export default SvgSmartphoneRotateAngle;
