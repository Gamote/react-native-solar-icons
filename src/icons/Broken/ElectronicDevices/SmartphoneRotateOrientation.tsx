import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphoneRotateOrientation = (props: SvgProps) => (
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
      d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h1c2.828 0 4.243 0 5.121-.879C15 20.243 15 18.828 15 16V8c0-2.828 0-4.243-.879-5.121C13.243 2 11.828 2 9 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2M17.5 10.006c1.86.027 2.914.165 3.621.873.879.878.879 2.292.879 5.12 0 2.83 0 4.243-.879 5.122-.707.707-1.761.845-3.621.872M11 5H6M19 18v-4"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 6.986 22 8c0-3.015-2.162-5.517-5-6"
    />
  </Svg>
);
export default SvgSmartphoneRotateOrientation;
