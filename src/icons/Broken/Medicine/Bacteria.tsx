import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBacteria = (props: SvgProps) => (
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
      d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m4.5 11.5.414-1M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.17 6.465 6.17 6.465M19 13.136s-1.162.473-1.483 1.673.448 2.19.448 2.19M13.42 17.772 15 19M14.5 14v-2M12 5h-2M12.5 9.5l-1-1"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
);
export default SvgBacteria;
