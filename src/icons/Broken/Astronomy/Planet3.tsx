import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanet3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 8.00771C3 8.00771 5.93717 11 10.4372 11M21 8.00771C21 8.00771 19.0829 7.87029 16.5 8.75575C15.7031 9.02893 15.197 9.45084 14 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.99986 14.0077C2.99986 14.0077 3.7679 13.9572 5 14.1148M7.90309 14.7558C9.40057 15.2269 11.1719 17 14.5092 17C17.521 17 19.8903 15.871 21.27 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlanet3;
