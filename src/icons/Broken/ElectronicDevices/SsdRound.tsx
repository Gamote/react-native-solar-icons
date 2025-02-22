import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSsdRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.5534 15.4813C20.9538 14.3515 19.8111 13.5882 18.5 13.5882H5.5C4.18893 13.5882 3.04623 14.3515 2.44664 15.4813M21.5534 15.4813C21.8378 16.0172 22 16.6356 22 17.2941C22 19.3408 20.433 21 18.5 21H12M21.5534 15.4813L20.2767 10.2995M2.44664 15.4813L5 5.11765C5.5 3.52941 6.39543 3 7.5 3H16.5C17.6046 3 18.5 3.52941 19 5.11765L19.3192 6.4131M2.44664 15.4813C2.16221 16.0172 2 16.6356 2 17.2941C2 19.3408 3.567 21 5.5 21H8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 17V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15.5 17V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 17V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.5 17V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSsdRound;
