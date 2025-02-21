import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointRotate = (props: SvgProps) => (
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
      d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <Path
      fill="#000"
      d="m12 20.688.494.564a.75.75 0 0 0 0-1.129zm9.426-6.276a.75.75 0 1 0-.931 1.176zm-17.92 1.176a.75.75 0 1 0-.932-1.176zm6.994 3.787.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm3.924-2.183a.75.75 0 0 0 .152 1.493zm-3.88.078c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38zm9.95-4.307c.574.454.756.855.756 1.162h1.5c0-.95-.567-1.738-1.324-2.338zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373-1.5-1.312-.988 1.128 1.5 1.313zm-2.744-.748v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm1.244 1.921 1.5-1.312-.988-1.129-1.5 1.313zM21.25 16.75c0 .457-.425 1.112-1.719 1.76-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459 1.379-.69 2.547-1.723 2.547-3.101z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.75 11.912C6.264 10.672 6 9.351 6 8.107 6 4.734 8.686 2 12 2s6 2.734 6 6.107c0 3.347-1.915 7.252-4.903 8.649a2.59 2.59 0 0 1-2.194 0c-.954-.446-1.8-1.148-2.507-2.006"
    />
  </Svg>
);
export default SvgMapPointRotate;
