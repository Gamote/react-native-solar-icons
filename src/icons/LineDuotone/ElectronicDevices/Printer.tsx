import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter = (props: SvgProps) => (
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
      d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 10H6"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 14H5M18 14v2c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6"
      opacity={0.5}
    />
    <Circle cx={17} cy={10} r={1} fill="#000" opacity={0.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 16.5H9M13 19H9"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPrinter;
