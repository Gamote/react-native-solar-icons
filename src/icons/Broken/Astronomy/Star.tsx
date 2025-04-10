import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4M17.6569 6.34315L15.9598 8.0402M8.0402 15.9598L6.34315 17.6569M6.34293 6.34332L8.03999 8.04038M15.9596 15.96L17.6566 17.657"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStar;
