import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabase = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M4 18V6" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path d="M20 6V18" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgDatabase;
