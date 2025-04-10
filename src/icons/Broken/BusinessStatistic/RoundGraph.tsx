import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundGraph = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 2C17.5228 2 22 6.47715 22 12C22 13.8214 21.513 15.5291 20.6622 17M5 4.85857C3.14864 6.67349 2 9.20261 2 12C2 17.5228 6.47715 22 12 22C13.8214 22 15.5291 21.513 17 20.6622"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 12C5 13.4872 5.46381 14.8662 6.25469 16M12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C10.9264 19 9.90926 18.7583 9 18.3264"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgRoundGraph;
