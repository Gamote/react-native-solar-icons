import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter2 = (props: SvgProps) => (
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
      d="M22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879.3.3.498.662.628 1.121M9 10H6M19 15H5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 15v1c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862M6 15v1c0 2.828 0 4.243.879 5.121.641.642 1.568.815 3.121.862"
    />
    <Circle cx={17} cy={10} r={1} fill="#000" />
  </Svg>
);
export default SvgPrinter2;
